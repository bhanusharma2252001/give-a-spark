import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeDashboardRoutingModule } from './home-dashboard-routing.module';
import { HomeDashboardComponent } from './home-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MyorderComponent } from './myorder/myorder.component';


@NgModule({
  declarations: [HomeDashboardComponent,SidebarComponent, HeaderComponent, MyorderComponent],
  imports: [
    CommonModule,
    HomeDashboardRoutingModule,
    
  ]
})
export class HomeDashboardModule { }
