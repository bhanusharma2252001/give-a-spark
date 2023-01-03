import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicdetailsCompanyRoutingModule } from './basicdetails-company-routing.module';
import { BasicdetailsCompanyComponent } from './basicdetails-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BasicdetailsCompanyComponent
  ],
  imports: [
    CommonModule,
    BasicdetailsCompanyRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BasicdetailsCompanyModule { }
