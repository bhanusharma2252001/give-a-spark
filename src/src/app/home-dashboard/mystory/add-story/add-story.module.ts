import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStoryRoutingModule } from './add-story-routing.module';
import { AddStoryComponent } from './add-story.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddStoryComponent
  ],
  imports: [
    CommonModule,
    AddStoryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddStoryModule { }
