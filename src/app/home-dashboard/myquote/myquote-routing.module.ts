import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStoryComponent } from './add-story/add-story.component';
import { MyquoteComponent } from './myquote.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: MyquoteComponent,
  //   children: [
  //     { path: '', redirectTo: 'quote-dashboard', pathMatch: 'full' },
  //     { path: 'quote-dashboard', loadChildren: () => import('./quote-dashboard/quote-dashboard.module').then((m) => m.QuoteDashboardModule)},
  //     { path: 'add-quote', loadChildren: () => import('./add-quote/add-quote.module').then((m) => m.AddQuoteModule)},
  //     // { path: 'update-quote', loadChildren: () => import('./update-quote/update-quote.module').then((m) => m.UpdateQuoteModule)},
     
     
  //   ],
  // },

  {
    path:'', component:MyquoteComponent,
    children:[
      {
        path:'', redirectTo:'myquote-dashboard', pathMatch: 'full'
      },
      {
        path:'myquote-dashboard', loadChildren:()=> import('./quote-dashboard/quote-dashboard.module').then((m)=>m.QuoteMyDashboardModule)
      },
      { path: 'add-quote', loadChildren: () => import('./add-quote/add-quote.module').then((m) => m.AddQuoteModule)},
      {
        path:'add-story', component:AddStoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyquoteRoutingModule { }
