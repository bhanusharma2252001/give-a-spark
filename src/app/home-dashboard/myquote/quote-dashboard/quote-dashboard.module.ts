import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteDashboardRoutingModule } from './quote-dashboard-routing.module';
import { QuoteDashboardComponent } from './quote-dashboard.component';


@NgModule({
  declarations: [
    QuoteDashboardComponent
  ],
  imports: [
    CommonModule,
    QuoteDashboardRoutingModule
  ]
})
export class QuoteDashboardModule { }
