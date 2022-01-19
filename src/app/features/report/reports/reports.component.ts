import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { ReportsQuery } from '@app/features/report/state/reports.query';
import { MatTableDataSource } from '@angular/material/table';
import { OverallReport } from '@app/features/report/state/report.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'hs-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  providers: [ReportsQuery],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsComponent implements OnInit, AfterViewInit {
  reports$ = this.query.selectOverallReports();
  displayedColumns: string[] = [
    'batch',
    'checks',
    'suspicious',
    'drift',
    'date',
  ];
  dataSource!: MatTableDataSource<OverallReport>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private query: ReportsQuery) {}

  ngOnInit() {
    this.reports$.subscribe(reports => {
      this.dataSource = new MatTableDataSource<OverallReport>(reports);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
