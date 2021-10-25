import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'hs-model-status',
  templateUrl: './model-status.component.html',
  styleUrls: ['./model-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelStatusComponent {
  @Input() status: string = 'undefined';

  constructor() {}
}
