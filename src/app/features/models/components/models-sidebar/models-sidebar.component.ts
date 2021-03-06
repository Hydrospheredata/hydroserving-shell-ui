import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Model } from '@domain/index';
import { Dictionary } from 'lodash';
import { ModelsQuery } from '../../state/models.query';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'hs-models-sidebar',
  templateUrl: './models-sidebar.component.html',
  styleUrls: ['./models-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsSidebarComponent {
  models$: Observable<Dictionary<Model[]>> = this.query.selectGrouped();
  constructor(private query: ModelsQuery, private router: Router) {}

  openRegisterModelForm() {
    this.router.navigate(['models', 'add']);
  }
}
