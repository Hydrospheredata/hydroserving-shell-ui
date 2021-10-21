import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hs-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  constructor() {}
}
