import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ReportsFacade } from '@app/features/report/state/reports.facade';

@Component({
  templateUrl: './model-details-page.component.html',
  providers: [ReportsFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ModelDetailsPageComponent implements OnInit {
  constructor(private facade: ReportsFacade) {}
  ngOnInit(): void {
    this.facade.loadAllReports();
  }
}
