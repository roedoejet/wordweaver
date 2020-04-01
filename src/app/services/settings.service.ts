// Core
import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { Level, Settings } from "../models";
import { ToastrService } from "ngx-toastr";

// Services
import { AuthService } from "./auth.service";
import { DatabaseService } from "./database.service";

// Firebase
import { AngularFireDatabase } from "angularfire2/database";

// Meta
import { MetaData } from "../global";

@Injectable()
export class SettingsService {
  levels: Level[] = [
    {
      profile: "advanced",
      arg_label: "ag/pat",
      gloss_tier: false,
      english_tier: false,
      translation_tier: true,
      breakdown_tier: false
    },
    {
      profile: "beginner",
      arg_label: "sub/obj",
      gloss_tier: false,
      english_tier: false,
      translation_tier: true,
      breakdown_tier: false
    }
  ];
  help = new BehaviorSubject<Boolean>(false);
  initial_settings: Settings = {
    level: this.levels[0],
    highlight: {
      root: false,
      pronoun: true,
      aspect: false,
      prepronominal_prefix: false,
      tmp_affix: false,
      post_aspectual_suffix: false
    },
    test_api: false
  };
  settings = new BehaviorSubject<Object>(this.initial_settings);
  successMessage = MetaData.congratulations;
  constructor(
    private db: AngularFireDatabase,
    private dbService: DatabaseService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.authService.user.subscribe(user => {
      if (user) {
        this.db
          .object("users/" + user.uid)
          .valueChanges()
          .subscribe(data => {
            if (data) {
              this.settings.next(data["settings"]);
            }
          });
      }
    });
  }

  updateToast(success?) {
    if (success) {
      this.toastr.success("Setting sucessfully updated", this.successMessage);
    } else {
      this.toastr.error(
        "This setting couldn't be changed. Try disabling your adblocker for this site.",
        "Whoops!"
      );
    }
  }

  update(settings: Settings): void {
    this.dbService.saveSettings(settings).then(result => {
      this.updateToast(result);
    });
    this.settings.next(settings);
  }
}
