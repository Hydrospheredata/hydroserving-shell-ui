import { Component } from '@angular/core';
import { PluginsQuery } from './state/plugins.query';
import { PluginsService } from './state/plugins.service';
import { Plugin } from './state/plugin.model';

@Component({
  selector: 'hs-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss'],
})
export class PluginsComponent {
  constructor(private query: PluginsQuery, private service: PluginsService) {}

  activePlugins$ = this.query.selectActivatePlugins();
  nonActivePlugins$ = this.query.selectNonActivatePlugins();

  activate(plugin: Plugin) {
    this.service.activate(plugin);
  }
}
