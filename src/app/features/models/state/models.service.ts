import { Injectable } from '@angular/core';
import { ModelsStore } from './models.store';
import { Model } from '../../../domain';
import { ShellHttpService } from 'src/app/shell-http.service';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class ModelsService {
  constructor(private store: ModelsStore, private http: ShellHttpService) {}

  apiUrl = environment.apiUrl;

  get() {
    this.http
      .get<Model[]>(`${this.apiUrl}/model`)
      .subscribe(mvs => this.store.update({ models: mvs }));
  }
}
