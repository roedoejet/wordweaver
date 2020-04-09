import { Pipe, PipeTransform } from "@angular/core";
import { Pronoun } from "../../../models/models";

@Pipe({
  name: "animateOnly"
})
export class AnimateOnlyPipe implements PipeTransform {
  // Returns only Animate pronouns

  transform(value: Pronoun[], ...args) {
    return value.filter(pn => pn["gloss"].toLowerCase() !== "it");
  }
}
