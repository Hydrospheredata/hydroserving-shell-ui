import { Component } from '@angular/core';
import { ModelsQuery } from './state/models.query';
import { Observable } from 'rxjs';
import { Model } from '@domain/index';
import { RedirectService } from '../../redirect.service';

@Component({
  selector: 'hs-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss'],
})
export class ModelsComponent {
  models$: Observable<Model[]> = this.query.all$;

  constructor(
    private query: ModelsQuery,
    private redirectService: RedirectService,
  ) {
    this.redirectService.redirectToFirst(this.models$, 'models');
  }
}
