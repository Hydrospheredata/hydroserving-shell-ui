import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportsService } from './reports.service';
import { catchError, switchMap } from 'rxjs/operators';
import { ReportsStore } from './reports.store';
import { of } from 'rxjs';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { SnackbarService } from '@app/snackbar.service';

@Injectable()
export class ReportsFacade {
  constructor(
    private router: ActivatedRoute,
    private service: ReportsService,
    private store: ReportsStore,
    private routerQuery: RouterQuery,
    private snackbar: SnackbarService,
  ) {}

  public loadAllReports(): void {
    this.routerQuery
      .selectParams(['modelName', 'modelVersion'])
      .pipe(
        switchMap(([modelName, modelVersion]) => {
          return this.service.getAllReports(modelName, modelVersion).pipe(
            catchError(err => {
              this.snackbar.showMessage(err.message);
              return of([]);
            }),
          );
        }),
      )
      .subscribe(reports => this.store.update({ reports }));
  }
}
