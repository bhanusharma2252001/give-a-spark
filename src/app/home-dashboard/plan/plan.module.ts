import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './plan.component';
import { PlanDashboardComponent } from './plan-dashboard/plan-dashboard.component';
import { MyplanComponent } from './myplan/myplan.component';

import { PlanPurchaseComponent } from './plan-purchase/plan-purchase.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    PlanComponent,
    PlanDashboardComponent,
    MyplanComponent,

    PlanPurchaseComponent
  ],
  imports: [
    CommonModule,
    PlanRoutingModule,
    NgxSpinnerModule
  ]
})
export class PlanModule { }
