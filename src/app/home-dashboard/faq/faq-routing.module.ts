import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FAQComponent } from './faq.component';
import { FaqDashboardComponent } from './faq-dashboard/faq-dashboard.component';

const routes: Routes = [

  {path: '',
  component:FAQComponent,
  children: [
    { path: '', redirectTo: 'faq-dashboard', pathMatch: 'full' },
    {
      path:'faq-dashboard', component:FaqDashboardComponent
    },
 
]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FAQRoutingModule { }
