import { Component, OnInit } from '@angular/core';
import { ModelsService } from './features/models/state/models.service';
import { PluginsService } from './features/plugins/state/plugins.service';

@Component({
  selector: 'hs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private modelVersionService: ModelsService,
    private plugins: PluginsService,
  ) {}

  ngOnInit() {
    this.plugins.get();
    this.modelVersionService.get();
  }
}
