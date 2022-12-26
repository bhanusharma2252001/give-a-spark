import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotivationalStoryComponent } from './motivational-story.component';

const routes: Routes = [
  {
    path: '',
    component: MotivationalStoryComponent,
    children: [
      { path: '', redirectTo: 'story-dashboard', pathMatch: 'full' },
      { path: 'story-dashboard', loadChildren: () => import('./story-dashboard/story-dashboard.module').then((m) => m.StoryDashboardModule)},
 

      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotivationalStoryRoutingModule { }
