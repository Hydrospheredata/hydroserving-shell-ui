import { QueryEntity } from '@datorama/akita';
// import { Observable } from 'rxjs';
import { PluginsState, PluginsStore } from './plugins.store';
// import { Plugin, PluginState } from './plugin.model';
import { Injectable } from '@angular/core';
// import { map } from 'rxjs/operators';
// import { filter, isEqual, get, compose } from 'lodash/fp';

@Injectable({ providedIn: 'root' })
export class PluginsQuery extends QueryEntity<PluginsState> {
  all$ = this.selectAll();

  constructor(store: PluginsStore) {
    super(store);
  }

  // selectActivatePlugins(): Observable<Plugin[]> {
  //   return this.selectAll().pipe(filterActivePlugins);
  // }

  // selectNonActivatePlugins(): Observable<Plugin[]> {
  //   return this.selectAll().pipe(filterNonActivePlugins);
  // }
}

// const withStatus = (s: PluginState) => compose(isEqual(s), get('state'));
// const filterActivePlugins = map(filter<Plugin>(withStatus('active')));
// const filterNonActivePlugins = map(filter<Plugin>(withStatus('not_active')));
