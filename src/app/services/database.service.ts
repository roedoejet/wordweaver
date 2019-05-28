import { Injectable } from '@angular/core';

// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DatabaseService {
  currentUser;
  currentUserRef;
  userID;
  settings;
  userDBRef;
  usersRef = this.db.list('users/');
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user) => {
      this.currentUser = user
      if (this.currentUser) {
        this.userID = this.currentUser.uid
        this.currentUserRef = db.database.ref('users/' + this.userID);
      }
    })
  }

  saveSettings(settings): Promise<any> {
    return this.db.list('users/').update(this.userID, {
      settings: settings
    }).then((success) => {
      return true
    }, (error) => {
      return false
    }
    )
  }

  getSettings() {
    return this.currentUserRef.once('value').then((data) => {
      return data.settings
    });
  }

}
