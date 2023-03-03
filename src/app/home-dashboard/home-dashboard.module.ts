import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeDashboardRoutingModule } from './home-dashboard-routing.module';
import { HomeDashboardComponent } from './home-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MyorderComponent } from './myorder/myorder.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [HomeDashboardComponent,SidebarComponent, HeaderComponent, MyorderComponent, HomePageComponent],
  imports: [
    CommonModule,
    HomeDashboardRoutingModule,
    NgxSpinnerModule
    
  ]
})
export class HomeDashboardModule { }
