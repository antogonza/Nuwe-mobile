import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationCodePageRoutingModule } from './confirmation-code-routing.module';

import { ConfirmationCodePage } from './confirmation-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationCodePageRoutingModule
  ],
  declarations: [ConfirmationCodePage]
})
export class ConfirmationCodePageModule {}
