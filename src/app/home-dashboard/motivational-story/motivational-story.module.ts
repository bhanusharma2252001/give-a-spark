import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotivationalStoryRoutingModule } from './motivational-story-routing.module';
import { MotivationalStoryComponent } from './motivational-story.component';


@NgModule({
  declarations: [
    MotivationalStoryComponent
  ],
  imports: [
    CommonModule,
    MotivationalStoryRoutingModule
  ]
})
export class MotivationalStoryModule { }
