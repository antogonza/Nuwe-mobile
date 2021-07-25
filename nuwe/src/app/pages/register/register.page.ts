/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicAuthService } from '../../services/firebase-auth-service.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  usuario = {
    email: '',
    password: '',
    password2: '',
  };

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService
  ) {}

  ngOnInit() {}

  register(value) {
    if (value.password === value.password1) {
      this.ionicAuthService.createUser(value).then(
        (response) => {
          this.ionicAuthService.sendEmailVerification();
          this.router.navigateByUrl('email-verification');
        },
        (error) => {}
      );
    } else {
      console.log('Las contraseñas no coinciden');
    }
  }
}
