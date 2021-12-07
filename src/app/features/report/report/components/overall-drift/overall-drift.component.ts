import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'hs-overall-drift',
  templateUrl: './overall-drift.component.html',
  styleUrls: ['./overall-drift.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverallDriftComponent {
  @Input() driftDetected: boolean = false;

  constructor() {}
}
