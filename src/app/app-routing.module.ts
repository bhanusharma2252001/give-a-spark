import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterEmailComponent } from './client-login/enter-email/enter-email.component';
import { EnterOtpComponent } from './client-login/enter-otp/enter-otp.component';
import { ForgetEmailComponent } from './client-login/forget-password/forget-email/forget-email.component';
import { ForgetOtpComponent } from './client-login/forget-password/forget-otp/forget-otp.component';
import { PasswordResetComponent } from './client-login/forget-password/password-reset/password-reset.component';
import { LoginComponent } from './client-login/login/login.component';
import { SignupComponent } from './client-login/signup/signup.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';

const routes: Routes = [
    { path: '', redirectTo: 'client-login/login', pathMatch: 'full'},
  {
    path:'client-login/login',
    component:LoginComponent,

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
    path:'client-login/forget-password/password-reset',
    component:PasswordResetComponent
  },
  {
    path:'client-login/forget-password/forget-email',
    component:ForgetEmailComponent
  },
  {
    path:'client-login/forget-password/forget-otp',
    component:ForgetOtpComponent
  },




  {
    path:'',canActivate:[AuthGuardGuard],loadChildren: () => import('./home-dashboard/home-dashboard.module').then((m) => m.HomeDashboardModule) 
  },
  {
    path:'home-dashboard',canActivate:[AuthGuardGuard],loadChildren: () => import('./home-dashboard/home-dashboard.module').then((m) => m.HomeDashboardModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
