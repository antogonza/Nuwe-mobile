import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class IonicAuthService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  createUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });
  }

  signinUser(value) {
    console.log(value.email);

    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth
        .signInWithEmailAndPassword(value.email, value.password)
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });
  }

  signoutUser() {
    return new Promise<void>((resolve, reject) => {
      if (this.angularFireAuth.currentUser) {
        this.angularFireAuth
          .signOut()
          .then(() => {
            console.log('Sign out');
            resolve();
          })
          .catch(() => {
            reject();
          });
      }
    });
  }

  userDetails() {
    return this.angularFireAuth.user;
  }

  async sendEmailVerification() {
    const user = this.angularFireAuth.currentUser;

    return (await user).sendEmailVerification().then(() => {
      // Email verification sent!
      // ...
    });
  }
}
