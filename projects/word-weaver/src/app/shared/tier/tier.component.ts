import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from "@angular/core";
import {
  Conjugation,
  ResponseMorphemeNameIndex,
  ResponseObject,
  Tier
} from "../../../config/config";

@Component({
  selector: "ww-tier",
  templateUrl: "./tier.component.html",
  styleUrls: ["./tier.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TierComponent implements OnInit {
  output: Conjugation;
  @Input() data: ResponseObject;
  @Input() tier: Tier;
  constructor() {}

  ngOnInit(): void {
    // Filter empty values and sort on position
    this.output = this.data.output
      .filter(x => x[this.tier.key])
      .sort(
        (a, b) =>
          a[ResponseMorphemeNameIndex.position] -
          b[ResponseMorphemeNameIndex.position]
      );
  }
}
