

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


import { PessoasPesquisaComponent } from "./pessoas-pesquisa/pessoas-pesquisa.component";
import { CadastroPessoalComponent } from './cadastro-pessoa/cadastro-pessoa.componen';

const routes: Routes = [
  { path: 'pessoas', component: PessoasPesquisaComponent },
  { path: 'pessoas/nova', component: CadastroPessoalComponent },
  { path: 'pessoas/:codigo', component: CadastroPessoalComponent }
];

@NgModule({
  imports: [

  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
