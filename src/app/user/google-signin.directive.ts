import {Directive, HostListener} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import UserCredential = firebase.auth.UserCredential;
import {UserService} from '../services/user.service';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {
  constructor(private afAuth: AngularFireAuth, private userService: UserService) {
  }

  @HostListener('click')
  onclick() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(async (userCredential: UserCredential) => {
      await this.userService.onGoogleLogin(userCredential);
    });
  }
}
