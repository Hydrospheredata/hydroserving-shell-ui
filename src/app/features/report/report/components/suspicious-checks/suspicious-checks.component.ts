import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hs-suspicious-checks',
  templateUrl: './suspicious-checks.component.html',
  styleUrls: ['./suspicious-checks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuspiciousChecksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
