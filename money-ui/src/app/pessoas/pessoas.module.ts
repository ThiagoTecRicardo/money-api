import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';


import { CadastroPessoalComponent } from './cadastro-pessoa/cadastro-pessoa.componen';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid-component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
   imports: [

    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputMaskModule,
    SharedModule
  ],
  declarations: [
    PessoasGridComponent,
    PessoasPesquisaComponent,
    CadastroPessoalComponent
  ],
  exports: [
    PessoasPesquisaComponent,
    CadastroPessoalComponent,
    PessoasGridComponent
  ]

})
export class PessoasModule { }
