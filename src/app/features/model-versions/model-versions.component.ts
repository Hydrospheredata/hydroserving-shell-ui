import { Component } from '@angular/core';
import { ModelVersionsQuery } from './state/model-versions.query';

@Component({
  selector: 'hs-model-versions',
  templateUrl: './model-versions.component.html',
  styleUrls: ['./model-versions.component.scss'],
})
export class ModelVersionsComponent {
  models$ = this.mvQuery.selectGrouped();

  constructor(private mvQuery: ModelVersionsQuery) {}
}
