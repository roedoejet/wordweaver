import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WordmakerComponent } from "./wordmaker/wordmaker.component";
import { WordmakerHomeComponent } from "./wordmaker-home/wordmaker-home.component";

const routes: Routes = [
  {
    path: "stepper",
    component: WordmakerComponent,
    data: { title: "ww.menu.wordmaker.stepper" }
  },
  {
    path: "",
    component: WordmakerHomeComponent,
    data: { title: "ww.menu.wordmaker.home" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordmakerRoutingModule {}
