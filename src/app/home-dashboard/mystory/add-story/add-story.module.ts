import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStoryRoutingModule } from './add-story-routing.module';
import { AddStoryComponent } from './add-story.component';


@NgModule({
  declarations: [
    AddStoryComponent
  ],
  imports: [
    CommonModule,
    AddStoryRoutingModule
  ]
})
export class AddStoryModule { }
