import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Jogador } from 'src/app/model/Jogador';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JogadorService {
  private readonly API = `${environment.urlBackend}/jogador/`;

  constructor(private http: HttpClient) {}

  cadastrar(jogador: Jogador) {
    return this.http.post<Jogador>(this.API, jogador);
  }
}
