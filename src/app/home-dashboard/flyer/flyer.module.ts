import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlyerRoutingModule } from './flyer-routing.module';
import { FlyerComponent } from './flyer.component';
import { EditFlyerComponent } from './edit-flyer/edit-flyer.component';
import { SavedFlyerComponent } from './saved-flyer/saved-flyer.component';
import { TemplateDashboardComponent } from './template-dashboard/template-dashboard.component';

import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  declarations: [
    FlyerComponent,
    EditFlyerComponent,
    SavedFlyerComponent,
    TemplateDashboardComponent,

  ],
  imports: [
    CommonModule,
    FlyerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxQRCodeModule,
    ColorPickerModule,
    QuillModule.forRoot() ,
  ]
})
export class FlyerModule { }
