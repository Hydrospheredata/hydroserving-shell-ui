import { Component } from '@angular/core';
import { PluginsQuery } from 'src/app/features/plugins/state/plugins.query';
import { ModelVersionsQuery } from '../../state/model-versions.query';

@Component({
  templateUrl: './model-version-details.component.html',
  styleUrls: ['./model-version-details.component.scss'],
})
export class ModelVersionDetailsComponent {
  modelVersion$ = this.mvQuery.selectCurrentModelVersion();
  plugins$ = this.pluginsQuery.selectActivatePlugins();

  constructor(private mvQuery: ModelVersionsQuery, private pluginsQuery: PluginsQuery) {}
}
