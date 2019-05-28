import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MetaData } from './global';
import { Settings } from './models';
import { SettingsComponent } from './components/shared/settings/settings.component';
import * as anime from 'animejs';

// Firebase
import { AuthService, SettingsService } from './services'

// Angular Material
import { MatDialog } from '@angular/material';
import { slideInAnimation } from './router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [ slideInAnimation ]
})

export class MainApp {
  navbarCollapsed = true;
  language = MetaData.language;
  title = MetaData.title;
  levels;
  selected_level = 'advanced';
  settings: Settings = {
    'level': { 'profile': "advanced", "arg_label": "ag/pat", 'gloss_tier': true, 'english_tier': false, 'translation_tier': true, 'breakdown_tier': true },
    'highlight': { 'root': true, 'pronoun': true, 'aspect': true, 'prepronominal_prefix': true, 'tmp_affix': true, 'post_aspectual_suffix': true },
    'test_api': false
  };
  loggedIn;
  constructor(private authService: AuthService, public router: Router, private settingsService: SettingsService, private dialog: MatDialog) {
    this.authService.anonSignIn()
    this.levels = this.settingsService.levels
    this.settingsService.settings.subscribe((settings: Settings) => this.settings = settings)
  }

  ngAfterViewInit() {
    anime({
      targets: ".nav-item",
      translateX: 0,
      translateY: 200,
      delay: function (el, i) { return 1000 + (i * 100); },
      duration: function (el, i) { return 500 + (i * 350); },
      easing: 'easeInOutQuad'
    });
  }

  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }

  update(setting) {
    this.settingsService.update(setting)
  }

  chooseLevel(profile) {
    this.settings.level = this.levels.filter(level => level['profile'] === profile)[0]
    this.update(this.settings)
  }

  openSettings(): void {
    let dialogRef = this.dialog.open(SettingsComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}