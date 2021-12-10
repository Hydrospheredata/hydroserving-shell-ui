import { NgModule } from '@angular/core';
import { ReportsComponent } from './reports/reports.component';
import { ReportComponent } from './report/report.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { FailedChecksComponent } from './report/components/failed-checks/failed-checks.component';
import { SuspiciousChecksComponent } from './report/components/suspicious-checks/suspicious-checks.component';
import { DataDriftComponent } from './report/components/data-drift/data-drift.component';

@NgModule({
  declarations: [
    ReportsComponent,
    ReportComponent,
    FailedChecksComponent,
    SuspiciousChecksComponent,
    DataDriftComponent,
  ],
  imports: [SharedModule, RouterModule],
  exports: [ReportsComponent, ReportComponent],
})
export class ReportModule {}
