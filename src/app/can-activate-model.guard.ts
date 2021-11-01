import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ModelsQuery } from './features/models/state/models.query';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Model } from '@domain/index';

@Injectable({ providedIn: 'root' })
export class CanActivateModelGuard implements CanActivate {
  constructor(
    private router: Router,
    private query: ModelsQuery,
    private matSnackBar: MatSnackBar,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const modelName = route.params.modelName;

    return this.query.all$.pipe(
      switchMap(models => {
        console.log('models', models);
        const model: Model | undefined = models.find(
          curModel => curModel.name === modelName,
        );

        if (model) {
          return of(true);
        } else {
          this.matSnackBar.open(
            `Models with name ${modelName} doesn't exist`,
            undefined,
            {
              duration: 2000,
              panelClass: 'snackbar',
            },
          );
          this.redirectToDefault();
          return of(false);
        }
      }),
    );
  }

  private redirectToDefault(): void {
    this.router.navigate(['models']);
  }
}
