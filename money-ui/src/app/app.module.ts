import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';

import { AppComponent } from './app.component';
import {TooltipModule} from 'primeng/tooltip';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,

    ButtonModule,
    InputTextModule,
    TableModule,
    TabViewModule,
    TooltipModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
