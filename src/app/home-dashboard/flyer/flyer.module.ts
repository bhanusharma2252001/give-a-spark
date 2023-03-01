import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlyerRoutingModule } from './flyer-routing.module';
import { FlyerComponent } from './flyer.component';
import { EditFlyerComponent } from './edit-flyer/edit-flyer.component';
import { SavedFlyerComponent } from './saved-flyer/saved-flyer.component';
import { DragDropModule} from '@angular/cdk/drag-drop';

import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { AngularEditorModule } from '@kolkov/angular-editor';

// import { MatSelectModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxPhotoEditorModule } from 'ngx-photo-editor';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  declarations: [
    FlyerComponent,
    EditFlyerComponent,
    SavedFlyerComponent,
    

  ],
  imports: [
    CommonModule,
    FlyerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxQRCodeModule,
    ColorPickerModule,
    DragDropModule,
    AngularEditorModule,
    // RichTextEditorAllModule,
    // FontPickerModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxPhotoEditorModule,
    MatInputModule,
    TextFieldModule,
    ImageCropperModule,
    // MaterialModule,
    // MatSelectModule,
    QuillModule.forRoot() ,
  ]
})
export class FlyerModule { }
