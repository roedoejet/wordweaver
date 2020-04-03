import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InfoComponent } from "./info/info.component";

const routes: Routes = [
  {
    path: "",
    component: InfoComponent,
    data: { title: "ww.menu.info" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule {}
