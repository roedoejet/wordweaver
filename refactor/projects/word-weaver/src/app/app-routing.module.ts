import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "wordmaker",
    pathMatch: "full"
  },
  {
    path: "about",
    loadChildren: () =>
      import("./pages/about/about.module").then(m => m.AboutModule)
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./pages/settings/settings.module").then(m => m.SettingsModule)
  },
  {
    path: "info",
    loadChildren: () =>
      import("./pages/info/info.module").then(m => m.InfoModule)
  },
  {
    path: "wordmaker",
    loadChildren: () =>
      import("./pages/about/about.module").then(m => m.AboutModule)
  },
  {
    path: "tableviewer",
    loadChildren: () =>
      import("./pages/tableviewer/tableviewer.module").then(
        m => m.TableviewerModule
      )
  },
  {
    path: "**",
    redirectTo: "wordmaker"
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: "enabled",
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
