import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

type SummaryGrade = 'excellent' | 'good' | 'fair' | 'bad';
type ReportDetailsType = 'checks' | 'suspicious' | 'drift' | 'overallDrift';

interface ChecksSummary {
  percentOfFailedRecords: number;
  grade: SummaryGrade;
}
interface SuspiciousRecordsSummary {
  percentOfSuspiciousChecks: number;
  grade: SummaryGrade;
}
interface DriftSummary {
  drifted: boolean;
  grade: SummaryGrade;
}
interface OverallDriftSummary {
  drifted: boolean;
  grade: SummaryGrade;
}

interface ReportDetails {
  summary: {
    checks: ChecksSummary;
    suspicious: SuspiciousRecordsSummary;
    drift: DriftSummary;
    overallDrift: OverallDriftSummary;
  };
  records: {
    checks: [];
    suspicious: [];
    drift: [];
    overallDrift: [];
  };
}

@Component({
  selector: 'hs-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportComponent implements OnInit {
  reportsMeta = [];
  selectedDetails: ReportDetailsType | null = null;

  report: ReportDetails = {
    summary: {
      checks: { percentOfFailedRecords: 10, grade: 'fair' },
      suspicious: { percentOfSuspiciousChecks: 30, grade: 'fair' },
      drift: { drifted: false, grade: 'excellent' },
      overallDrift: { drifted: true, grade: 'bad' },
    },
    records: {
      checks: [],
      suspicious: [],
      drift: [],
      overallDrift: [],
    },
  };

  constructor() {}

  ngOnInit(): void {}

  revealDetails(detailsType: ReportDetailsType) {
    this.selectedDetails = detailsType;
  }
}
