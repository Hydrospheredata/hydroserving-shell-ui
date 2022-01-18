import { Injectable } from '@angular/core';
import { combineQueries, Query } from '@datorama/akita';
import { ReportsStore, ReportsState } from './reports.store';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  generateDataDriftReport,
  generateProfilerReport,
  OverallReport,
  Report,
} from '@app/features/report/state/report.model';

@Injectable()
export class ReportsQuery extends Query<ReportsState> {
  reports$ = this.select(s => s.reports);

  constructor(protected store: ReportsStore, private routerQuery: RouterQuery) {
    super(store);
  }

  selectOverallReports(): Observable<OverallReport[]> {
    return this.reports$.pipe(
      map(reports =>
        reports.map((report: any[]): OverallReport => {
          const dataDriftReport: Report | undefined = report.find(
            (report: Report) => report.pluginId === 'drift_report_plugin',
          );
          const generatedDataDriftReport =
            generateDataDriftReport(dataDriftReport);
          const profilerReport: Report | undefined = report.find(
            (report: Report) => report.pluginId === 'profiler_plugin',
          );
          const generatedProfilerReport =
            generateProfilerReport(profilerReport);
          const file = dataDriftReport
            ? dataDriftReport.file
            : profilerReport?.file;
          const fileModifiedAt = dataDriftReport
            ? dataDriftReport.fileModifiedAt
            : profilerReport?.fileModifiedAt;
          return <OverallReport>{
            file,
            fileModifiedAt,
            profilerReport: generatedProfilerReport,
            dataDriftReport: generatedDataDriftReport,
          };
        }),
      ),
    );
  }

  selectCurrentReport() {
    return combineQueries([
      this.selectOverallReports(),
      this.routerQuery.selectParams('file'),
    ]).pipe(
      map(([reports, file]) => {
        const decodedFile = atob(file);
        return reports.find(
          (report: OverallReport) => report.file === decodedFile,
        );
      }),
    );
  }
}
