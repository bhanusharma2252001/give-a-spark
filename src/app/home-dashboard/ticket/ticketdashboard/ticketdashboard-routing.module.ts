import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketdashboardComponent } from './ticketdashboard.component';

const routes: Routes = [{ path: '', component: TicketdashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketdashboardRoutingModule { }
