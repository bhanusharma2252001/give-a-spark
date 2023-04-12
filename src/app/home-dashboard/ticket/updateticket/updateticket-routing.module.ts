import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateticketComponent } from './updateticket.component';

const routes: Routes = [{ path: '', component: UpdateticketComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateticketRoutingModule { }
