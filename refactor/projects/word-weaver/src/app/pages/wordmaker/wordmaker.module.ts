import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WordmakerComponent } from "./wordmaker/wordmaker.component";
import { WordmakerConjStepComponent } from "./wordmaker-conj-step/wordmaker-conj-step.component";
import { WordmakerPersStepComponent } from "./wordmaker-pers-step/wordmaker-pers-step.component";
import { WordmakerVerbStepComponent } from "./wordmaker-verb-step/wordmaker-verb-step.component";
import { WordmakerTempStepComponent } from "./wordmaker-temp-step/wordmaker-temp-step.component";

@NgModule({
  declarations: [
    WordmakerComponent,
    WordmakerConjStepComponent,
    WordmakerPersStepComponent,
    WordmakerVerbStepComponent,
    WordmakerTempStepComponent
  ],
  imports: [CommonModule]
})
export class WordmakerModule {}
