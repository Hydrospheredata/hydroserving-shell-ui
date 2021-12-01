import { Injectable } from '@angular/core';
import { combineQueries, Query } from '@datorama/akita';
import { ReportsStore, ReportsState } from './reports.store';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Report } from '@app/features/report/state/report.model';

@Injectable()
export class ReportsQuery extends Query<ReportsState> {
  reports$ = this.select(s => s.reports);

  constructor(protected store: ReportsStore, private routerQuery: RouterQuery) {
    super(store);
  }

  selectProfilerReports(): Observable<Report[] | any> {
    return this.reports$.pipe(
      map(reports =>
        reports.filter(
          (report: { pluginId: string }) =>
            report.pluginId === 'profiler_plugin',
        ),
      ),
    );
  }

  selectReports(): Observable<Report[] | any> {
    return combineQueries([
      this.selectProfilerReports(),
      this.selectDriftedFeatures(),
    ]).pipe(
      map(([reports, features]) => {
        return reports.map((report: any, index: any) => {
          return { ...report, features: features[index] };
        });
      }),
    );
  }

  selectDriftedFeatures(): Observable<string[]> {
    return this.reports$.pipe(
      map(reports =>
        reports.filter(
          (report: { pluginId: string }) =>
            report.pluginId === 'drift_report_plugin',
        ),
      ),
      map(reports => {
        return reports.map((report: { [x: string]: any }) => {
          return Object.keys(report.featureReports).filter(key => {
            return !report.featureReports[key].every(
              (obj: { isGood: any }) => obj.isGood,
            );
          });
        });
      }),
    );
  }

  selectCurrentReport() {
    return combineQueries([
      this.selectReports(),
      this.routerQuery.selectParams('file'),
    ]).pipe(
      map(([reports, file]) => {
        return reports.find((report: { file: any }) => report.file === file);
      }),
    );
  }
}
