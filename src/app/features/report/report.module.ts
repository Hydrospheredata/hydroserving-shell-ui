import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports/reports.component';
import { MatTableModule } from '@angular/material/table';
import { ReportComponent } from './report/report.component';
import { RouterModule } from '@angular/router';
import { HsUiKitModule } from '@hydrosphere/hs-ui-kit';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [ReportsComponent, ReportComponent],
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
