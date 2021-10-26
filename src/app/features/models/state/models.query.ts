import { Injectable } from '@angular/core';
import { combineQueries, Query } from '@datorama/akita';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { ModelsState, ModelsStore } from './models.store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { groupBy, get } from 'lodash/fp';
import { Model } from '../../../domain';
import { Dictionary } from 'lodash';

@Injectable({ providedIn: 'root' })
export class ModelsQuery extends Query<ModelsState> {
  all$ = this.select(s => s.models);
  constructor(protected store: ModelsStore, private routerQuery: RouterQuery) {
    super(store);
  }

  selectCurrentModelName(): Observable<string> {
    return this.routerQuery.selectParams('modelName');
  }

  selectCurrentModelVersions(): Observable<Model[]> {
    return combineQueries([
      this.selectGrouped(),
      this.routerQuery.selectParams('modelName'),
    ]).pipe(
      map(([grouped, modelName]) => {
        return grouped[modelName];
      }),
    );
  }

  selectGrouped(): Observable<Dictionary<Model[]>> {
    return this.all$.pipe(
      map(models => {
        return groupBy<Model>(get('name'))(models);
      }),
    );
  }

  selectCurrentModel() {
    return combineQueries([
      this.selectCurrentModelVersions(),
      this.routerQuery.selectParams('modelVersion'),
    ]).pipe(
      map(([mvs, version]) => {
        return mvs.find(model => model.version == version);
      }),
    );
  }
}
