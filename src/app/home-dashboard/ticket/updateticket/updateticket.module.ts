import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateticketRoutingModule } from './updateticket-routing.module';
import { UpdateticketComponent } from './updateticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateticketComponent
  ],
  imports: [
    CommonModule,
    UpdateticketRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UpdateticketModule { }
