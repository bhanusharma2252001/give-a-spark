import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicTemplateRoutingModule } from './basic-template-routing.module';
import { BasicTemplateComponent } from './basic-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { ClipboardModule } from '@angular/cdk/clipboard';
import {ProgressBarAngularModule} from "progress-bar-angular"
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import { QuoteDashboardModule } from '../motivational-quote/quote-dashboard/quote-dashboard.module';
import { QuoteMyDashboardModule } from '../myquote/quote-dashboard/quote-dashboard.module'
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
    ProgressBarAngularModule,
    NgxSpinnerModule,
    MatDialogModule,
    QuoteDashboardModule,
    QuoteMyDashboardModule
    
  ]
})
export class BasicTemplateModule { }
