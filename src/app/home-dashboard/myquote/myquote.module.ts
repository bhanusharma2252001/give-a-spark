import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyquoteRoutingModule } from './myquote-routing.module';
import {  MyquoteComponent  } from './myquote.component';
import { AddStoryComponent } from './add-story/add-story.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyquoteComponent,
    AddStoryComponent
   
  ],
  imports: [
    CommonModule,
    MyquoteRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MyquoteModule { }
