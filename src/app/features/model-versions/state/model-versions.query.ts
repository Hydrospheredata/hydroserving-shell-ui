import { Injectable } from '@angular/core';
import { combineQueries, QueryEntity } from '@datorama/akita';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { ModelVersionsState, ModelVersionsStore } from './model-versions.store';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ModelVersion } from 'hydrosphere/ModelVersion';
import { Model } from 'hydrosphere/Model';
import { groupBy, filter, get, pipe, isEqual, find } from 'lodash/fp';

export type ModelWithCount = Model & { modelVersions: number };

@Injectable({ providedIn: 'root' })
export class ModelVersionsQuery extends QueryEntity<ModelVersionsState> {
  constructor(protected store: ModelVersionsStore, private routerQuery: RouterQuery) {
    super(store);
  }

  selectCurrentModelVersions(): Observable<ModelVersion[]> {
    return combineQueries([this.selectAll(), this.routerQuery.selectParams('modelName')]).pipe(
      map(([mvs, modelName]) => {
        return modelName
          ? filter<ModelVersion>(pipe(get('model.name'), isEqual(modelName)))(mvs)
          : [];
      }),
    );
  }

  selectGrouped() {
    return this.selectAll().pipe(map((mvs) => groupBy<ModelVersion>(get('model.name'))(mvs)));
  }

  selectCurrentModelVersion() {
    return combineQueries([
      this.selectCurrentModelVersions(),
      this.routerQuery.selectParams('modelName'),
      this.routerQuery.selectParams('modelVersion'),
    ]).pipe(
      map(([mvs, modelName, version]) => {
        return mvs.find(
          (modelVersion) =>
            modelVersion.model.name == modelName && modelVersion.modelVersion == version,
        );
      }),
    );
  }
}
