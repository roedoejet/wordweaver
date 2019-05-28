import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { ToastController } from 'ionic-angular';

import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  constructor(
    private afAuth: AngularFireAuth, 
    // private toastCtrl: ToastController
  ) {
    this.user = this.afAuth.authState
  }

  ngOnInit() {
    console.log(this.user)
  }
  loginToast(success?) {
    // if (success) {
    //   let toast = this.toastCtrl.create({
    //     message: 'Welcome! You are signed in and your settings have been updated',
    //     duration: 1200,
    //     position: 'top'
    //   });
    //   toast.onDidDismiss(() => {
    //     console.log('Dismissed toast');
    //   });
    //   toast.present();
    // } else {
    //   let toast = this.toastCtrl.create({
    //     message: 'Warning: you are not logged in and your changes to settings will not be saved',
    //     duration: 1200,
    //     position: 'top'
    //   });
    //   toast.onDidDismiss(() => {
    //     console.log('Dismissed toast');
    //   });
    //   toast.present();
    // }
  }

  anonSignIn() {
    this.afAuth.auth.signInAnonymously()
      .then((success) => {
        this.loginToast(true)
      },
        (error) => {
          console.log(error)
          
          this.loginToast(false)
        })
  }

}
