import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryDashboardRoutingModule } from './story-dashboard-routing.module';
import { StoryDashboardComponent } from './story-dashboard.component';


@NgModule({
  declarations: [
    StoryDashboardComponent
  ],
  imports: [
    CommonModule,
    StoryDashboardRoutingModule
  ]
})
export class StoryDashboardModule { }
