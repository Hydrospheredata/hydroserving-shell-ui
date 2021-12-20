import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ReportsFacade } from '@app/features/report/state/reports.facade';
import { ReportsQuery } from '@app/features/report/state/reports.query';
import { ReportsService } from '@app/features/report/state/reports.service';

@Component({
  selector: 'hs-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  providers: [ReportsFacade, ReportsQuery, ReportsService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsComponent {
  reports$ = this.query.selectReports();
  displayedColumns: string[] = ['batch', 'checks', 'suspicious', 'drift'];

  constructor(private facade: ReportsFacade, private query: ReportsQuery) {}

  ngOnInit() {
    this.facade.loadAllReports();
  }
}
