import { Injectable } from '@angular/core';
import { ModelsStore } from './models.store';
import { Model } from '@domain/index';
import { ShellHttpService } from 'src/app/shell-http.service';
import { environment } from '@environments/environment';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModelsService {
  constructor(
    private store: ModelsStore,
    private http: ShellHttpService,
    private matSnackBar: MatSnackBar,
  ) {}

  apiUrl = environment.apiUrl;

  get() {
    this.http
      .get<Model[]>(`${this.apiUrl}/model`)
      .pipe(
        catchError(err => {
          this.matSnackBar.open(err.message, undefined, {
            duration: 2000,
            panelClass: 'snackbar',
          });
          return of([]);
        }),
      )
      .subscribe(mvs => this.store.update({ models: mvs }));
  }
}
