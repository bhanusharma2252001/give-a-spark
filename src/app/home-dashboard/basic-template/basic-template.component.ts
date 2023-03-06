import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { Clipboard } from '@angular/cdk/clipboard';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-basic-template',
  templateUrl: './basic-template.component.html',
  styleUrls: ['./basic-template.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class BasicTemplateComponent implements OnInit {
  details: any;
  username: any;
  Email: any;
  compName: any;
  compWebsite: any;
  number: any;
 
img:boolean=true;
  @ViewChild('tableData',{static:false})tableData!:ElementRef
  signatureDetailsForm: FormGroup
  planShow = false;
  public toggle: boolean = false;
  showPro: boolean = false;
  templateShow: any;
  QuoteId: any;
  LongQuote: any;
  ShowOneQuote: boolean = true;
  
TemplateId:any
profileImages:any;
  url: string | ArrayBuffer | null | undefined;
  Submitted = false
  fileData = [] as any;
  fileImageName: any = '';
  isImage = true;
  uploadImage: any;
  imageData1: any;
  imageData2: any;
  templateRef:any

  public rgbaText: string = 'rgba(165, 26, 214, 0.2)';


  public selectedColor: string = 'firstNameColor';

  public color1: string = '#2889e9';

  progress:any=0

  public color19: string = '#070606';
  storyList: any;
  quotesList: any;
  desig: any;
  addr: any;
  insta: any;
  uTube: any;
  Linkedin: any;
  Twitter: any;
  faceB: any;

  showMainContent: Boolean = true;
  templatData: boolean = true;

  // QR Code
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = ""
  // change new
  templateFontSize: any = 24;
  // public barColor:string='fff500'
  public contactDetailColor: string = '#00000';
  public lastNameColor: string = '#00000';
  public designationColor: string = '#00000';
  public firstNameColor: string = '#00000';
  fontFamilyNew: any = 'Poppins, sans-serif'
  lineHeight: any = 1.5
  tempDetails: any;
  itemFontSize: any = 12
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
  compPhone: any;
  dessssssignnnnn: any;
  quotevar: any;
  useraddress: any;
  barColor: any;
  tempimg: any;
  // chnage end
  @ViewChild('closeModal') private closeModal!: ElementRef;
  sign: any;
  planDetail:any


  getScanText() {
    let token: any = sessionStorage.getItem('ClientSpark')
    this.value = 'https://app.giveaspark.com/home-dashboard/myprofile/profile-dashboard?token=' + btoa(token)
    // this.router.navigateByUrl('home-dashboard/myprofile/profile-dashboard?token='+btoa(token))
  }







  constructor(private api: SparkService, myElement: ElementRef,
    private fb: FormBuilder, private toast: ToastrService, private router: Router, private clipboard: Clipboard, private spinner:NgxSpinnerService) {
    this.signatureDetailsForm = this.fb.group({
      yourName: [''],
      designation: [''],
      email: [''],
      phoneNo: [''],
      companyWebsite: [''],
      address: [''],
      fbProfile: [''],
      instagramProfile: [''],
      linkedInProfile: [''],
      youtubeChannel: [''],
      quotesId: [''],
      quotes: [''],
      profileImage: [''],
      companyPhone: [''],
      twitterProfile: [''],
      signatureName:['']
    })
  //   router.canceledNavigationResolution = 'computed';
  //   history.pushState(null, '', location.href);
  // window.onpopstate = function () {
  //    history.go(1);
  // };

  }




  

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    

    // this.getBasicProfile()
    // this.getDesign();
    this.getTemplateDetails();
    if (localStorage.getItem('quoteId')) {
      this.QuoteId = localStorage.getItem('quoteId')

    }

    if (localStorage.getItem('LongQuotes')) {
      this.LongQuote = localStorage.getItem('LongQuotes')

    }
    console.log(this.LongQuote, this.QuoteId)
    this.getBasicProfile();
    this.getScanText();


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
  alert(text)
  
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


  // new change start
  changeSize(evt: any) {
    let currnetSize = Number(evt.target.value);
    if (currnetSize == 4) {
      this.templateFontSize = 33
      this.itemFontSize = 14
      this.fontSizeName = 14
    } else if (currnetSize == 5) {
      this.templateFontSize = 36
      this.fontSizeName = 15
      this.itemFontSize = 15
    } else if (currnetSize == 3) {
      this.templateFontSize = 32
      this.itemFontSize = 13
      this.fontSizeName = 13
    } else if (currnetSize == 2) {
      this.templateFontSize = 31
      this.itemFontSize = 12
      this.fontSizeName = 12
    } else {
      this.templateFontSize = 30
      this.itemFontSize = 11
      this.fontSizeName = 11
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
  //new change end
getSignature(){
  this.sign = this.signatureDetailsForm.value.signatureName;
  console.log(this.sign, "signature name");
  
}



  getBasicProfile() {
    this.api.getbasicDetaiofUseer().subscribe((res: any) => {
      this.details = res.result[0];
      console.log(res, 'xasds');

      this.username = res.result[0]?.firstName
      this.Email = res.result[0]?.email
      this.compName = res.result[0]?.companyName
      this.compWebsite = res.result[0]?.companyWebsite
      this.number = res.result[0]?.phone
      this.compPhone = res.result[0]?.companyPhone
      this.desig = res.result[0]?.designation
      this.addr = res.result[0]?.address

      this.insta = res.result[0]?.instagramProfile
      this.uTube = res.result[0]?.youtubeChannel

      this.Linkedin = res.result[0]?.linkedInProfile
      this.Twitter = res.result[0]?.twitterProfile
      this.faceB = res.result[0]?.fbProfile
      

      console.log(this.compWebsite, 'jojo')

      console.log(this.details)
    })



  }
  getTemplateDetails() {
    this.api.getsignatureDetails().subscribe((res: any) => {
      this.planDetail = res?.plan
      this.tempDetails = res.result[res.result.length - 1];
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


  onSubmit(data: any) {
   let body :any= {}
     body = {

      yourName: data.yourName,
      signatureName: this.sign?this.sign:'',
      designation: data.designation,
      email: data.email,
      phoneNo: data.phoneNo,
      companyWebsite: data.companyWebsite,
      address: [

        {
          addressline: data.address,
          addressline2: data.address,
          landmark: data.address,
          city: data.address,
          state: data.address,
          pincode: '',
          country: data.address,
        }

      ],
      quotesId: this.QuoteId?this.QuoteId:'',
      quotes: data.quotes?data.quotes:'',
      profileImage: this.imageData2?this.imageData2:'',
      companyPhone: data.companyPhone?data.companyPhone:'',
  
      
    }

    if(this.planDetail != 'Plan A') {
      body['fbProfile']= data.fbProfile,
      body['twitterProfile']= data?.twitterProfile,
      body['instagramProfile']= data.instagramProfile,
      body['linkedInProfile']= data.linkedInProfile,
      body['youtubeChannel']=data.youtubeChannel,
      
      body['templateDesign']={
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
      
    } 
    else {
      body['fbProfile']= '',
      body['twitterProfile']= '',
      body['instagramProfile']= '',
      body['linkedInProfile']= '',
      body['youtubeChannel']= '',
      
      body['templateDesign']= {
        firstNameColor: '',
        lastNameColor: '',
        designationColor: '',
        contactDetailColor: '',
        fontFamily: '',
        fontSize: '',
        lineHeight: '',
        fontSizeItem: '',
        nameFontSize: '',
        nameAlign: '',
        borderRadius: ''

      }
      }
    
console.log(body,'sbxkabxak');


    this.api.addsignatureDetails(body).subscribe((res: any) => {
      console.log(res);
      this.TemplateId=res?.data?._id
      console.log(this.TemplateId, 'iddddd');
      

      this.toast.success('Template  Created Successfully');

      this.getTemplateDetails();
      if(localStorage.getItem('quoteId')){
        localStorage.removeItem('quoteId')
      
      }
      
      if(localStorage.getItem('LongQuotes')){
        localStorage.removeItem('LongQuotes')
      
      }
      // this.saveChanges() ;
      // this.router.navigate(['/home-dashboard/templates/saved-templates'])
    },
      (error) => {
        this.toast.error('please try again');
      })
  }


  showOnPlan() {
    this.planShow == true
  }
  addQuote() {

    this.router.navigate(['/home-dashboard/motivational-quote/quote-dashboard'])
  }

  openTemp(val: any) {
    // if (this.showPro = !this.showPro) {
    //   this.templatData = false;
    // }
    this.templatData = false
    this.templateShow = val

  }



  onClick() {

  }

  saveChanges() {
    console.log(this.TemplateId, "template id");
    
    let log = {
      templateDesign: {
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
    }
    this.api.templateCustomize(this.TemplateId, log).subscribe((res: any) => {
      console.log(res);
      this.toast.success('Template  Created Successfully');

      // this.getDesign();
    },
      (error) => {
        this.toast.error('please try again');
      })
  }












  onSelectImage(event: any) {
    this.Submitted = true;
    this.img=false;
    let files = event.target.files;
    this.fileImageName = event.target.files[0].name;
    if (files) {
      this.uploadImage = files[0]
      this.subImageSubmit()
      for (let file of files) {
        if (!file.type.includes('image')) {
          this.isImage = false;
          return;
        }
        this.fileData.push(file);
      }
    }
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.url = event.target?.result;
      };
    }
  }
  subImageSubmit() {
    this.Submitted = true
    let formData = new FormData();
    formData.append('attachment', this.uploadImage);
    this.api.addAttachments(formData).subscribe(
      (res: any) => {
        console.log(res);
        this.hideModel()
        this.imageData1 = res;
        this.imageData2 = this.imageData1[0].key;
        console.log(this.imageData2, 'xxxxxx');
        if(this.useraddress && this.desig && this.username && this.Email && this.compName && this.compWebsite && this.imageData2){
          this.progress=50;
        } else if (this.imageData2) {
          this.progress = 25
        }
        console.log(this.imageData1[0].key, "image key ")
        this.toast.success('Image upload Successfully');
      },
      (err: any) => {

        console.log(err);
        this.toast.error('File size is too big ');
      }
    )

  }

  // getDesign() {
  //   this.api.getdesign().subscribe((res: any) => {
  //     let data = res?.result;
  //     let result = data[data?.length - 1]
  //     let templateResult = result?.templateDesign;
  //     console.log(templateResult, 'ada');
  //     this.firstNameColor = templateResult?.firstNameColor,
  //       this.lastNameColor = templateResult?.lastNameColor,
  //       this.designationColor = templateResult?.designationColor,
  //       this.contactDetailColor = templateResult?.contactDetailColor,
  //       this.fontFamilyNew = templateResult?.fontFamily,
  //       this.templateFontSize = templateResult?.fontSize,
  //       this.lineHeight = templateResult?.lineHeight,
  //       this.itemFontSize = templateResult?.fontSizeItem,
  //       this.fontSizeName = templateResult?.nameFontSize,
  //       this.nameAlign = templateResult?.nameAlign,
  //       this.borderRadius = templateResult?.borderRadius


  //   })
  // }

  setimageSignature() {
    console.log(this.tableData.nativeElement);
    this.templateRef = this.tableData.nativeElement
    console.log(this.templateRef, "templatesssssssss")
  }

  changeDesignation() {
    if(this.imageData2) {
      if(this.useraddress && this.desig && this.username && this.Email && this.compName && this.compWebsite ){
        this.progress=50
      } 
      else {
        this.progress=25
       }
    } else {
      if(this.useraddress && this.desig && this.username && this.Email && this.compName && this.compWebsite ){
        this.progress=25
      } 
      else {
        this.progress=0
       }
    }
    
  }

  changeSocialLink() {
    console.log(this.imageData2 , this.useraddress , this.desig , this.username , this.Email , this.compName , this.compWebsite , this.faceB , this.insta , this.Linkedin , this.uTube , this.Twitter);
    
    if(this.imageData2 && this.useraddress && this.desig && this.username && this.Email && this.compName && this.compWebsite ) {
      if(this.faceB && this.insta && this.Linkedin && this.uTube && this.Twitter) {
        this.progress = 75
      } else {
        this.progress = 50
      }
     } else if(this.useraddress && this.desig && this.username && this.Email && this.compName && this.compWebsite){
      if(this.faceB && this.insta && this.Linkedin && this.uTube && this.Twitter) {
        this.progress = 50
      } else {
        this.progress = 25
      }
     } else if(this.imageData2) {
      if(this.faceB && this.insta && this.Linkedin && this.uTube && this.Twitter) {
        this.progress = 50
      } else {
        this.progress = 25
      }
     }
     

    
  }
  changeQuote(){
    if(this.imageData2 && this.useraddress && this.desig && this.username && this.Email && this.compName && this.compWebsite&&this.faceB && this.insta && this.Linkedin && this.uTube && this.Twitter ) {
      if(this.quotevar) {

        this.progress = 100
      } else {
        this.progress = 75
      }
      // else if(this.imageData2 && this.useraddress && this.desig && this.username && this.Email && this.compName && this.compWebsite ){
        
      // }

     }
     else if(this.imageData2 && this.useraddress && this.desig && this.username && this.Email && this.compName && this.compWebsite ) {
      if(this.faceB && this.insta && this.Linkedin && this.uTube && this.Twitter) {
        this.progress = 75
      } else {
        this.progress = 50
      }
     }
      else if(this.useraddress && this.desig && this.username && this.Email && this.compName && this.compWebsite){
      if(this.faceB && this.insta && this.Linkedin && this.uTube && this.Twitter) {
        this.progress = 50
      } else {
        this.progress = 25
      }
     } else if(this.imageData2) {
      if(this.faceB && this.insta && this.Linkedin && this.uTube && this.Twitter) {
        this.progress = 50
      } else {
        this.progress = 25
      }
     }
  }

  hideModel() {
    this.closeModal.nativeElement.click();      
}
 
}
