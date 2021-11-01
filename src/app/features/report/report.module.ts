import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports/reports.component';
import { MatTableModule } from '@angular/material/table';
import { ReportComponent } from './report/report.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ReportsComponent, ReportComponent],
  imports: [CommonModule, MatTableModule, RouterModule],
  exports: [ReportsComponent, ReportComponent],
})
export class ReportModule {}
