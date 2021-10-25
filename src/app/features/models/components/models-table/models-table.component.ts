import { Component } from '@angular/core';
import { ModelsQuery } from '../../state/models.query';

@Component({
  templateUrl: './models-table.component.html',
  styleUrls: ['./models-table.component.scss'],
})
export class ModelsTableComponent {
  models$ = this.query.selectCurrentModelVersions();
  modelName$ = this.query.selectCurrentModelName();

  constructor(private query: ModelsQuery) {}
}
