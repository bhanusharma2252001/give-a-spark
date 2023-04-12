import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddticketRoutingModule } from './addticket-routing.module';
import { AddticketComponent } from './addticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddticketComponent
  ],
  imports: [
    CommonModule,
    AddticketRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AddticketModule { }
