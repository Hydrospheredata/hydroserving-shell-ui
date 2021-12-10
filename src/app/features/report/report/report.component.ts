import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { ReportsFacade } from '@app/features/report/state/reports.facade';
import { ReportsQuery } from '@app/features/report/state/reports.query';

@Component({
  selector: 'hs-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [ReportsFacade, ReportsQuery],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportComponent {
  report$ = this.query.selectCurrentReport();
  modelName$ = this.routerQuery.selectParams('modelName');
  modelVersion$ = this.routerQuery.selectParams('modelVersion');

  constructor(private routerQuery: RouterQuery, private query: ReportsQuery) {}
}
