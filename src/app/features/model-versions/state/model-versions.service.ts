import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelVersionsStore } from './model-versions.store';
import { ModelVersion } from 'hydrosphere/ModelVersion';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModelVersionsService {
  constructor(private store: ModelVersionsStore, private http: HttpClient) {}

  get() {
    // return this.http
    //   .get<ModelVersion[]>('')

    const mv: ModelVersion = {
      id: 1,
      created: '',
      modelVersion: 1,
      model: {
        name: 'adult',
        id: 1,
      },
      status: 'active',
      metadata: new Map(),
      applications: [],
      isExternal: false,
    };

    return of([mv]).subscribe((mvs) => this.store.set(mvs));
  }
}
