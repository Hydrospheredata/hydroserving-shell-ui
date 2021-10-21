import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'hs-model-version-status',
  templateUrl: './model-version-status.component.html',
  styleUrls: ['./model-version-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelVersionStatusComponent implements OnInit {
  @Input() status: string = 'undefined';

  constructor() {}

  ngOnInit(): void {}
}
