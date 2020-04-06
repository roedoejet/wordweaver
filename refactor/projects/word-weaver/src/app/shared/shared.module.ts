import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatChipsModule } from "@angular/material/chips";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatStepperModule } from "@angular/material/stepper";
import { MatDividerModule } from "@angular/material/divider";
import { MatSliderModule } from "@angular/material/slider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatGridListModule } from "@angular/material/grid-list";

import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import {
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faKeyboard,
  faLightbulb,
  faMusic,
  faWindowMaximize,
  faStream,
  faBook
} from "@fortawesome/free-solid-svg-icons";
import { faMediumM, faGithub } from "@fortawesome/free-brands-svg-icons";
import { BigInputComponent } from "./big-input/big-input/big-input.component";
import { BigInputActionComponent } from "./big-input/big-input-action/big-input-action.component";
import { RtlSupportDirective } from "./rtl-support/rtl-support.directive";
import { LogoComponent } from "./logo/logo.component";
import { AnimateOnlyPipe } from "./pipes/animate-only/animate-only";
import { CapitalizePipe } from "./pipes/capitalize/capitalize";
import { DecapitalizePipe } from "./pipes/decapitalize/decapitalize";
import { NgxEchartsModule } from "ngx-echarts";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    TranslateModule,

    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatDividerModule,
    NgxEchartsModule,
    FontAwesomeModule
  ],
  declarations: [
    BigInputComponent,
    BigInputActionComponent,
    LogoComponent,
    RtlSupportDirective,
    AnimateOnlyPipe,
    CapitalizePipe,
    DecapitalizePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    TranslateModule,

    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatTabsModule,
    MatChipsModule,
    MatGridListModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatDividerModule,
    MatSliderModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,

    FontAwesomeModule,

    BigInputComponent,
    BigInputActionComponent,
    LogoComponent,
    RtlSupportDirective,

    AnimateOnlyPipe,
    CapitalizePipe,
    DecapitalizePipe
  ]
})
export class SharedModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(
      faGithub,
      faMediumM,
      faPlus,
      faEdit,
      faTrash,
      faTimes,
      faCaretUp,
      faCaretDown,
      faExclamationTriangle,
      faFilter,
      faTasks,
      faCheck,
      faMusic,
      faSquare,
      faLanguage,
      faPaintBrush,
      faLightbulb,
      faKeyboard,
      faWindowMaximize,
      faStream,
      faBook
    );
  }
}
