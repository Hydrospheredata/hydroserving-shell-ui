import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

interface Report {
  batch: string;
}

@Component({
  selector: 'hs-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsComponent implements OnInit {
  constructor(private router: Router) {}
  displayedColumns: string[] = ['batch'];

  reports: Report[] = [{ batch: 'batch_1.csv' }];

  ngOnInit(): void {}

  openReport(a: any) {
    this.router.navigate(['./profiler']);
  }
}
