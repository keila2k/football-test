import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from 'firebase';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  user: User;

  constructor(public afAuth: AngularFireAuth, private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      displayName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]]
    });
    this.userService.getUser().subscribe(user => {
      this.user = user;
      this.form.patchValue(this.user);
    });
  }

  get displayName() {
    return this.form.get('displayName');
  }

  async onSubmit() {
    this.userService.updateUser(this.user, this.form.value);
  }
}
