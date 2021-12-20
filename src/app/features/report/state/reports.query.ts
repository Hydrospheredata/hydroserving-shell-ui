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
      this.selectDriftReports(),
      this.selectDriftedFeatures(),
    ]).pipe(
      map(([profilerReports, driftReports, driftedFeatures]) => {
        return profilerReports.map((report: any, index: any) => {
          if (driftReports[index]) {
            const featuresNumber = Object.keys(
              driftReports[index].featureReports,
            ).length;
            return {
              ...report,
              driftedFeatures: driftedFeatures[index],
              featuresNumber,
            };
          }
        });
      }),
      map(reports => reports.filter((report: Report) => report)),
    );
  }

  selectDriftReports(): Observable<Report[] | any> {
    return this.reports$.pipe(
      map(reports =>
        reports.filter(
          (report: { pluginId: string }) =>
            report.pluginId === 'drift_report_plugin',
        ),
      ),
    );
  }

  selectDriftedFeatures(): Observable<string[]> {
    return this.selectDriftReports().pipe(
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
        const decodedFile = atob(file);
        return reports.find(
          (report: { file: any }) => report.file === decodedFile,
        );
      }),
    );
  }
}
