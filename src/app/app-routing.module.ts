import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterEmailComponent } from './client-login/enter-email/enter-email.component';
import { EnterOtpComponent } from './client-login/enter-otp/enter-otp.component';
import { LoginComponent } from './client-login/login/login.component';
import { SignupComponent } from './client-login/signup/signup.component';

const routes: Routes = [
  // { path: 'client-login', component: LoginComponent },
  {
    path:'client-login/login',
    component:LoginComponent,
    data: {
      title: 'Login for better experience'
    }
  },

  {
    path:'client-login/signup',
    component:SignupComponent
  },
  {
    path:'client-login/enter-email',
    component:EnterEmailComponent
  },
  {
    path:'client-login/enter-otp',
    component:EnterOtpComponent
  },
  {
    path:'',loadChildren: () => import('./home-dashboard/home-dashboard.module').then((m) => m.HomeDashboardModule) 
  },
  {
    path:'home-dashboard',loadChildren: () => import('./home-dashboard/home-dashboard.module').then((m) => m.HomeDashboardModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
