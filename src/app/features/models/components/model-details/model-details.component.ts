import { Component } from '@angular/core';
import { PluginsQuery } from 'src/app/features/plugins/state/plugins.query';
import { ModelsQuery } from '../../state/models.query';

@Component({
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.scss'],
})
export class ModelDetailsComponent {
  model$ = this.query.selectCurrentModel();
  plugins$ = this.pluginsQuery.all$;

  constructor(private query: ModelsQuery, private pluginsQuery: PluginsQuery) {}
}
