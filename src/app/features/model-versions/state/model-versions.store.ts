import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { ModelVersion } from 'hydrosphere/ModelVersion';

export interface ModelVersionsState extends EntityState<ModelVersion, number> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products' })
export class ModelVersionsStore extends EntityStore<ModelVersionsState> {
  constructor() {
    super();
  }
}
