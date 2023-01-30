import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlyerRoutingModule } from './flyer-routing.module';
import { FlyerComponent } from './flyer.component';
import { EditFlyerComponent } from './edit-flyer/edit-flyer.component';
import { SavedFlyerComponent } from './saved-flyer/saved-flyer.component';
import { TemplateDashboardComponent } from './template-dashboard/template-dashboard.component';
import { EditModeDirective } from './edittext/edit-mode.directive';
import { EditEnterDirective } from './edittext/edit-enter.directive';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    FlyerComponent,
    EditFlyerComponent,
    SavedFlyerComponent,
    TemplateDashboardComponent,
    EditModeDirective,
    EditEnterDirective
  ],
  imports: [
    CommonModule,
    FlyerRoutingModule,
    QuillModule.forRoot() ,
  ]
})
export class FlyerModule { }
