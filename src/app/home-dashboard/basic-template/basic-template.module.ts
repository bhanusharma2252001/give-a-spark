import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicTemplateRoutingModule } from './basic-template-routing.module';
import { BasicTemplateComponent } from './basic-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';


@NgModule({
  declarations: [
    BasicTemplateComponent
  ],
  imports: [
    CommonModule,
    BasicTemplateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ColorPickerModule,
  ]
})
export class BasicTemplateModule { }
