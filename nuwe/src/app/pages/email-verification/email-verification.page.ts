import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { IonicAuthService } from 'src/app/services/firebase-auth-service.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.page.html',
  styleUrls: ['./email-verification.page.scss'],
})
export class EmailVerificationPage implements OnInit {
  constructor(
    private ionicAuthService: IonicAuthService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se ha enviado el correo',
      duration: 2000,
    });
    toast.present();
  }

  sendEmail() {
    this.ionicAuthService.sendEmailVerification();
    this.presentToast();
  }
}
