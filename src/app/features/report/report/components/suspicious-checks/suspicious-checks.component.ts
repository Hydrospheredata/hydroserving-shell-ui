import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

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
  @Input() showedDetails: boolean = false;

  @Output() showed = new EventEmitter<boolean>();

  constructor() {}

  show(): void {
    this.showed.emit();
  }
}
