import { Injectable } from '@angular/core';
import { EntityState, EntityStore, Store, StoreConfig } from '@datorama/akita';
import { Model } from "../../../domain";

export interface ModelsState {
  models: Model[]
}

export function createInitialState(): ModelsState {
  return {
    models: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'models' })
export class ModelsStore extends Store<ModelsState> {
  constructor() {
    super(createInitialState());
  }
}
