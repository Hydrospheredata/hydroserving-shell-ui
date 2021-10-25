import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'hs-model-status',
  templateUrl: './model-status.component.html',
  styleUrls: ['./model-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelStatusComponent implements OnInit {
  @Input() status: string = 'undefined';

  constructor() {}

  ngOnInit(): void {}
}
