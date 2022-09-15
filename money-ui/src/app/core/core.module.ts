import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ErrorHandlerService } from './error-handler.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LancamentoService } from '../lancamentos/lancamento.service';


import { AvatarModule } from 'primeng/avatar';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';



@NgModule({
  declarations: [
    NavbarComponent
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

    { provide: LOCALE_ID, useValue: 'pt-BR'},
    ]

})
export class CoreModule { }
