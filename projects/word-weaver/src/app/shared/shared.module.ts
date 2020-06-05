import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
// import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatChipsModule } from "@angular/material/chips";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatStepperModule } from "@angular/material/stepper";
// import { MatDividerModule } from "@angular/material/divider";
// import { MatSliderModule } from "@angular/material/slider";
import { MatToolbarModule } from "@angular/material/toolbar";
// import { MatDatepickerModule } from "@angular/material/datepicker";
// import { MatNativeDateModule } from "@angular/material/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatRadioModule } from "@angular/material/radio";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSliderModule } from "@angular/material/slider";
import { MatExpansionModule } from "@angular/material/expansion";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { MatTableExporterModule } from "mat-table-exporter";

import { ClipboardModule } from "@angular/cdk/clipboard";

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
  faHome,
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
import {
  faMediumM,
  faGithub,
  faYoutube,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import { RtlSupportDirective } from "./rtl-support/rtl-support.directive";
import { LogoComponent } from "./logo/logo.component";
import { AnimateOnlyPipe } from "./pipes/animate-only/animate-only";
import { CapitalizePipe } from "./pipes/capitalize/capitalize";
import { DecapitalizePipe } from "./pipes/decapitalize/decapitalize";
import { NgxEchartsModule } from "ngx-echarts";
import { DownloadDialogComponent } from "./download-dialog/download-dialog.component";
import { TableViewerDialogComponent } from "./tableviewer-dialog/tableviewer-dialog.component";
import { TierComponent } from "./tier/tier.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,

    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    // MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatRadioModule,
    MatTabsModule,
    MatSliderModule,
    // MatDividerModule,
    MatTableModule,
    MatExpansionModule,
    MatPaginatorModule,
    NgxEchartsModule,
    FontAwesomeModule,
    MatTableExporterModule,
    DragDropModule,
    ClipboardModule
  ],
  declarations: [
    LogoComponent,
    RtlSupportDirective,
    AnimateOnlyPipe,
    CapitalizePipe,
    DecapitalizePipe,
    DownloadDialogComponent,
    TableViewerDialogComponent,
    TierComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    TranslateModule,

    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    // MatTabsModule,
    MatChipsModule,
    MatGridListModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatSelectModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatRadioModule,
    // MatDividerModule,
    // MatSliderModule,
    MatToolbarModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSliderModule,
    FontAwesomeModule,
    MatTableExporterModule,
    MatExpansionModule,
    DragDropModule,
    ClipboardModule,

    DownloadDialogComponent,
    TableViewerDialogComponent,
    LogoComponent,
    TierComponent,
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
      faFacebook,
      faYoutube,
      faPlus,
      faEdit,
      faTrash,
      faHome,
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
