import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

interface ReportMeta {}

@Component({
  selector: 'hs-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportComponent implements OnInit {
  reportsMeta = [];

  constructor() {}

  ngOnInit(): void {}
}
