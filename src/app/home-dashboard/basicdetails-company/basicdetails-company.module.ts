import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicdetailsCompanyRoutingModule } from './basicdetails-company-routing.module';
import { BasicdetailsCompanyComponent } from './basicdetails-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    BasicdetailsCompanyComponent
  ],
  imports: [
    CommonModule,
    BasicdetailsCompanyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxQRCodeModule,
    NgxSpinnerModule
  ]
})
export class BasicdetailsCompanyModule { }
