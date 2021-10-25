import { Component } from '@angular/core';
import {ModelsQuery} from "./state/models.query";
import {Observable, of} from "rxjs";
import {Model} from "../../domain";
import { Dictionary } from 'lodash';

@Component({
  selector: 'hs-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss'],
})
export class ModelsComponent {
  models$: Observable<Dictionary<[Model, ...Model[]]>> = this.query.selectGrouped()

  constructor(private query: ModelsQuery) {}
}
