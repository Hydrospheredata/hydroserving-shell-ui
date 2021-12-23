import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hs-field-group',
  templateUrl: './field-group.component.html',
  styleUrls: ['./field-group.component.scss'],
})
export class FieldGroupComponent {
  @Input() group!: any;
  @Output() deleted: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  get dtypes(): string[] {
    return ['DT_STRING', 'DT_INT64', 'NONE'];
  }

  get profiles(): string[] {
    return ['NUMERICAL', 'CATEGORICAL'];
  }

  onDelete() {
    this.deleted.emit();
  }
}
