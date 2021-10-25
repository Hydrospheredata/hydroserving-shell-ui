import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { Model } from "../../../../../../domain";

@Component({
  selector: "hs-model-info",
  templateUrl: "./model-info.component.html",
  styleUrls: ["./model-info.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelInfoComponent {
  @Input() model: Model | null = null;

  constructor() {}

  get fullName(): string {
    if (this.model) {
      return this.model.name + ":" + this.model.version;
    } else {
      return "";
    }
  }
}
