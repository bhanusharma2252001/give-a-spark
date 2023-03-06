import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanDashboardComponent } from './plan-dashboard.component';
import { NgxStripeModule } from 'ngx-stripe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    PlanDashboardComponent
  ],
  imports: [
    CommonModule,
    PlanDashboardModule,
    ReactiveFormsModule,
    FormsModule,
    NgxStripeModule.forRoot(''),
    NgxSpinnerModule

  ]
})
export class PlanDashboardModule { }
