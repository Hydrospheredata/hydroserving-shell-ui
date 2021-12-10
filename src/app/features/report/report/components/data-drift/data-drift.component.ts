import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'hs-data-drift',
  templateUrl: './data-drift.component.html',
  styleUrls: ['./data-drift.component.scss', '../../report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataDriftComponent {
  @Input() driftedFeatures: string[] = [];
  @Input() featuresNumber!: number;
  @Input() modelName: string = '';
  @Input() modelVersion!: number;
  @Input() file: string = '';
}
