import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuardService } from "../../core/core.module";

import { ExamplesComponent } from "./examples/examples.component";
import { ParentComponent } from "./theming/parent/parent.component";
import { AuthenticatedComponent } from "./authenticated/authenticated.component";
import { TodosContainerComponent } from "./todos/components/todos-container.component";
import { StockMarketContainerComponent } from "./stock-market/components/stock-market-container.component";
import { CrudComponent } from "./crud/components/crud.component";
import { FormComponent } from "./form/components/form.component";
import { NotificationsComponent } from "./notifications/components/notifications.component";
import { UserComponent } from "./simple-state-management/components/user.component";
import { ElementsComponent } from "./elements/elements.component";

const routes: Routes = [
  {
    path: "",
    component: ExamplesComponent,
    children: [
      {
        path: "",
        redirectTo: "todos",
        pathMatch: "full"
      },
      {
        path: "todos",
        component: TodosContainerComponent,
        data: { title: "ww.examples.menu.todos" }
      },
      {
        path: "stock-market",
        component: StockMarketContainerComponent,
        data: { title: "ww.examples.menu.stocks" }
      },
      {
        path: "theming",
        component: ParentComponent,
        data: { title: "ww.examples.menu.theming" }
      },
      {
        path: "crud",
        redirectTo: "crud/",
        pathMatch: "full"
      },
      {
        path: "crud/:id",
        component: CrudComponent,
        data: { title: "ww.examples.menu.crud" }
      },
      {
        path: "simple-state-management",
        component: UserComponent,
        data: { title: "ww.examples.menu.simple-state-management" }
      },
      {
        path: "form",
        component: FormComponent,
        data: { title: "ww.examples.menu.form" }
      },
      {
        path: "notifications",
        component: NotificationsComponent,
        data: { title: "ww.examples.menu.notifications" }
      },
      {
        path: "elements",
        component: ElementsComponent,
        data: { title: "ww.examples.menu.elements" }
      },
      {
        path: "authenticated",
        component: AuthenticatedComponent,
        canActivate: [AuthGuardService],
        data: { title: "ww.examples.menu.auth" }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
