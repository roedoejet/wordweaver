import { NgModule } from "@angular/core";
import { WordmakerComponent } from "./wordmaker/wordmaker.component";
import { WordmakerConjStepComponent } from "./wordmaker-conj-step/wordmaker-conj-step.component";
import { WordmakerPersStepComponent } from "./wordmaker-pers-step/wordmaker-pers-step.component";
import { WordmakerVerbStepComponent } from "./wordmaker-verb-step/wordmaker-verb-step.component";
import { WordmakerTempStepComponent } from "./wordmaker-temp-step/wordmaker-temp-step.component";
import { SharedModule } from "../../shared/shared.module";
import { WordmakerRoutingModule } from "./wordmaker-routing.module";
import { WordmakerHomeComponent } from "./wordmaker-home/wordmaker-home.component";

@NgModule({
  declarations: [
    WordmakerComponent,
    WordmakerConjStepComponent,
    WordmakerPersStepComponent,
    WordmakerVerbStepComponent,
    WordmakerTempStepComponent,
    WordmakerHomeComponent
  ],
  imports: [SharedModule, WordmakerRoutingModule]
})
export class WordmakerModule {}
