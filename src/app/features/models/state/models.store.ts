import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Model } from '@domain/index';

export interface ModelsState {
  models: Model[];
  loaded: boolean;
}

export function createInitialState(): ModelsState {
  return {
    models: [],
    loaded: false,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'models' })
export class ModelsStore extends Store<ModelsState> {
  constructor() {
    super(createInitialState());
  }
}
