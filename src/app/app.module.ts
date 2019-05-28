// Core
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainApp } from './app.component';
import { AboutPage, ConjPanel, ErrorSnackComponent, InfoPage, LogoAnime, PersPanel, SettingsComponent, TableviewerPage, TempPanel, VerbPanel, WordmakerPage, WordmakerConjPanel, WordmakerPersPanel, WordmakerTempPanel, WordmakerVerbPanel } from './components';

// Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatChipsModule, MatDialogModule, MatFormFieldModule,
  MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSnackBarModule, MatProgressSpinnerModule, MatRadioModule,
  MatSelectModule, MatSlideToggleModule, MatStepperModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';

// Services
import { AffixService, AuthService, ChartService, ConjugationService, DatabaseService, PronounService, SelectionService, SettingsService, TierService, VerbService } from './services'
import { HttpClientModule } from '@angular/common/http';

// Pipes
import { PipesModule } from './pipes/pipes.module';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';

// Extras
import { NgxEchartsModule } from 'ngx-echarts';

export const routes = [
  { path: '', redirectTo: 'wordmaker', pathMatch: 'full' },
  // {
  //   path: 'wordmaker',
  //   component: MainApp,
  //   children: [
  //     { path: '', redirectTo: 'home', pathMatch: 'prefix' },
  //     { path: 'mobiledemo', component: MobiledemoComponent },
  //   ]
  // },
  { path: 'wordmaker', component: WordmakerPage },
  { path: 'tableviewer', component: TableviewerPage },
  { path: 'info', component: TableviewerPage },
  { path: 'about', component: AboutPage }
];

@NgModule({
  declarations: [
    MainApp,
    AboutPage,
    InfoPage,
    SettingsComponent,
    TableviewerPage,
    WordmakerPage,
    VerbPanel,
    TempPanel,
    PersPanel,
    ConjPanel,
    WordmakerConjPanel,
    WordmakerPersPanel,
    WordmakerTempPanel,
    WordmakerVerbPanel,
    ErrorSnackComponent,
    LogoAnime
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatTooltipModule,
    MatToolbarModule,
    NgxEchartsModule,
    PipesModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [
    AngularFireDatabase,
    // { provide: ErrorHandler, useClass: MyErrorHandler },
    AuthService,
    AffixService,
    ChartService,
    ConjugationService,
    DatabaseService,
    PronounService,
    SelectionService,
    SettingsService,
    TierService,
    VerbService],
  bootstrap: [MainApp],
  entryComponents: [ErrorSnackComponent, LogoAnime, SettingsComponent]
})
export class AppModule { }
