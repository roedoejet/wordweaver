import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TableviewerComponent } from "./tableviewer/tableviewer.component";

const routes: Routes = [
  {
    path: "",
    component: TableviewerComponent,
    data: { title: "ww.menu.tableviewer" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableviewerRoutingModule {}
