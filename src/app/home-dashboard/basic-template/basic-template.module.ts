import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicTemplateRoutingModule } from './basic-template-routing.module';
import { BasicTemplateComponent } from './basic-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { ClipboardModule } from '@angular/cdk/clipboard';
import {ProgressBarAngularModule} from "progress-bar-angular"

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
    NgxQRCodeModule,
    ClipboardModule,
    ProgressBarAngularModule
    
  ]
})
export class BasicTemplateModule { }
