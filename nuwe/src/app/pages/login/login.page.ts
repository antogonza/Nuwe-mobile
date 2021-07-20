import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

   onSubmit(formulario: NgForm) {
    console.log('Submit');
    console.log(this.usuario);
    console.log(formulario);

}
