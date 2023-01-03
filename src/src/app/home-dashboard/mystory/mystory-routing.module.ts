import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MystoryComponent } from './mystory.component';

const routes: Routes = [  {
  path: '',
  component: MystoryComponent,
  children: [
    { path: '', redirectTo: 'story-dashboard', pathMatch: 'full' },
    { path: 'story-dashboard', loadChildren: () => import('./story-dashboard/story-dashboard.module').then((m) => m.StoryDashboardModule)},
    { path: 'add-story', loadChildren: () => import('./add-story/add-story.module').then((m) => m.AddStoryModule)},
    // { path: 'update-story', loadChildren: () => import('./update-story/update-story.module').then((m) => m.UpdateStoryModule)}
    
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MystoryRoutingModule { }
