import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent{
  pessoas = [
    { nome: 'Thiago', cidade: 'Osasco', estado: 'SP',
      status: 'Ativo' },
      { nome: 'Yago', cidade: 'Osasco', estado: 'SP',
      status: 'Ativo' },
      { nome: 'Tercio', cidade: 'Osasco', estado: 'SP',
      status: 'Inativo' },
      { nome: 'Karen', cidade: 'Osasco', estado: 'SP',
      status: 'Ativo' },
      { nome: 'Ricardo', cidade: 'Osasco', estado: 'SP',
      status: 'Inativo' },
      { nome: 'Pedro', cidade: 'Osasco', estado: 'SP',
      status: 'Ativo' },
      { nome: 'Lais', cidade: 'Osasco', estado: 'SP',
      status: 'Inativo' }
  ];

}
