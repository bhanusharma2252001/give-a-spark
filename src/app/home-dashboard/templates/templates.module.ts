import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesComponent } from './templates.component';
import { TemplateDashboardComponent } from './template-dashboard/template-dashboard.component';
import { SavedTemplatesComponent } from './saved-templates/saved-templates.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { EditSaveComponent } from './edit-save/edit-save.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    TemplatesComponent,
    TemplateDashboardComponent,
    SavedTemplatesComponent,
    EditTemplateComponent,
    EditSaveComponent
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ColorPickerModule,
    NgxSpinnerModule

  ]
})
export class TemplatesModule { }
