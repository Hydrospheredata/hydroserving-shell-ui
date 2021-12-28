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
    console.log();
    this.router.navigate(['..'], {
      relativeTo: this.activatedRoute.children[0],
    });
  }
}
