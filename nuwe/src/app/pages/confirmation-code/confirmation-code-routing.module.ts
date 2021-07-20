import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationCodePage } from './confirmation-code.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmationCodePageRoutingModule {}
