import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MystoryRoutingModule } from './mystory-routing.module';
import { MystoryComponent } from './mystory.component';


@NgModule({
  declarations: [
    MystoryComponent
  ],
  imports: [
    CommonModule,
    MystoryRoutingModule
  ]
})
export class MystoryModule { }
