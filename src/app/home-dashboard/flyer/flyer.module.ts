import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlyerRoutingModule } from './flyer-routing.module';
import { FlyerComponent } from './flyer.component';
import { EditFlyerComponent } from './edit-flyer/edit-flyer.component';
import { SavedFlyerComponent } from './saved-flyer/saved-flyer.component';
import { TemplateDashboardComponent } from './template-dashboard/template-dashboard.component';


@NgModule({
  declarations: [
    FlyerComponent,
    EditFlyerComponent,
    SavedFlyerComponent,
    TemplateDashboardComponent
  ],
  imports: [
    CommonModule,
    FlyerRoutingModule
  ]
})
export class FlyerModule { }
