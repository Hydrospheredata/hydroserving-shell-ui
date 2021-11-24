import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';

import { ModelsQuery } from './features/models/state/models.query';
import { SnackbarService } from '@app/snackbar.service';

@Injectable({ providedIn: 'root' })
export class CanActivateModelVersionGuard implements CanActivate {
  constructor(
    private router: Router,
    private query: ModelsQuery,
    private snackbar: SnackbarService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const modelVersionNumber = Number(route.params.modelVersion);
    const modelName = route.params.modelName;

    return this.query.loaded$.pipe(
      filter(loaded => loaded === true),
      switchMap(_ => this.query.all$),
      switchMap(modelVersions => {
        const modelVersionExists = modelVersions.some(
          modelVersion =>
            modelVersion.version === modelVersionNumber &&
            modelVersion.name === modelName,
        );

        if (modelVersionExists) {
          return of(true);
        } else {
          this.snackbar.showMessage(
            `Models version: ${modelVersionNumber} doesn't exist for model with name: ${modelName}`,
          );
          this.router.navigate(['models', modelName]);
          return of(false);
        }
      }),
    );
  }
}
