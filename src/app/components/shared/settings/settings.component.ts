import { Component, OnInit } from '@angular/core';
import { Settings } from '../../../models'
import { SettingsService } from '../../../services'


import { MatDialogRef } from '@angular/material';




@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  levels;
  selected_level = 'advanced';
  settings: Settings = {
    'level': { 'profile': "advanced", "arg_label": "ag/pat", 'gloss_tier': false, 'english_tier': false, 'translation_tier': true, 'breakdown_tier': false },
    'highlight': { 'root': false, 'pronoun': true, 'aspect': false, 'prepronominal_prefix': false, 'tmp_affix': false, 'post_aspectual_suffix': false },
    'test_api': false
  };
  loggedIn;
  constructor(public dialogRef: MatDialogRef<SettingsComponent>, private settingsService: SettingsService) {
    this.levels = this.settingsService.levels
    this.settingsService.settings.subscribe((settings: Settings) => this.settings = settings)
  }

  ngOnInit() {

  }

  update(setting) {
    this.settingsService.update(setting)
  }

  close() {
    this.dialogRef.close();
  }

  chooseLevel(profile) {
    this.settings.level = this.levels.filter(level => level['profile'] === profile)[0]
    this.update(this.settings)
  }

}


