import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';
import {MatSnackBar} from '@angular/material/snack-bar';
import UserCredential = firebase.auth.UserCredential;
import {HttpClient} from '@angular/common/http';
import {get} from 'lodash-es';
import {UserDto} from '../dtos/UserDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';

  constructor(public afAuth: AngularFireAuth, private _snackBar: MatSnackBar, private http: HttpClient) {
  }

  updateUser(user: User, updatedUser: any) {
    user.updateProfile(updatedUser).then(
      value => this._snackBar.open('Successfuly', 'updated profile', {duration: 2000})
    );
  }

  getUser() {
    return this.afAuth.authState;
  }

  onGoogleLogin(userCredential: UserCredential): Promise<UserDto> {
    const name = get(userCredential, ['additionalUserInfo', 'profile', 'name']);
    const picture = get(userCredential, ['additionalUserInfo', 'profile', 'picture']);
    const uid = get(userCredential, ['user', 'uid']);
    const user: UserDto = new UserDto(uid, name, picture);
    return this.http.post<UserDto>(`${this.usersUrl}/details`, user).toPromise();
  }

  getAllUsers(): Promise<UserDto[]> {
    return this.http.get<UserDto[]>(`${this.usersUrl}`).toPromise();
  }
}
