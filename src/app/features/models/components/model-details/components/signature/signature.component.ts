import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import Signature from '@domain/signature';

@Component({
  selector: 'hs-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignatureComponent {
  @Input() signature?: Signature;

  constructor() {}
}
