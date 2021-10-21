import { loadRemoteModule } from '@angular-architects/module-federation';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { mockPlugin, profilerPlugin } from '../mocks/plugin';
import { PluginsStore } from './plugins.store';
import { Route, Router } from '@angular/router';
import { Plugin } from './plugin.model';
import { HS_ABSOLUTE_URL } from 'src/app/base_url.token';

@Injectable({ providedIn: 'root' })
export class PluginsService {
  constructor(
    private store: PluginsStore,
    private http: HttpClient,
    private router: Router,
    @Inject(HS_ABSOLUTE_URL) private shellBackendUrl: string,
  ) {}

  get() {
    // this.http
    // .get<Plugin[]>('')
    of([profilerPlugin]).subscribe((plugins) => {
      this.store.set(plugins);
      plugins.forEach((p) => p.state == 'active' && this.activate(p));
    });
  }

  activate(plugin: Plugin) {
    this.store.update(plugin.name, (e) => ({ ...e, state: 'active' }));

    this.registerPluginIntoPlatform(plugin);
  }

  private registerPluginIntoPlatform(plugin: Plugin = mockPlugin) {
    const getRoutePath = (pluginRoute: string) => `:modelName/:modelVersion/${pluginRoute}`;

    const metadata = plugin.metadata;

    // We pass data attribute here to notify how mfe's should construct route based on url
    // like `shellBakendUrl/plugin/profiler/aggregation/adult/1'

    const r: Route = {
      path: getRoutePath(plugin.metadata.routePath),
      loadChildren: () => loadRemoteModule(metadata).then((_) => _[metadata.ngModuleName]),
      data: {
        shellBackendUrl: 'http://localhost:5000/',
      },
    };

    const rootRoutes = this.router.config;
    if (rootRoutes[0]) {
      const rootChildrens = rootRoutes[0].children;

      if (rootChildrens) {
        const modelsChildrens = rootChildrens[0].children;
        if (modelsChildrens) {
          const newMV = [...modelsChildrens, r];
          rootChildrens[0].children = newMV;

          this.router.resetConfig(rootRoutes);
        }
      }
    }
  }
}
