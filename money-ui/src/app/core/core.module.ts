import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ErrorHandlerService } from './error-handler.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LancamentoService } from '../lancamentos/lancamento.service';


import { AvatarModule } from 'primeng/avatar';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';



@NgModule({
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [



   CommonModule,
    AvatarModule,
    RouterModule,

    ToastModule,
    ConfirmDialogModule

  ],
  exports:[
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule
  ],
    providers: [
      ErrorHandlerService,
      LancamentoService,
      MessageService,
      ConfirmationService,
      TranslateService,
      Title,

    { provide: LOCALE_ID, useValue: 'pt-BR'},
    ]

})
export class CoreModule { }
