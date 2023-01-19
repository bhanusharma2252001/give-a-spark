import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFlyerComponent } from './edit-flyer/edit-flyer.component';
import { FlyerComponent } from './flyer.component';
import { SavedFlyerComponent } from './saved-flyer/saved-flyer.component';
import { TemplateDashboardComponent } from './template-dashboard/template-dashboard.component';

const routes: Routes = [
  
    {
      path: '',
      component:FlyerComponent ,
      children: [
        // { path: '', redirectTo: 'profile-dashboard', pathMatch: 'full' },
        {
          path:'edit-flyer', component:EditFlyerComponent
        },
        {
          path:'saved-flyer', component:SavedFlyerComponent
        },
        {
          path:'template-dashboard', component:TemplateDashboardComponent
        },
        // { path: 'update-story', loadChildren: () => import('./update-story/update-story.module').then((m) => m.UpdateStoryModule)}
        
      ]
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlyerRoutingModule { }
