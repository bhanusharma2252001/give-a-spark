import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyplanComponent } from './myplan/myplan.component';
import { PlanDashboardComponent } from './plan-dashboard/plan-dashboard.component';
import { PlanPurchaseComponent } from './plan-purchase/plan-purchase.component';
import { PlanComponent } from './plan.component';

const routes: Routes = [
  {
    path: '',
    component:PlanComponent ,
    children: [
      { path: '', redirectTo: 'plan-dashboard', pathMatch: 'full' },
      {
        path:'plan-dashboard', component:PlanDashboardComponent
      },
      {
        path:'myplan', component:MyplanComponent
      },
      {
        path:'plan-purchase', component:PlanPurchaseComponent
      }
  
      // { path: 'update-story', loadChildren: () => import('./update-story/update-story.module').then((m) => m.UpdateStoryModule)}
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }
