import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { AppState, AppStore } from './app.store';

@Injectable({ providedIn: 'root' })
export class AppQuery extends Query<AppState> {
  loaded$ = this.select(s => s.loaded);
  error$ = this.select(s => s.error);

  constructor(protected store: AppStore) {
    super(store);
  }
}
