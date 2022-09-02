import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {AvatarModule} from 'primeng/avatar';


import { AppComponent } from './app.component';
import { PessoasModule } from './pessoas/pessoas.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
import { LancamentosModule } from './lancamentos/lancamentos.module';










@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    LancamentosModule,
    PessoasModule,
    AvatarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
