import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import {TooltipModule} from 'primeng/tooltip';
import {InputMaskModule} from 'primeng/inputmask';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ChipModule } from 'primeng/chip';
import {AvatarModule} from 'primeng/avatar';


import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { CadastroPessoalComponent} from './cadastro-pessoa/cadastro-pessoa.componen';
import { MessageComponent } from './message/message.component';
import { LancamentosModule } from './lancamentos/lancamentos.module';









@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    PessoasPesquisaComponent,

    CadastroPessoalComponent,
    MessageComponent,



  ],
  imports: [

  BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    LancamentosModule,

    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    TabViewModule,
    TooltipModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    InputMaskModule,
    ChipModule,
    AvatarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
