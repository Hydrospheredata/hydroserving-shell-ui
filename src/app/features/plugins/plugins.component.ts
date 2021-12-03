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
  plugins$ = this.query.all$;
  constructor(private query: PluginsQuery, private service: PluginsService) {}

  activate(plugin: Plugin) {
    this.service.activate(plugin);
  }
}
