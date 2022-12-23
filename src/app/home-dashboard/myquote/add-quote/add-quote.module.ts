import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddQuoteRoutingModule } from './add-quote-routing.module';
import { AddQuoteComponent } from './add-quote.component';


@NgModule({
  declarations: [
    AddQuoteComponent
  ],
  imports: [
    CommonModule,
    AddQuoteRoutingModule
  ]
})
export class AddQuoteModule { }
