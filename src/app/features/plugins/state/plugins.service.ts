import { loadRemoteModule } from '@angular-architects/module-federation';
import { Inject, Injectable } from '@angular/core';
import { PluginsStore } from './plugins.store';
import { Route, Router } from '@angular/router';
import { Plugin } from './plugin.model';
import { HS_ABSOLUTE_URL } from 'src/app/base_url.token';
import { ShellHttpService } from 'src/app/shell-http.service';
import { environment } from '@environments/environment';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SnackbarService } from '@app/snackbar.service';

@Injectable({ providedIn: 'root' })
export class PluginsService {
  constructor(
    private store: PluginsStore,
    private http: ShellHttpService,
    private snackbar: SnackbarService,
    private router: Router,
    @Inject(HS_ABSOLUTE_URL) private shellBackendUrl: string,
  ) {}

  apiUrl = environment.apiUrl;

  get() {
    this.http
      .get<Plugin[]>(`${this.apiUrl}/plugin`)
      .pipe(
        catchError(err => {
          this.snackbar.showMessage(err.message);
          return of([]);
        }),
      )
      .subscribe(plugins => {
        this.store.set(plugins);
        plugins.forEach(p => this.activate(p));
      });
  }

  activate(plugin: Plugin) {
    this.store.update(plugin.name, e => ({ ...e, state: 'active' }));

    this.registerPluginIntoPlatform(plugin);
  }

  private registerPluginIntoPlatform(plugin: Plugin) {
    const getRoutePath = (pluginRoute: string) =>
      `:modelName/:modelVersion/${pluginRoute}`;

    const metadata = plugin.pluginInfo;

    const route: Route = {
      path: getRoutePath(metadata.routePath),
      loadChildren: () =>
        loadRemoteModule(metadata).then(_ => _[metadata.ngModuleName]),
      data: {
        shellBackendUrl: this.shellBackendUrl + this.apiUrl + '/',
      },
    };

    const rootRoutes = this.router.config;
    if (rootRoutes[0]) {
      const rootChildrens = rootRoutes[0].children;

      if (rootChildrens) {
        const modelsChildrens = rootChildrens[0].children;
        if (modelsChildrens) {
          const newMV = [...modelsChildrens, route];
          rootChildrens[0].children = newMV;

          this.router.resetConfig(rootRoutes);
        }
      }
    }
  }
}
