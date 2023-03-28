import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteDashboardRoutingModule } from './quote-dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { QuoteDashboardComponent } from './quote-dashboard.component';


@NgModule({
  declarations: [
    QuoteDashboardComponent
  ],
  imports: [
    CommonModule,
    QuoteDashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule
  ],
  exports: [QuoteDashboardComponent]
})
export class QuoteDashboardModule { }
