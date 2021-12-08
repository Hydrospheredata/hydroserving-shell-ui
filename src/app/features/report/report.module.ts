import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports/reports.component';
import { MatTableModule } from '@angular/material/table';
import { ReportComponent } from './report/report.component';
import { RouterModule } from '@angular/router';
import { HsUiKitModule } from '@hydrosphere/hs-ui-kit';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OverallDriftComponent } from './report/components/overall-drift/overall-drift.component';
import { FailedChecksComponent } from './report/components/failed-checks/failed-checks.component';
import { SuspiciousChecksComponent } from './report/components/suspicious-checks/suspicious-checks.component';
import { DataDriftComponent } from './report/components/data-drift/data-drift.component';

@NgModule({
  declarations: [
    ReportsComponent,
    ReportComponent,
    OverallDriftComponent,
    FailedChecksComponent,
    SuspiciousChecksComponent,
    DataDriftComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule,
    HsUiKitModule,
    MatTooltipModule,
  ],
  exports: [ReportsComponent, ReportComponent],
})
export class ReportModule {}
