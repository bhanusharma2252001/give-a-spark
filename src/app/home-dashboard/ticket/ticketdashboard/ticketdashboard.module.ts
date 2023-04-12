import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketdashboardRoutingModule } from './ticketdashboard-routing.module';
import { TicketdashboardComponent } from './ticketdashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TicketdashboardComponent
  ],
  imports: [
    CommonModule,
    TicketdashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TicketdashboardModule { }
