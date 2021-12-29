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
    if (this.router.url.includes('overall-report')) {
      this.router.navigate(['../../'], {
        relativeTo: this.activatedRoute.children[0],
      });
    } else {
      this.router.navigate(['..'], {
        relativeTo: this.activatedRoute.children[0],
      });
    }
  }
}
