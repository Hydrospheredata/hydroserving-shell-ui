import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'hs-suspicious-checks',
  templateUrl: './suspicious-checks.component.html',
  styleUrls: [
    './suspicious-checks.component.scss',
    '../../report.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuspiciousChecksComponent {
  @Input() susVerdict: any;
  @Input() susRatio: any;
  @Input() modelName: string = '';
  @Input() modelVersion!: number;
  @Input() file: string = '';

  constructor() {}
}
