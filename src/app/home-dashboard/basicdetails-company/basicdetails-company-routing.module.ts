import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicdetailsCompanyComponent } from './basicdetails-company.component';

const routes: Routes = [
  {
    path:'',
    component:BasicdetailsCompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicdetailsCompanyRoutingModule { }
