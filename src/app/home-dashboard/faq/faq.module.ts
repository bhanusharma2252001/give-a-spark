import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FAQRoutingModule } from './faq-routing.module';
import { FAQComponent } from '../faq/faq.component';
import { FaqDashboardComponent } from './faq-dashboard/faq-dashboard.component';


@NgModule({
  declarations: [
    FAQComponent,
    FaqDashboardComponent
  ],
  imports: [
    CommonModule,
    FAQRoutingModule
  ]
})
export class FAQModule { }
