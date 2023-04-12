import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddticketComponent } from './addticket.component';

const routes: Routes = [{ path: '', component: AddticketComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddticketRoutingModule { }
