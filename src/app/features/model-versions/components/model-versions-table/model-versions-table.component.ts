import { Component, OnInit } from '@angular/core';
import { ModelVersionsQuery } from '../../state/model-versions.query';

@Component({
  templateUrl: './model-versions-table.component.html',
  styleUrls: ['./model-versions-table.component.scss'],
})
export class ModelVersionsTableComponent implements OnInit {
  modelVersions$ = this.mvQuery.selectCurrentModelVersions();

  constructor(private mvQuery: ModelVersionsQuery) {}

  ngOnInit(): void {}
}
