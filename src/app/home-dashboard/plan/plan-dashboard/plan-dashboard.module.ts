import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanDashboardComponent } from './plan-dashboard.component';
// import { NgxStripeModule } from 'ngx-stripe';



@NgModule({
  declarations: [
    PlanDashboardComponent
  ],
  imports: [
    CommonModule,
    PlanDashboardModule,
    // NgxStripeModule.forRoot('')
  ]
})
export class PlanDashboardModule { }
