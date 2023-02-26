import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Login } from 'src/app/model/Login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API = `${environment.urlBackend}/jogador/login`;
  logado = false;

  constructor(private http: HttpClient) {}

  logar(login: Login) {
    return this.http.post<Login>(this.API, login);
  }
  
  deslogar() {
    localStorage.clear();
  }
}
