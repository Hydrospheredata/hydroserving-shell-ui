import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import {Model} from "../../../../domain";
import {Dictionary} from "lodash";
import {ModelsQuery} from "../../state/models.query";
import {Observable} from "rxjs";

@Component({
  selector: 'hs-models-sidebar',
  templateUrl: './models-sidebar.component.html',
  styleUrls: ['./models-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsSidebarComponent implements OnInit {
  models$: Observable<Dictionary<[Model, ...Model[]]>> = this.query.selectGrouped()
  constructor(private query: ModelsQuery) {}

  ngOnInit(): void {}
}
