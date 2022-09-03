import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { AvatarModule } from 'primeng/avatar';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AvatarModule

  ],
  exports:[
    NavbarComponent
  ]
})
export class CoreModule { }
