import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddQuoteRoutingModule } from './add-quote-routing.module';
import { AddQuoteComponent } from './add-quote.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddQuoteComponent
  ],
  imports: [
    CommonModule,
    AddQuoteRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AddQuoteModule { }
