import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';

import { ModelsQuery } from './features/models/state/models.query';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class CanActivateModelVersionGuard implements CanActivate {
  constructor(
    private router: Router,
    private query: ModelsQuery,
    private matSnackBar: MatSnackBar,
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
          this.matSnackBar.open(
            `Models version: ${modelVersionNumber} doesn't exist for model with name: ${modelName}`,
            undefined,
            {
              duration: 2500,
              panelClass: 'snackbar',
            },
          );
          this.router.navigate(['models', modelName]);
          return of(false);
        }
      }),
    );
  }
}
