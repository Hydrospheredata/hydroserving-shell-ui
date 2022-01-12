import { Component } from '@angular/core';
import { PluginsQuery } from 'src/app/features/plugins/state/plugins.query';
import { ModelsQuery } from '../../state/models.query';
import { ReportsQuery } from '@app/features/report/state/reports.query';

@Component({
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.scss'],
  providers: [ReportsQuery],
})
export class ModelDetailsComponent {
  model$ = this.modelsQuery.selectCurrentModel();
  plugins$ = this.pluginsQuery.all$;
  reports$ = this.reportsQuery.selectReports();

  constructor(
    private modelsQuery: ModelsQuery,
    private pluginsQuery: PluginsQuery,
    private reportsQuery: ReportsQuery,
  ) {}
}
