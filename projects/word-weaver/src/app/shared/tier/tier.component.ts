import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from "@angular/core";
import {
  Conjugation,
  ConjugationMorphemeNameIndex,
  ConjugationObject,
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
  morph_type: number;
  @Input() data: ConjugationObject;
  @Input() tier: Tier;
  constructor() {}

  ngOnInit(): void {
    // Filter empty values and sort on position
    this.morph_type = ConjugationMorphemeNameIndex.type;
    this.output = this.data.output
      .filter((x) => x[this.tier.key])
      .sort(
        (a, b) =>
          a[ConjugationMorphemeNameIndex.position] -
          b[ConjugationMorphemeNameIndex.position]
      );
  }
}
