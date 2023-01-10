import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyprofileComponent } from './myprofile.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  {
    path: '',
    component:MyprofileComponent ,
    children: [
      { path: '', redirectTo: 'profile-dashboard', pathMatch: 'full' },
      {
        path:'profile-dashboard', component:ProfileDashboardComponent
      },
      {
        path:'update-profile', component:UpdateProfileComponent
      },
    
  
      // { path: 'update-story', loadChildren: () => import('./update-story/update-story.module').then((m) => m.UpdateStoryModule)}
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyprofileRoutingModule { }
