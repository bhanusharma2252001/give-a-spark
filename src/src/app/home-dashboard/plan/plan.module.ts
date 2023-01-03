import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './plan.component';
import { PlanDashboardComponent } from './plan-dashboard/plan-dashboard.component';


@NgModule({
  declarations: [
    PlanComponent,
    PlanDashboardComponent
  ],
  imports: [
    CommonModule,
    PlanRoutingModule
  ]
})
export class PlanModule { }
