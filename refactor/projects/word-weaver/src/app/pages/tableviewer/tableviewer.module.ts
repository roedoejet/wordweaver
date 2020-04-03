import { NgModule } from "@angular/core";
import { TableviewerComponent } from "./tableviewer/tableviewer.component";
import { TableviewerConjPanelComponent } from "./tableviewer-conj-panel/tableviewer-conj-panel.component";
import { TableviewerPersPanelComponent } from "./tableviewer-pers-panel/tableviewer-pers-panel.component";
import { TableviewerTempPanelComponent } from "./tableviewer-temp-panel/tableviewer-temp-panel.component";
import { TableviewerVerbPanelComponent } from "./tableviewer-verb-panel/tableviewer-verb-panel.component";
import { SharedModule } from "../../shared/shared.module";
import { TableviewerRoutingModule } from "./tableviewer-routing.module";
import { NgxEchartsModule } from "ngx-echarts";

@NgModule({
  declarations: [
    TableviewerComponent,
    TableviewerConjPanelComponent,
    TableviewerPersPanelComponent,
    TableviewerTempPanelComponent,
    TableviewerVerbPanelComponent
  ],
  imports: [SharedModule, TableviewerRoutingModule, NgxEchartsModule]
})
export class TableviewerModule {}
