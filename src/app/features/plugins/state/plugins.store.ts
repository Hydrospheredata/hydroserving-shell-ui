import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Plugin } from '../state/plugin.model';

export interface PluginsState extends EntityState<Plugin, string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'plugins', idKey: 'name' })
export class PluginsStore extends EntityStore<PluginsState> {
  constructor() {
    super();
  }
}
