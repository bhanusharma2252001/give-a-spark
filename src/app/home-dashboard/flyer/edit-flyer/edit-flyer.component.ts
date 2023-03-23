import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
// import hljs from 'highlight.js';
import Quill from 'quill';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {CdkDragDrop, CdkDragEnd, moveItemInArray} from '@angular/cdk/drag-drop';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import { ColorPickerService, Cmyk } from 'ngx-color-picker';
// import { Font, FontPickerConfigInterface } from 'ngx-font-picker';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { take } from 'rxjs';
// import {NgxCroppedEvent, NgxPhotoEditorService} from "ngx-photo-editor";
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { NgxPhotoEditorService } from 'ngx-photo-editor';
// import ImageResize from 'quill-image-resize-module'
// Quill.register('modules/imageResize', ImageResize)

@Component({
  selector: 'app-edit-flyer',
  templateUrl: './edit-flyer.component.html',
  styleUrls: ['./edit-flyer.component.scss']
})
export class EditFlyerComponent implements OnInit {
 imageUrl:any;
  urls:any;
  imgChangeEvt: any = '';
  cropImgPreview: any = '';
  templateShow: any;
  onFileChange(event: any): void {
      this.imgChangeEvt = event;
  }
  cropImg(e: ImageCroppedEvent) {
      this.cropImgPreview = e.base64;
  }
  imgLoad() {
      // display cropper tool
  }
  initCropper() {
      // init cropper
  }

  imgFailed() {
      // error msg
  }
  showImage=false;

  public color1: string = '#2889e9';
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  form!: FormGroup;
  html:any;
  htmlContent = '';
  imageSelected : any;
  modules = {}
  quillConfig={
  toolbar: {
       container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],                                         // remove formatting button

    ['link', 'image', 'video']
       ],
     },
  }
  imageSrc: any;
  imgSrc: any
  logoImageForm: FormGroup;
  Submitted = false;
  fileImageName: any ='';
  uploadImageName: any ='';

  fileData=[] as any;
  fileDatas=[] as any;
  url:any;
  // urls = '';
  contentSize:any=10
  HeadingSize: any = 18
  SocialLinksSize: any = 9
  preview: any;
  fontFamilyNew: any = 'Poppins, sans-serif';
  fontWeightNew: any = 200;
  fontStyleNew: any = 'italic';
  fontFamilyList: any = ['Poppins, sans-serif', 'serif',
  'sans-serif',
  'monospace',
  'cursive',
  'fantasy',
  ' Trebuchet MS',
  'Lucida Sans',
  'Palatino',
  'Georgia',
  'system-ui',
  'ui-serif',
  'ui-sans-serif',
  'ui-monospace',
  'ui-rounded',
  'emoji',
  'math',
  'fangsong']
  logoImageForm1: FormGroup<{ img: FormControl<string | null>; }>;
  flyerform:any;
  heading = 'Heading';

  constructor( private fb: FormBuilder,private route: ActivatedRoute,private _ngZone: NgZone,private service: NgxPhotoEditorService
){

  // this.flyerform = new FormGroup({
  //   heading: new FormControl('')
  // })
  this.logoImageForm = new FormGroup({
    logo: new FormControl(''),
    // img: new FormControl(''),
  });

  this.logoImageForm1 = new FormGroup({
    img: new FormControl(''),
  });
}







public delete(){
  this.showImage = false;
  this.urls = null;
}


  ngOnInit() {

    this.form = new FormGroup({
      'text': new FormControl('<p><strong>Hello</strong> World!</p>'),
      'fontFamilyNew': new FormControl(''),
      // 'fontWeightNew': new FormControl(''),
      'fontStyleNew': new FormControl('')

    });
    console.log(this.form.value, "image form vlue");



  }

  selectfontweight() {
    this.fontWeightNew = 500;
  }

  selectfontItalic() {
    this.fontStyleNew = 'italic';
  }


  // onSelectFile(event: any) {
  //   this.Submitted  = true;
  //   let files = event.target.files;
  //   this.fileImageName = event.target.files[0].name;
  //   if (files) {
  //     for (let file of files) {
  //       if (!file.type.includes('logo')) {
  //         this.isImages = false;
  //         return;
  //       }
  //       this.fileDatas.push(file);
  //     }
  //   }
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]); // read file as data url
  //     reader.onload = (event: any) => { // called once readAsDataURL is completed
  //       console.log(event, "image 1");
  //       this.url = event.target.result+Math.random();
  //     }
  //   }
  // }


  // onSelectFile1(event: any) {
  //   let files = event.target.files;
  //   this.uploadImageName = event.target.files[0].name;
  //   if (files) {
  //     for (let file of files) {
  //       if (!file.type.includes('img')) {
  //         this.isImage = false;
  //         return;
  //       }
  //       this.fileData.push(file);
  //     }
  //   }
  //   if (event.target.files && event.target.files[0]) {
  //     var readers = new FileReader();
  //     readers.readAsDataURL(event.target.files[0]); // read file as data url
  //     readers.onload = (event: any) => { // called once readAsDataURL is completed
  //       console.log(event, "image 2");
  //       this.urls = event.target.result+Math.random();
  //     }
  //   }
  // }



  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        console.log(event);
        this.url = event.target.result;
      }
    }
  }


  onSelectFile1(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        console.log(event);
        this.urls = event.target.result;
      }
    }
  }


  onSelectFileImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        console.log(event);
        this.imageUrl = event.target.result;
      }
    }
  }
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
triggerResize() {
  this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
}

  onDragEnd(event: CdkDragEnd) {
    const transform = event.source.getFreeDragPosition();
    console.log(transform, "transform");
    // save the new position of the element here
  }
  onContentChanged = (event:any) =>{
    //console.log(event.html);
  }

  public logValue(): void {
  let  element = document.querySelector('.ql-editor');
    this.html = element?.innerHTML;
  }

  public logForm(): void {
    setTimeout(() => {
    console.log(this.form);
    console.log(`DIRTY: ${this.form.dirty}`);
    console.log(`TOUCHED: ${this.form.touched}`);
    });
  }

  func(){
    const portalDiv = document.getElementById('your-element')!;
    htmlToImage.toJpeg((portalDiv), { quality: 0.95 })
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'my-image-name.jpeg';
      link.href = dataUrl;
      link.click();
    });
  }

  public blur(): void {
    console.log('blur');
  }

  public onSelectionChanged(): void {
    console.log('onSelectionChanged');
  }

  image1(){

      this.imageSrc = './assets/images/flyer-1.jpg'


  }

  image2(){

      this.imageSrc = './assets/images/flyer-2.jpg'
  }

  image3(){

    this.imageSrc = './assets/images/flyer-3.png'

  }

  image4(){
    this.imageSrc = './assets/images/flyer-4.png'
  }


  image5(){
    this.imageSrc = './assets/images/flyer-5.jpg'
  }

  image6(){
    this.imageSrc = './assets/images/flyer-6.jpg'
  }

  image7(){
    this.imageSrc = './assets/images/flyer-7.jpg'
  }

  image8(){
    this.imageSrc = './assets/images/flyer-8.jpg'
  }

  image9(){
    this.imageSrc = './assets/images/flyer-9.jpg'
  }

  image10(){
    this.imageSrc = './assets/images/flyer-10.jpg'
  }
  image11(){
    this.imageSrc = './assets/images/flyer-11.jpg'
  }

  image12(){
    this.imageSrc = './assets/images/flyer-12.jpg'
  }

  image13(){
    this.imageSrc = './assets/images/flyer-13.jpg'
  }


  image14(){
    this.imageSrc = './assets/images/flyer-14.jpg'
  }

  image15(val:any){
    this.templateShow=val
  }

  changeYoutubeSize(evt:any){
    let currnetSize = Number(evt.target.value);
    if (currnetSize == 4) {
    
      this.contentSize=12
      this.HeadingSize= 25
      this.SocialLinksSize = 11
    }
     else if (currnetSize == 5) {
      this.contentSize=14
      this.HeadingSize= 30
      this.SocialLinksSize = 10
    } 
    else if (currnetSize == 3) {
      this.contentSize=10
      this.HeadingSize= 18
      this.SocialLinksSize = 9
 
    }
     else if (currnetSize == 2) {

      this.HeadingSize = 17
      this.SocialLinksSize = 8
      this.contentSize=7
    } 
    else if (currnetSize == 1) {
      this.contentSize=15
      this.HeadingSize = 15
      this.SocialLinksSize = 7
      
    } 
  }

}
