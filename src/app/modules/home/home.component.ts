import { Component, OnInit } from '@angular/core';

import { Jogador } from 'src/app/model/Jogador';
import { JogadorService } from 'src/app/shared/services/jogador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [JogadorService]
})
export class HomeComponent implements OnInit {

  jogador: Jogador = {
    id: null,
    nickname: '',
    password: '',
    stefamons: []
  }
  
  constructor(private jogadorService: JogadorService) { }
  
  ngOnInit(): void {
  }

  cadastrarJogador() {
    this.jogadorService.cadastrar(this.jogador).subscribe(
      () => alert("Usuário cadastrado!"),
      () => alert("Erro ao cadastrar")
    );    
    this.jogador = {
      id: null,
      nickname: '',
      password: '',
      stefamons: []
    }
  }

}
