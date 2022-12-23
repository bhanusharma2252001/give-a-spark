import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyquoteRoutingModule } from './myquote-routing.module';
import {  MyquoteComponent  } from './myquote.component';


@NgModule({
  declarations: [
    MyquoteComponent
   
  ],
  imports: [
    CommonModule,
    MyquoteRoutingModule
  ]
})
export class MyquoteModule { }
