import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Login } from './model/Login';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'hackathon-angular';
  items: MenuItem[];
  login: Login = {
    nickname: '',
    password: ''
  }

  constructor(private loginService: LoginService){}

  ngOnInit(): void {

    this.items = [
      {label: 'Stefamon', disabled: true},
    ];
  }

  logar() {
    this.loginService.logar(this.login).subscribe(
      () => {
        alert('Logado!');
        localStorage.setItem('TOKEN', 'LOGADO');
      },
      () => alert('Credenciais erradas!')
    );
    this.login = {
      nickname: '',
      password: ''
    }
  }
}
