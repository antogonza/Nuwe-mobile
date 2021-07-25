import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicAuthService } from '../../services/firebase-auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario = {
    email: '',
    password: '',
  };

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private angularFireAuth: AngularFireAuth
  ) {}
  ngOnInit() {}

  login(value) {
    console.log(value);

    this.ionicAuthService.signinUser(value).then(
      async (response) => {
        console.log(response);
        if ((await this.angularFireAuth.currentUser).emailVerified) {
          this.router.navigateByUrl('dashboard');
        } else {
          this.router.navigateByUrl('email-verification');
        }
      },
      (error) => {
        console.log('ERROR');
      }
    );
  }

  googleLogin() {
    alert('Google');
  }
}
