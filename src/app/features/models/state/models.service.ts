import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelsStore } from './models.store';
import { of } from 'rxjs';
import {Model} from "../../../domain";

@Injectable({ providedIn: 'root' })
export class ModelsService {
  constructor(private store: ModelsStore, private http: HttpClient) {}

  get() {
    const mv: Model = {
      name: 'adult',
      version: 1,
      signature: {inputs: [], outputs: []},
      metadata: new Map(),
      trainingDataPrefix: 'some/path',
      inferenceDataPrefix: 'some/path'
    };

    const mv2: Model = {
      name: 'census',
      version: 1,
      signature: {inputs: [], outputs: []},
      metadata: new Map(),
      trainingDataPrefix: 'some/path',
      inferenceDataPrefix: 'some/path'
    };

    return of([mv, mv2]).subscribe((mvs) => this.store.update({models: mvs}));
  }
}
