import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryDashboardRoutingModule } from './story-dashboard-routing.module';
import { StoryDashboardComponent } from './story-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StoryDashboardComponent
  ],
  imports: [
    CommonModule,
    StoryDashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StoryDashboardModule { }
