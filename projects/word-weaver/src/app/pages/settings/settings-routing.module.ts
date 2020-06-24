import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SettingsContainerComponent } from "./settings/settings-container.component";

const routes: Routes = [
  {
    path: "",
    component: SettingsContainerComponent,
    data: { title: "ww.menu.settings" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
