import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-saved-templates',
  templateUrl: './saved-templates.component.html',
  styleUrls: ['./saved-templates.component.scss']
})
export class SavedTemplatesComponent implements OnInit {
  templateFontSize: any = 24;
  public contactDetailColor: string = '#e920e9';
  public lastNameColor: string = '#fff500';
  public designationColor: string = 'rgb(236,64,64)';
  public firstNameColor: string = '#2d5964';
  fontFamilyNew: any = 'Poppins, sans-serif'
  lineHeight: any = 1.5
  tempDetails: any;
  itemFontSize: any = 14
  fontSizeName: any = 18
  nameAlign: any = '';
  borderRadius: any = 0
  templateDesign: any = {
    firstNameColor: this.firstNameColor,
    lastNameColor: this.lastNameColor,
    designationColor: this.designationColor,
    contactDetailColor: this.contactDetailColor,
    fontFamily: this.fontFamilyNew,
    fontSize: this.templateFontSize,
    lineHeight: this.lineHeight,
    fontSizeItem: this.itemFontSize,
    nameFontSize: this.fontSizeName,
    nameAlign: this.nameAlign,
    borderRadius: this.borderRadius

  }
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
  templateList: any;
  design: any;
  form: FormGroup;
  public progressTracker: number = 0;

  progress: number = 0;
  username: any;
  Email: any;
  compName: any;
  compWebsite: any;
  number: any;
  compPhone: any;
  insta: any;
  Linkedin: any;
  uTube: any;
  Twitter: any;
  faceB: any;
  useraddress: any;
  quotevar: any;
  tempimg: any;
  code: any;
  copytext: any;
  constructor(private fb: FormBuilder, private api:SparkService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  // constructor( private api:SparkService) { }

  ngOnInit(): void {
    this. getTemplateDetails();
  }
  
  changeSize(evt: any) {
    let currnetSize = Number(evt.target.value);
    if (currnetSize == 4) {
      this.templateFontSize = 34
      this.itemFontSize = 20
      this.fontSizeName = 20
    } else if (currnetSize == 5) {
      this.templateFontSize = 44
      this.fontSizeName = 22
      this.itemFontSize = 25
    } else if (currnetSize == 3) {
      this.templateFontSize = 24
      this.itemFontSize = 12
      this.fontSizeName = 18
    } else if (currnetSize == 2) {
      this.templateFontSize = 20
      this.itemFontSize = 8
      this.fontSizeName = 15
    } else {
      this.templateFontSize = 10
      this.itemFontSize = 6
      this.fontSizeName = 12
    }

  }
  changeLine(evt: any) {
    let currnetSize = Number(evt.target.value);
    if (currnetSize == 4) {
      this.lineHeight = 2.4
    } else if (currnetSize == 5) {
      this.lineHeight = 3.4
    } else if (currnetSize == 3) {
      this.lineHeight = 1.4
    } else if (currnetSize == 2) {
      this.lineHeight = 1.1
    } else {
      this.lineHeight = 0.5
    }
  }

  getAlign(val: any) {
    this.nameAlign = val;
  }


//   getTemplateDetails() {
//     this.api.getsignatureDetails().subscribe((res: any) => {

//       this.tempDetails = res.result[res.result.length - 1];
//       this.username = this.tempDetails?.yourName
//       this.Email = this.tempDetails?.email
//       this.compName = this.tempDetails?.companyName
//       this.compWebsite = this.tempDetails?.companyWebsite
//       this.number = this.tempDetails?.phone
//       this.compPhone = this.tempDetails?.companyPhone
//       this.design = this.tempDetails?.designation
   

//       this.insta = this.tempDetails?.instagramProfile
//       this.uTube = this.tempDetails?.youtubeChannel

//       this.Linkedin = this.tempDetails?.linkedInProfile
//       this.Twitter = this.tempDetails?.twitterProfile
//       this.faceB = this.tempDetails?.fbProfile
//       this.useraddress= this.tempDetails?.address[0].city
//       this.quotevar=this.tempDetails?.quotes
//       this.code= this.tempDetails?.createdBy.QrCode
// this.tempimg=this.tempDetails?.profileImage
//       console.log(this.tempDetails, "kkkkkkkk")

//       this.firstNameColor =this.tempDetails?.foundDesigns[0]?.templateDesign?.firstNameColor,
//       this.lastNameColor =this.tempDetails?.foundDesigns[0]?.templateDesign?.lastNameColor,
//       this.designationColor = this.tempDetails?.foundDesigns[0]?.templateDesign?.designationColor,
//       this.contactDetailColor = this.tempDetails?.foundDesigns[0]?.templateDesign?.contactDetailColor,
//       this.fontFamilyNew = this.tempDetails?.foundDesigns[0]?.templateDesign?.fontFamily,
//       this.templateFontSize =this.tempDetails ?.foundDesigns[0]?.templateDesign?.fontSize,
//       this.lineHeight = this.tempDetails?.foundDesigns[0]?.templateDesign?.lineHeight,
//       this.itemFontSize = this.tempDetails?.foundDesigns[0]?.templateDesign?.fontSizeItem,
//       this.fontSizeName = this.tempDetails?.foundDesigns[0]?.templateDesign?.nameFontSize,
//       this.nameAlign = this.tempDetails?.foundDesigns[0]?.templateDesign?.nameAlign,
//       this.borderRadius = this.tempDetails?.foundDesigns[0]?.templateDesign?.borderRadius


//     })
//   }


  getTemplateDetails() {
    this.api.getsignatureDetails().subscribe((res: any) => {
      this.tempDetails = res.result;
      this.username = this.tempDetails?.yourName
      this.Email = this.tempDetails?.email
      this.compName = this.tempDetails?.companyName
      this.compWebsite = this.tempDetails?.companyWebsite
      this.number = this.tempDetails?.phone
      this.compPhone = this.tempDetails?.companyPhone
      this.design = this.tempDetails?.designation
   

      this.insta = this.tempDetails?.instagramProfile
      this.uTube = this.tempDetails?.youtubeChannel

      this.Linkedin = this.tempDetails?.linkedInProfile
      this.Twitter = this.tempDetails?.twitterProfile
      this.faceB = this.tempDetails?.fbProfile
      this.useraddress= this.tempDetails?.address[0].city
      this.quotevar=this.tempDetails?.quotes
this.tempimg=this.tempDetails?.profileImage


let templateResult = this.tempDetails?.templateDesign;
console.log(templateResult, 'ada');
this.firstNameColor = templateResult?.firstNameColor,
  this.lastNameColor = templateResult?.lastNameColor,
  this.designationColor = templateResult?.designationColor,
  this.contactDetailColor = templateResult?.contactDetailColor,
  this.fontFamilyNew = templateResult?.fontFamily,
  this.templateFontSize = templateResult?.fontSize,
  this.lineHeight = templateResult?.lineHeight,
  this.itemFontSize = templateResult?.fontSizeItem,
  this.fontSizeName = templateResult?.nameFontSize,
  this.nameAlign = templateResult?.nameAlign,
  this.borderRadius = templateResult?.borderRadius
      console.log(this.tempDetails, "kkkkkkkk")


    })
  }










  
CopyToClipboard(element:any) {

  var doc:any = document
  , text = doc.getElementById(element)
  , range, selection:any;
console.log(element,'kaya')
if (doc.body.createTextRange)
{
  range = doc.body.createTextRange();
  range.moveToElementText(text);
  range.select();
 
} 

else if (window.getSelection)
{
  selection = window.getSelection();        
  range = doc.createRange();
  range.selectNodeContents(text);
  selection.removeAllRanges();
  selection.addRange(range);
  console.log(text,'t');
  this.copytext= text
  console.log(this.copytext
    ,'copy');
  
  alert('Check your Email')
  
}
document.execCommand('copy');
let a :any = window.getSelection();  
a.removeAllRanges();
console.log(a, 'a');

let b :any= document.getElementById("btn")
b.value= "Copied"
console.log(b,'b');


// document.getElementById("btn").value="Copied";
}

  }


