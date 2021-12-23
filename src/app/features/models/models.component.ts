import { Component } from '@angular/core';
import { ModelsQuery } from './state/models.query';
import { Observable } from 'rxjs';
import { Model } from '@domain/index';
import { RedirectService } from '../../redirect.service';
import { Router } from '@angular/router';

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
    private router: Router,
  ) {
    this.redirectService.redirectToFirst(this.models$, 'models');
  }

  openRegisterModelForm() {
    this.router.navigate(['models', 'add']);
  }
}
