import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public afAuth: AngularFireAuth, private _snackBar: MatSnackBar) {
  }

  updateUser(user: User, updatedUser: any) {
    user.updateProfile(updatedUser).then(
      value => this._snackBar.open('Successfuly', 'updated profile', {duration: 2000})
    );
  }

  getUser() {
    return this.afAuth.authState;
  }
}
