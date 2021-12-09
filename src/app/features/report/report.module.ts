import { NgModule } from '@angular/core';
import { ReportsComponent } from './reports/reports.component';
import { ReportComponent } from './report/report.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [ReportsComponent, ReportComponent],
  imports: [SharedModule, RouterModule],
  exports: [ReportsComponent, ReportComponent],
})
export class ReportModule {}
