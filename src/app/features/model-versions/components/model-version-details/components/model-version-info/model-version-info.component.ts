import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ModelVersion } from 'hydrosphere/ModelVersion';
import { Plugin } from '../../../../../plugins/state/plugin.model';

@Component({
  selector: 'hs-model-version-info',
  templateUrl: './model-version-info.component.html',
  styleUrls: ['./model-version-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelVersionInfoComponent {
  @Input() modelVersion: ModelVersion | null = null;
  @Input() plugins: Plugin[] | null = [];

  constructor() {}

  get fullName(): string {
    if (this.modelVersion) {
      return this.modelVersion.model.name;
    } else {
      return '';
    }
  }
}
