import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotivationalQuoteRoutingModule } from './motivational-quote-routing.module';
import { MotivationalQuoteComponent } from './motivational-quote.component';


@NgModule({
  declarations: [
    MotivationalQuoteComponent
  ],
  imports: [
    CommonModule,
    MotivationalQuoteRoutingModule
  ]
})
export class MotivationalQuoteModule { }
