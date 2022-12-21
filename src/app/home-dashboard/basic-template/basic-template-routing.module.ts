import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTemplateComponent } from './basic-template.component';

const routes: Routes = [
  {
    path:'',
    component:BasicTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicTemplateRoutingModule { }
