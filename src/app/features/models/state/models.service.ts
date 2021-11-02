import { Injectable } from '@angular/core';
import { ModelsStore } from './models.store';
import { Model } from '@domain/index';
import { ShellHttpService } from 'src/app/shell-http.service';
import { environment } from '@environments/environment';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SnackbarService } from '@app/snackbar.service';

@Injectable({ providedIn: 'root' })
export class ModelsService {
  constructor(
    private store: ModelsStore,
    private http: ShellHttpService,
    private snackbar: SnackbarService,
  ) {}

  apiUrl = environment.apiUrl;

  get() {
    this.http
      .get<Model[]>(`${this.apiUrl}/model`)
      .pipe(
        catchError(err => {
          this.snackbar.showMessage(err.message);
          return of([]);
        }),
      )
      .subscribe(mvs => this.store.update({ models: mvs, loaded: true }));
  }
}
