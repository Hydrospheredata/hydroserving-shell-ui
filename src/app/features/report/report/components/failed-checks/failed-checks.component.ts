import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'hs-failed-checks',
  templateUrl: './failed-checks.component.html',
  styleUrls: ['./failed-checks.component.scss', '../../report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FailedChecksComponent {
  @Input() failRatio: number = 0;
  @Input() modelName: string = '';
  @Input() modelVersion!: number;
  @Input() file: string = '';

  constructor() {}
}
