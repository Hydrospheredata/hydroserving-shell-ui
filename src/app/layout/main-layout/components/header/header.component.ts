import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor() {}
}
