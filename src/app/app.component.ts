import { Component, OnInit } from '@angular/core';
import { ModelVersionsService } from './features/model-versions/state/model-versions.service';
import { PluginsService } from './features/plugins/state/plugins.service';
import { ShellHttpService } from './shell-http.service';

@Component({
  selector: 'hs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private modelVersionService: ModelVersionsService, private plugins: PluginsService) {}

  ngOnInit() {
    this.plugins.get();
    this.modelVersionService.get();
  }
}
