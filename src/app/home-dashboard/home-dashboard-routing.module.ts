import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard.component';

const routes: Routes = [
  {
    path:'', component:HomeDashboardComponent,
    children: [
      { path: '', redirectTo: 'user-profile', pathMatch: 'full' },
      { path: 'user-profile', loadChildren: () => import('./user-profile/user-profile.module').then((m) => m.UserProfileModule)},

      { path: 'basicdetails-company', loadChildren: () => import('./basicdetails-company/basicdetails-company.module').then((m) => m.BasicdetailsCompanyModule)},

      { path: 'basic-template', loadChildren: () => import('./basic-template/basic-template.module').then((m) => m.BasicTemplateModule)},
      
      { path: 'homepage', loadChildren: () => import('./homepage/homepage.module').then((m) => m.HomepageModule)}
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeDashboardRoutingModule { }
