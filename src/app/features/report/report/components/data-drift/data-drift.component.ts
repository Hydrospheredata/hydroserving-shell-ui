import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'hs-data-drift',
  templateUrl: './data-drift.component.html',
  styleUrls: ['./data-drift.component.scss', '../../report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataDriftComponent {
  @Input() driftedFeatures: string[] = [];
  @Input() showedDetails: boolean = false;
  @Output() showed = new EventEmitter<boolean>();

  show() {
    this.showed.emit();
  }
}
