import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { SavedTemplatesComponent } from './saved-templates/saved-templates.component';
import { TemplateDashboardComponent } from './template-dashboard/template-dashboard.component';
import { TemplatesComponent } from './templates.component';

const routes: Routes = [
  {
    path: '',
    component:TemplatesComponent ,
    children: [
      // { path: '', redirectTo: 'profile-dashboard', pathMatch: 'full' },
      {
        path:'saved-templates', component:SavedTemplatesComponent
      },
      {
        path:'template-dashboard', component:TemplateDashboardComponent
      },
   
      {
        path:'edit-template', component:EditTemplateComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
