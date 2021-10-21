import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ModelVersion } from 'hydrosphere/ModelVersion';
import { Dictionary } from 'lodash';

@Component({
  selector: 'hs-mode-versions-sidebar',
  templateUrl: './mode-versions-sidebar.component.html',
  styleUrls: ['./mode-versions-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModeVersionsSidebarComponent implements OnInit {
  @Input() models: Dictionary<ModelVersion[]> | null = null;

  constructor() {}

  ngOnInit(): void {}
}
