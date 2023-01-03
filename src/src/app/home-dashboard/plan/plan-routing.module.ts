import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanDashboardComponent } from './plan-dashboard/plan-dashboard.component';
import { PlanComponent } from './plan.component';

const routes: Routes = [
  {
    path: '',
    component:PlanComponent ,
    children: [
      { path: '', redirectTo: 'plan-dashboard', pathMatch: 'full' },
      {
        path:'plan-dashboard', component:PlanDashboardComponent
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
