

import { Component, OnInit } from '@angular/core';
import { LancamentoService } from '../lancamento.service';


@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit{

  lancamentos = [];

  constructor(private lacamentoService: LancamentoService){}

  ngOnInit(): void {
    this.pequisar();
  }


  pequisar(){
    this.lacamentoService.pesquisar()
    .then( () => null);
  }

}
