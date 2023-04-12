import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketComponent } from './ticket.component';

const routes: Routes = [{ path: '', component: TicketComponent
,
  children: [
    { path: '', redirectTo: 'ticketdashboard', pathMatch: 'full' },
    { path: 'ticketdashboard', loadChildren: () => import('./ticketdashboard/ticketdashboard.module').then(m => m.TicketdashboardModule) },
    { path: 'addticket', loadChildren: () => import('./addticket/addticket.module').then(m => m.AddticketModule) },
    { path: 'updateticket', loadChildren: () => import('./updateticket/updateticket.module').then(m => m.UpdateticketModule) },

  ],
}


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
