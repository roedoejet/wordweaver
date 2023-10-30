import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "wordmaker",
    pathMatch: "full",
  },
  {
    path: "about",
    loadChildren: () =>
      import("./pages/about/about.module").then((m) => m.AboutModule),
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./pages/settings/settings.module").then((m) => m.SettingsModule),
  },
  {
    path: "wordmaker",
    loadChildren: () =>
      import("./pages/wordmaker/wordmaker.module").then(
        (m) => m.WordmakerModule
      ),
  },
  {
    path: "tableviewer",
    loadChildren: () =>
      import("./pages/tableviewer/tableviewer.module").then(
        (m) => m.TableviewerModule
      ),
  },
  {
    path: "**",
    redirectTo: "wordmaker",
  },
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: "enabled",
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
