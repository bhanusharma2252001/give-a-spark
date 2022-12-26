import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteDashboardRoutingModule } from './quote-dashboard-routing.module';
import { QuoteDashboardComponent } from './quote-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QuoteDashboardComponent
  ],
  imports: [
    CommonModule,
    QuoteDashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class QuoteDashboardModule { }
