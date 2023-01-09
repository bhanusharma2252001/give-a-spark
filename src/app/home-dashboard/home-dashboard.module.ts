import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeDashboardRoutingModule } from './home-dashboard-routing.module';
import { HomeDashboardComponent } from './home-dashboard.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [HomeDashboardComponent,SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    HomeDashboardRoutingModule,
    
  ]
})
export class HomeDashboardModule { }
