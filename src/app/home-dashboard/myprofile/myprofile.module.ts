import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyprofileRoutingModule } from './myprofile-routing.module';
import { MyprofileComponent } from './myprofile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    MyprofileComponent,
    UpdateProfileComponent,
    ProfileDashboardComponent,
  
  ],
  imports: [
    CommonModule,
    MyprofileRoutingModule,  ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule
  ]
})
export class MyprofileModule { }
