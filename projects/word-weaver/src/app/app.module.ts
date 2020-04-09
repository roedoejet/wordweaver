import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { CoreModule } from "./core/core.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app/app.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core
    CoreModule,

    // shared
    SharedModule,

    // app
    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
