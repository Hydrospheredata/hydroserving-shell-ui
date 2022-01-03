import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'hs-navigation-wrapper',
  templateUrl: './navigation-wrapper.component.html',
  styleUrls: ['./navigation-wrapper.component.scss'],
})
export class NavigationWrapperComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  back() {
    this.router.url.includes('overall-report')
      ? this.navigate(['../../'])
      : this.navigate(['..']);
  }

  navigate(path: any[]) {
    this.router.navigate(path, {
      relativeTo: this.activatedRoute.children[0],
    });
  }
}
