import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuoteComponent } from './add-quote.component';

const routes: Routes = [
  {
    path:'', component:AddQuoteComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddQuoteRoutingModule { }
