import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotivationalQuoteComponent } from './motivational-quote.component';

const routes: Routes = [

  {
    path:'', component:MotivationalQuoteComponent,
    children:[
      {
        path:'', redirectTo:'quote-dashboard', pathMatch: 'full'
      },
      {
        path:'quote-dashboard', loadChildren:()=> import('./quote-dashboard/quote-dashboard.module').then((m)=>m.QuoteDashboardModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotivationalQuoteRoutingModule { }
