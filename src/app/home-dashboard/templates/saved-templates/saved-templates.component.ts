
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef, ViewEncapsulation, ViewChildren, QueryList,  Renderer2 } from '@angular/core';
import { SparkService } from 'src/app/service/spark.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


// import * as chrome from 'chrome';


// import * as OfficeHelpers from '@microsoft/office-js-helpers';
@Component({
  selector: 'app-saved-templates',
  templateUrl: './saved-templates.component.html',
  styleUrls: ['./saved-templates.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SavedTemplatesComponent implements OnInit {
  // @ViewChild('tableData',{static:false})tableData!:ElementRef
  @ViewChildren('tableData')tableData! : QueryList<ElementRef>
  @ViewChild('request', { static: true }) request: ElementRef;
// chrome: any;
 logotext="Cookies for outlook"
  templateFontSize: any = 24;
  public contactDetailColor: string = '';
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
  templateRef: any;
  selectedTemplateId: number;
  planDetail: any;
  logo = 'https://giveaspark.s3.us-west-1.amazonaws.com/Soical_icons/flyer-logo.png'
  tempId: any;
  defaultDetails: any;
  std: any;
  videoUrl: any;
  videoid: any;
  youId: any;
  thumbnail: string;
  youTubeUrl: any;
  outLookRef: any;

  private clientId: string = '314583230343-p4lviak4saq374tr9bqld4kuhdceedat.apps.googleusercontent.com';
  private discoveryDocs: string[] = ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'];
  auth2: any;

  constructor(private fb: FormBuilder, private api:SparkService, private router:Router, private spinner:NgxSpinnerService, private toast:ToastrService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      address: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    console.log(this.clientId, 'client id')
   


    this.spinner.show();

    setTimeout(() => {












      this.spinner.hide();
    }, 1000);
    this. getTemplateDetails();
    this.gettemplatebyUser();




  //   console.log("set on gmail fn");
  //   console.log("set on gmail",gapi);
  //   var CLIENT_ID = '314583230343-p4lviak4saq374tr9bqld4kuhdceedat.apps.googleusercontent.com';
  
  // gapi.load('client', function initClient() {
  //   console.log("starting of function");
    
  //   gapi.client.init({
  //     discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
  //     clientId: '314583230343-p4lviak4saq374tr9bqld4kuhdceedat.apps.googleusercontent.com',
  //     scope: 'https://www.googleapis.com/auth/gmail.settings.basic'
  //   }).then(function () {
  //     // do stuff with loaded APIs
  //     console.log('it worked');
  //   }).catch((error:any) =>
  //   {
  // console.log("error thrown from gapi",error);
  
  //   });
  // });
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





  getTemplateDetails() {
    this.api.getsignatureDetails().subscribe((res: any) => {
      this.planDetail=res?.plan
      this.std=res?.userData[0]?.stdCode

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
      // this.useraddress= this.tempDetails?.address[0]?.city
      this.quotevar=this.tempDetails?.quotes
this.tempimg=this.tempDetails?.profileImage

this.youTubeUrl=this.tempDetails?.youtubeUrl
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

console.log(this.youTubeUrl, 'youtubeurl');


    })
  }


  remove(logoId:any){this.tempId=logoId
    
    if (this.planDetail == 'Plan C' || this.planDetail == 'Plan B' ){
      this.api.removeLogo(this.tempId).subscribe((res:any)=>{
        console.log(this.tempId);
        this.getTemplateDetails();
        this.toast.show('Logo Removed')
      })
    }
    if( this.planDetail == 'Plan A'){
      this.router.navigate(['home-dashboard/plan/plan-dashboard'])

      if(this.planDetail == 'Plan B' || this.planDetail == 'Plan c' ){
        this.api.removeLogo(this.tempId).subscribe((res:any)=>{
          console.log(this.tempId);
          this.getTemplateDetails();
          this.toast.show('Logo Removed')
        })
      }
//       else{
// this.logo
//       }
    }


console.log(this.tempId,'iiiiidddddd');

    console.log('working');
    // debugger
 
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
  
    this.toast.show('Signature Has Been Copied')
  
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
gettemplatebyUser(){
  this.api.getbasicDetaiofUseer().subscribe((res: any) => {
 
   
this.code=res.result[0]?.QrCode;
console.log(this.code);


  })
 }

 editTemplate(val:any) {
  
  let id :number = val;
  console.log(id,'kaya')


  this.router.navigate(['home-dashboard/templates/edit-save'], { queryParams: { templateId: id } })
}
setonGmail(){



  let tabledata:any = this.tableData;
  let result:any = tabledata?._results;
  console.log(result, 'any');
  
  result.filter( (item:any)=>{
  if (this.selectedTemplateId == Number(item?.nativeElement.id)) {
  this.templateRef = item?.nativeElement
  this.api.gmail(this.templateRef.outerHTML
  ).subscribe ((res: any)=>{
  console.log(res, 'setgmail');})}})
  
   
  
  this.toast.success('Please Check your Email');
    
  // this.api.gmail(this.templateRef.outerHTML
  //   ).subscribe((res:any)=>{
  //   console.log(res, 'setgmail');
    
  // })
  
  }
  openModal (evt:any) {  console.log(evt);
  this. selectedTemplateId = evt
    


}

setOnOutlook(){
  // this.outLookRef = this.tableData.nativeElement
  // localStorage.setItem( 'outlooktemp',this.tableData)
  let tabledata:any = this.tableData;
  let result:any = tabledata?._results;
  console.log(result, 'any');
  
  result.filter( (item:any)=>{
  if (this.selectedTemplateId == Number(item?.nativeElement.id)) {
  this.templateRef = item?.nativeElement
  this.api.outlook(this.templateRef.outerHTML
  ).subscribe ((res: any)=>{
  console.log(res, 'set on Outllok');})}})
  

  this.toast.success('Please Check your Outlook');
    // localStorage.setItem('outlook',this.templateRef.outerHTML)

   

  }



  Yahoo(){
    // this.outLookRef = this.tableData.nativeElement
    // localStorage.setItem( 'outlooktemp',this.tableData)
    let tabledata:any = this.tableData;
    let result:any = tabledata?._results;
    console.log(result, 'any');
    
    result.filter( (item:any)=>{
    if (this.selectedTemplateId == Number(item?.nativeElement.id)) {
    this.templateRef = item?.nativeElement
    this.api.yahoo(this.templateRef.outerHTML
    ).subscribe ((res: any)=>{
    console.log(res, 'set on Outllok');})}})
    
  
    this.toast.success('Please Check your Yahoo Mail');
      // localStorage.setItem('outlook',this.templateRef.outerHTML)
  
     
  
    }


    delTemplate(val:any){
      this.tempId=val
      this.api.delTemplate(this.tempId).subscribe((res:any)=>{
        console.log(this.tempId);
        this.toast.success('This Signature is deleted successfully.');
        this.getTemplateDetails();
    })
   
    }

  }
