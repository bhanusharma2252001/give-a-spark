import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../client-login/login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeDashboardComponent } from './home-dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MyorderComponent } from './myorder/myorder.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {
    path:'', component:HomeDashboardComponent,
    children: [
      // { path: '', redirectTo: 'homepage', pathMatch: 'full'},
     
      { path: '', redirectTo: 'user-profile', pathMatch: 'full' },
      { path: 'user-profile', loadChildren: () => import('./user-profile/user-profile.module').then((m) => m.UserProfileModule)},

      { path: 'basicdetails-company', loadChildren: () => import('./basicdetails-company/basicdetails-company.module').then((m) => m.BasicdetailsCompanyModule)},

      { path: 'basic-template', loadChildren: () => import('./basic-template/basic-template.module').then((m) => m.BasicTemplateModule)},
      
      // { path: 'homepage', loadChildren: () => import('./homepage/homepage.module').then((m) => m.HomepageModule)},
     
      { path: 'myquote', loadChildren: () => import('./myquote/myquote.module').then((m) => m.MyquoteModule)},
      { path: 'motivational-quote', loadChildren: () => import('./motivational-quote/motivational-quote.module').then((m) => m.MotivationalQuoteModule)},
    
      { path: 'plan', loadChildren: () => import('./plan/plan.module').then((m) => m.PlanModule)},
      { path: 'myprofile', loadChildren: () => import('./myprofile/myprofile.module').then((m) => m.MyprofileModule)},
      { path: 'flyer', loadChildren: () => import('./flyer/flyer.module').then((m) => m.FlyerModule)},
      { path: 'templates', loadChildren: () => import('./templates/templates.module').then((m) => m.TemplatesModule)},
    
    {
      path:'myorder', component:MyorderComponent
    }  ,
     {
      path:'home-page', component:HomePageComponent
     },
     
     {
      path:'setting', component:SettingComponent
     },
     { path: 'ticket', loadChildren: () => import('./ticket/ticket.module').then(m => m.TicketModule) },
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeDashboardRoutingModule { }
