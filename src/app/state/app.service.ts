import { Injectable } from '@angular/core';
import { ModelsService } from '@app/features/models/state/models.service';
import { PluginsService } from '@app/features/plugins/state/plugins.service';
import { environment } from '@environments/environment';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppStore } from './app.store';

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(
    private versions: ModelsService,
    private plugins: PluginsService,
    private store: AppStore,
  ) {}

  apiUrl = environment.apiUrl;

  preloadData() {
    return combineLatest([this.versions.get(), this.plugins.get()]).pipe(
      tap(([versions, plugins]) => {
        this.versions.set(versions);
        this.plugins.set(plugins);
        this.store.update({ loaded: true });
      }),
    );
  }
}
