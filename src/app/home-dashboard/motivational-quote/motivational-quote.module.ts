import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotivationalQuoteRoutingModule } from './motivational-quote-routing.module';
import { MotivationalQuoteComponent } from './motivational-quote.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    MotivationalQuoteComponent
  ],
  imports: [
    CommonModule,
    MotivationalQuoteRoutingModule,
    NgxSpinnerModule

  ]
})
export class MotivationalQuoteModule { }
