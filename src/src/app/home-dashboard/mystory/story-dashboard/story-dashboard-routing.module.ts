import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryDashboardComponent } from './story-dashboard.component';
const routes: Routes = [
  {path:'', component:StoryDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryDashboardRoutingModule { }
