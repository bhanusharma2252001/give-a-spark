import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef, ViewEncapsulation, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { Clipboard } from '@angular/cdk/clipboard';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatDialog} from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-save',
  templateUrl: './edit-save.component.html',
  styleUrls: ['./edit-save.component.scss']
})
export class EditSaveComponent implements OnInit {

  details: any;
  username: any;
  Email: any;
  compName: any;
  compWebsite: any;
  number: any;
  designFontSize:any=3
  designLineHeigh:any=3
img:boolean=true;
@ViewChild('secondDialog', { static: true }) secondDialog!: TemplateRef<any>;
  @ViewChild('tableData',{static:false})tableData!:ElementRef
  editTemplateForm: FormGroup
  planShow = false;
  public toggle: boolean = false;
  showPro: boolean = false;
  templateShow: any;
  QuoteId: any;
  LongQuote: any;
  ShowOneQuote: boolean = true;
  freeTempId:any;
TemplateId:any

  url: string | ArrayBuffer | null | undefined;
  Submitted = false
  fileData = [] as any;
  fileImageName: any = '';
  isImage = true;
  uploadImage: any;
  imageData1: any;
  imageData2: any;
  templateRef:any
  isLoading :boolean = false;
  isLoading1 :boolean = false;
  isLoading2 :boolean = false;
  isLoading3 :boolean = false;
  public rgbaText: string = 'rgba(165, 26, 214, 0.2)';


  public selectedColor: string = 'firstNameColor';

  public color1: string = '#2889e9';



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
  public contactDetailColor: string = '#000000';
  public lastNameColor: string = '#000000';
  public designationColor: string = '#000000';
  public firstNameColor: string = '#000000';
  fontFamilyNew: any = 'Poppins, sans-serif'
  lineHeight: any = 0.5
  tempDetails: any;
  itemFontSize: any = 13
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
  // logo = 'https://giveaspark.s3.us-west-1.amazonaws.com/Soical_icons/flyer-logo.png'

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
  // chnage end

copytext:any;
  // logo="assets/images/logo-1.png"
  templateData: any;
 

  // change 
  templateId:any
  code: any;
  proList: any;
  proplus: any;
  proTemplate:boolean = false;
  freeTemplate:boolean = false;
  proPlusTemplate:boolean = false;
  emailData: any;
  sign: any;
  title: any;
  planDetail: any;

  @ViewChild('closeModal') private closeModal!: ElementRef;

  // @ViewChild('content') content: any;
  userProfile: any;
  logo: any;
  std: any;

// -------------Modal---------

videoUrl: any;
  videoid: any;
  youId: any;
  thumbnail: any;
  youtubeTitle: any;
  youUrl: any;
  youImage: any;

  icon: any;
  url1: any;
  profile1: any;
  imageProfile1: any;
  imageProfile2: any;
  url2: string | ArrayBuffer | null | undefined;
  profile2: any;
  imageProfile3: any;
  url3: string | ArrayBuffer | null | undefined;
  profile3: any;
  imageProfile4: any;
  url4: string | ArrayBuffer | null | undefined;
  profile4: any;
  galleryTitle: any;
  galleryLink: any;
  imageRadious: any = 0;
  galleryImage1: any;
  galleryImage2: any;
  galleryImage3: any;
  galleryImage4: any;
  imageSpace: any = 5;
  eventdata: any;
  eventAlignment: any = ''
  eventSize: any = 10
  iconSize: any = 30

  appButtonSize: any = 10
  public appButtonColor: string = '#000000';
  appbuttonAlign: any = ''



 public scheduleBg:string='#0009a3'
scheduleSize:any=10
scheduleShape:any=0


content!: string;
  newArray = [
    { 'id': 1, 'content': "A" },
    { 'id': 2, 'content': "B" },
    { 'id': 3, 'content': "C" },

  ]
 
  textareaValue: any;
  disclaimerSize: any = 10;
  eventIcon: any;
  eventTitle: any;
  eventName: any;
  eventLink: any;
  footerText!: string;
  footerValue: any;
  greenIcon: any;
  bannerImage: any;
  bannerUrl: string | ArrayBuffer | null | undefined;
  banner: any;
  bannerLink: any;

 
  appName: any;
  appleAppLink: any;
  googleAppLink: any;
  customText: any;
  customUrl: any;

  scheduleLink: any;
  scheduleIcon: any;
  scheduleData: any;

  footerSize: any = 12
 
  footerAlignment: any = ''
  disclaimerAlignment: any = ''
  public youtubeColor: string = '#000000';
  youtubeFont: any = 8
  youtubeAlignment: any = ''
  imageSize: any = 61
  public footerColor: string = '#000000';
  public disclaimerColor: string = '#000000';
  public eventColor: string = '#000000';
  bannerAlign: any = ''
  customButtonShape:any = 0
  customButtonSize:any=10
  customAlign: any='';
  bannerSize: any = 100

 public buttonTextColor:string ='#fff'
  public customButtonBg:string ='#0d6efd'
  showInputBox: boolean = false;
  selectedOption: string = 'option1';
  inputValue: string = '';
  showIcon!: boolean;
  youtubeForm: FormGroup;
  EventForm: FormGroup;
  footerForm: FormGroup;
  customGalleryForm: FormGroup;
  disclaimerForm: FormGroup;
  bannerForm: FormGroup;
  downloadAppForm: FormGroup;
  customButtonForm:FormGroup;
  scheduleForm:FormGroup;
  disclaimerValue:any=2
  footerSizeVal: number=2;
  imageLink: any;
  imageSpaceVal: number=2;
  imgSizeVal: number=1;
  youtubeUrl: any;
  youtubeVal: number=3;
  bannerSizeVal: number=3;
  eventFontVal: number=2;
  appSizeFont: number=1;
  bindData: any;
  urlPattern = /^((http[s]?|ftp):\/\/)?(www\.)?[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(\/\S*)?$/;
  constructor(private api: SparkService, myElement: ElementRef,private route: ActivatedRoute,private dialog: MatDialog,private location: Location,
    private fb: FormBuilder, private toast: ToastrService,private spinner:NgxSpinnerService, private router: Router, private clipboard: Clipboard) {
      const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.editTemplateForm = this.fb.group({
      yourName: [''],
      designation: [''],
      email: ['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phoneNo: ['',[Validators.pattern('[0-9 ]+')]],
      companyWebsite: [''],
      address: [''],
      fbProfile: ['', [ Validators.pattern(reg)]],
      instagramProfile: ['', [ Validators.pattern(reg)]],
      linkedInProfile: ['', [ Validators.pattern(reg)]],
      youtubeChannel: ['', [ Validators.pattern(reg)]],
      quotesId: [''],
      quotes: [''],
      profileImage: [''],
      companyPhone: ['',[Validators.pattern('[0-9 ]+')]],
      twitterProfile:  ['', [ Validators.pattern(reg)]],
      signatureName:['']
    })
    

  
    this.youtubeForm = this.fb.group({
      youtubeUrl: ['', [Validators.required, Validators.pattern(
        /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/
      )]],
      youtubeTitle: ['', Validators.required]
    })

    this.EventForm = this.fb.group({
      eventTitle: ['',Validators.required],
      eventName: ['',Validators.required],
      eventLink: ['', [Validators.required,Validators.pattern(/^https:\/\/[\w.-]+(\.[\w]{2,})+[\w\-._~:/?#[\]@!$&'()*+,;=%]+$/)]]
    })

    this.footerForm = this.fb.group({
      greenFooter: ['']
    })
    this.customGalleryForm = this.fb.group({
      customProfile1: [''],
      customProfile2: [''],
      customProfile3: [''],
      customProfile4: [''],
      imageTitle: [''],
      imageLink: ['', [Validators.pattern(/^https:\/\/[\w.-]+(\.[\w]{2,})+[\w\-._~:/?#[\]@!$&'()*+,;=%]+$/)]]
    })

    this.disclaimerForm = this.fb.group({
      disclaimer: ['']
    })

    this.bannerForm = this.fb.group({
      bannerLink: ['', [Validators.pattern(/^https:\/\/[\w.-]+(\.[\w]{2,})+[\w\-._~:/?#[\]@!$&'()*+,;=%]+$/)]]
    })
    this.downloadAppForm = this.fb.group({
      appName: [''],
      appleAppLink: ['', [Validators.pattern(/^https:\/\/[\w.-]+(\.[\w]{2,})+[\w\-._~:/?#[\]@!$&'()*+,;=%]+$/)]],
      googleAppLink: ['', [Validators.pattern(/^https:\/\/[\w.-]+(\.[\w]{2,})+[\w\-._~:/?#[\]@!$&'()*+,;=%]+$/)]]
    })
    this.customButtonForm=this.fb.group({
      customButtonText: ['',Validators.required],
      customUrl: ['', [Validators.required,Validators.pattern(/^https:\/\/[\w.-]+(\.[\w]{2,})+[\w\-._~:/?#[\]@!$&'()*+,;=%]+$/)]],
    })

this.scheduleForm=this.fb.group({
  scheduleLink: ['', [Validators.required,Validators.pattern(/^https:\/\/[\w.-]+(\.[\w]{2,})+[\w\-._~:/?#[\]@!$&'()*+,;=%]+$/)]],
  scheduleText: ['',Validators.required], 
})

    this.getTemplateId()
  }




  

  ngOnInit(): void {
  this.gettemplatebyUser();
  this.spinner.show();

  setTimeout(() => {
    this.spinner.hide();
  }, 1000);
  // this. getProTemplate();
  }
  hideModel() {
    this.closeModal.nativeElement.click();      
}
 
 
  
selectFeature(val:any){
  if((val == 'design' || val == 'social' || val == 'apps') && this.planDetail == 'Plan A') {

  // let a:any=document.getElementById("design").style.width = "800px";
  this.dialog.open(this.secondDialog);
  }
  if(( val == 'apps' || val == 'social') && this.planDetail == 'Plan B') {

    // let a:any=document.getElementById("design").style.width = "800px";
    this.dialog.open(this.secondDialog);
    }
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


let b :any= document.getElementById("btn")
b.value= "Copied"



// document.getElementById("btn").value="Copied";
}


setonGmail(){



  


// document.getElementById("btn").value="Copied";

  this.templateRef = this.tableData.nativeElement
  console.log(this.templateRef, "templatesssssssss")
 


  
this.api.gmail(this.templateRef.outerHTML
  ).subscribe((res:any)=>{
  console.log(res, 'setgmail');
  
})

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
    if(this.planDetail != 'Plan A') {
      this.nameAlign = val;
      } else {
        alert('You shoud buy pro plan')
      }  }
  //new change end

  getTemplateId() {
    this.route.queryParamMap.subscribe((params: any) => {
     let templateId = params.params['templateId'] || 0;
     this.templateId = Number(templateId)
     if (this.templateId == 0) {
       this.router.navigate(['home-dashboard/templates/saved-templates'])
     } else {
       this. getTemplate();

     }
   });
 }

 getSignature(){
  this.sign = this.editTemplateForm.value.signatureName;
  console.log(this.sign, "signature name");
  
}
  // onSubmit(data: any) { 
  //   let body:any={}
  //  body = {signatureName:this.sign,
  //     yourName: data.yourName,
  //     designation: data.designation,
  //     email: data.email,
  //     phoneNo: data.phoneNo,
  //     companyWebsite: data.companyWebsite,
  //     address: [
  
  //       {
  //         addressline: data.address,
  //         addressline2: data.address,
  //         landmark: data.address,
  //         city: data.address,
  //         state: data.address,
  //         pincode: '',
  //         country: data.address,
  //       }
  //     ],
  //     templateDesign: {
  //       firstNameColor: this.firstNameColor,
  //       lastNameColor: this.lastNameColor,
  //       designationColor: this.designationColor,
  //       contactDetailColor: this.contactDetailColor,
  //       fontFamily: this.fontFamilyNew,
  //       fontSize: this.templateFontSize,
  //       lineHeight: this.lineHeight,
  //       fontSizeItem: this.itemFontSize,
  //       nameFontSize: this.fontSizeName,
  //       nameAlign: this.nameAlign,
  //       borderRadius: this.borderRadius

  //     },
  //     quotesId:data.quotesId,
  //     quotes: this.quotevar,  
  //     companyPhone: data.companyPhone,
  //     profileImage:this.imageData2?this.imageData2:this.userProfile,
  //     fbProfile: data.fbProfile,
  //     twitterProfile: data?.twitterProfile,
  //     instagramProfile: data.instagramProfile,
  //     linkedInProfile: data.linkedInProfile,
  //     youtubeChannel: data.youtubeChannel,
  
  //   }
    

  //   console.log(body,'dssfcsfvcs');
    

  //   this.api.updateCreateTemplate(this.templateId,body).subscribe((res: any) => {
  //     console.log(res);
  //     this.TemplateId=res?.data?._id      
  //     this.toast.success('Template  Updated Successfully');
  //     if (localStorage.getItem('templatequoteId')) {
  //       this.QuoteId = localStorage.getItem('templatequoteId')
  //     }
  //     if (localStorage.getItem('templateLongQuotes')) {
  //       this.LongQuote = localStorage.getItem('templateLongQuotes')
  //       this.quotevar=this.LongQuote
  //     }
  //     // this.saveChanges() ;
  //     this.getTemplate();
  //     this.router.navigate(['/home-dashboard/templates/saved-templates'])
  //   },
  //     (error) => {
  //       this.toast.error('please try again');
  //     })
  // }


  addQuote() {
    this.router.navigate(['/home-dashboard/motivational-quote/quote-dashboard'],{ queryParams: { templatesId: this.templateId } })
  }





  onClick() {

  }

 












  onSelectImage(event: any) {
    this.Submitted = true;
    this.img=false;
    let files = event.target.files;
    this.fileImageName = event.target.files[0].name;
    let fileSize= event.target.files[0].size
    if (files) {
      if (fileSize> 1 * 1024 * 1024) {


        this.toast.error('File size exceeds 1MB limit.');
        return;}
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
     
        this.imageData1 = res;
        this.imageData2 = this.imageData1[0].key;
       
        this.toast.success('Image upload Successfully');
      },
      (err: any) => {

        this.toast.error('File size is too big ');
      }
    )

  }



  
 getTemplate(){
  this.api.getsignatureDetails().subscribe((res:any)=>{
    this.tempDetails=res?.result;
    this.planDetail=res?.plan
    this.std=res?.userData[0]?.stdCode
  
  
    console.log( this.tempDetails, 'free Templates');
    this.tempDetails.filter((item:any)=>{
      if(item?._id == this.templateId) {
     
        this.getBindData(item)
        this.getTemplateDesign(item?.templateDesign)
      }
      // if(item?.templateId == this.templateId) {
      //   this.getBindData(item)
      // }
    })
    // this.proList.filter((item:any)=>{
    //   if(item?._id == this.templateId) {
    //     this.proTemplate = true
    //     this.getBindData(item)
    //     this.getTemplateDesign(item?.templateDesign)
    //   }
      
      
    // })
    // this.proplus.filter((item:any)=>{
    //   if(item?._id == this.templateId) {
    //     this.proPlusTemplate=true
    //     this.getBindData(item)
    //     this.getTemplateDesign(item?.templateDesign)
    //   }
      
      
    // })
  })
 }

 getTemplateDesign(data:any) {
  this.firstNameColor = data?.firstNameColor?data?.firstNameColor:this.firstNameColor
  this.lastNameColor = data?.lastNameColor?data?.lastNameColor:this.lastNameColor
  this.designationColor = data?.designationColor?data?.designationColor:this.designationColor
  this.contactDetailColor = data?.contactDetailColor?data?.contactDetailColor:this.contactDetailColor
  this.fontFamilyNew = data?.fontFamily?data?.fontFamily:this.fontFamilyNew
  this.templateFontSize = data?.fontSize?data?.fontSize:this.templateFontSize 
  this.lineHeight = data?.lineHeight?data?.lineHeight:this.lineHeight
  this.itemFontSize = data?.fontSizeItem?data?.fontSizeItem:this.itemFontSize
  this.fontSizeName = data?.nameFontSize?data?.nameFontSize:this.fontSizeName
  this.nameAlign = data?.nameAlign?data?.nameAlign:this.nameAlign
  this.borderRadius = data?.borderRadius?data?.borderRadius:this.borderRadius
  
  // for desgin tab size 
  if (this.templateFontSize == 33) {
    this.designFontSize = 4
  } else if (this.templateFontSize == 36) {
    this.designFontSize = 5
  } else if (this.templateFontSize == 32) {
    this.designFontSize = 3
  } else if (this.templateFontSize == 31) {
    this.designFontSize = 2
  } else {
    this.designFontSize = 1
  }

  // for design tab line height
  if (this.lineHeight == 2.4) {
    this.designLineHeigh = 4
  } else if (this.lineHeight == 3.4) {
    this.designLineHeigh = 5
  } else if (this.lineHeight == 1.4) {
    this.designLineHeigh= 3
  } else if (this.lineHeight == 1.1) {
    this.designLineHeigh = 2
  } else {
    this.designLineHeigh = 1
  }

   }

 getBindData(data:any) {
  console.log(data,'adadcw');
  this.bindData = data;
  this.logo=data?.logo
  this.username = data?.yourName
  this.title=data?.signatureName
      this.Email = data?.email
      this.useraddress = data?.address[0]?.city
      this.compName = data?.companyName
      this.compWebsite = data?.companyWebsite
      this.number = data?.phoneNo
      this.compPhone = data?.companyPhone
      this.desig = data?.designation
      this.addr = data?.address
      this.quotevar=data?.quotes
      this.insta = data?.instagramProfile
      this.uTube = data?.youtubeChannel
this.userProfile=data?.profileImage
      this.Linkedin = data?.linkedInProfile
      this.Twitter = data?.twitterProfile
      this.faceB = data?.fbProfile
      this.QuoteId = data?.quotesId
      if (localStorage.getItem('templatequoteId')) {
        this.QuoteId = localStorage.getItem('templatequoteId')
  
      }
  
      if (localStorage.getItem('templateLongQuotes')) {
        this.LongQuote = localStorage.getItem('templateLongQuotes')
        // this.quotevar=this.LongQuote
  
      }

      this.getScheduleData()
      this.getDisclamierData()
      this.getFooterData()
      this.getGalleryData()
      this.getYouTubeData()
      this.getCustomData()
      this.getBannerData()
      this.getSalesEventData()
      this.getDownloadAppData()
 }

 // schedule fn
 getScheduleData() {
  // schedule 
  let data = this.bindData
  this.inputValue = data?.scheduleText
  this.scheduleSize = Number(data?.templateDesign?.scheduleSize)
  this.scheduleBg = data?.templateDesign?.scheduleBg
  this.scheduleIcon = data?.scheduleIcon
  this.scheduleShape = data?.templateDesign?.scheduleShape
  this.scheduleLink = data?.scheduleLink
 }

 //get disclaimer
 getDisclamierData() {
  let data = this.bindData
  this.content = data?.disclaimer
  this.disclaimerColor = data?.templateDesign?.disclaimerColor
  this.disclaimerSize = Number(data?.templateDesign?.disclaimerSize)
  this.disclaimerValue = (this.disclaimerSize == 14)?4:(this.disclaimerSize == 12)?3:(this.disclaimerSize == 10) ? 2 : 1
  this.disclaimerAlignment = data?.templateDesign?.disclaimerAlignment
 }

 getFooterData() {
  let data = this.bindData
  this.footerText = data?.greenFooter
  this.greenIcon=data?.greenIcon
  this.footerColor = data?.templateDesign?.footerColor
  this.footerSize = Number(data?.templateDesign?.footerSize)
  this.footerSizeVal = (this.footerSize == 12)?3:(this.footerSize == 10) ? 2 : 1
  this.footerAlignment = data?.templateDesign?.footerAlignment
 }
  
 getGalleryData() {
  let data = this.bindData
  this.url1 = data?.customProfile1;
  this.url2 = data?.customProfile2
  this.url3 = data?.customProfile3
  this.url4 = data?.customProfile4
  this.galleryTitle = data?.imageTitle;
  this.imageLink = data?.imageLink
  this.imageRadious = data?.templateDesign?.imageRadious
  this.imageSpace = Number(data?.templateDesign?.imageSpace)
  this.imageSpaceVal = (this.imageSpace == 13)?5:(this.imageSpace == 11)?4:(this.imageSpace == 10) ? 3 : (this.imageSpace == 8)? 2 : 1
  this.imageSize = Number(data?.templateDesign?.imageSize)
  this.imgSizeVal = (this.imageSize == 150)?5:(this.imageSize == 125)?4:(this.imageSize == 80) ? 3 : (this.imageSize == 61)? 2 : 1
  
 }

 getYouTubeData() {
  let data = this.bindData
  this.thumbnail=data?.thumbnailImage
  this.youtubeUrl = data?.youtubeUrl
  if(this.youtubeUrl) {
    this.getUrl()
  }
  this.youtubeTitle = data?.youtubeTitle
  this.youtubeColor = data?.templateDesign?.youtubeColor
  this.youtubeAlignment = data?.templateDesign?.youtubeAlignment
  this.youtubeFont= Number(data?.templateDesign?.youtubeFont)
  this.youtubeVal = (this.youtubeFont == 12)?5:(this.youtubeFont == 9)?4:(this.youtubeFont == 8) ? 3 : (this.youtubeFont == 7)? 2 : 1
  
 }
 cancelYoutube(){
  window.location.reload(); 
}
 getCustomData() {
  let data = this.bindData
  this.customText = data?.customButtonText
  this.customUrl = data?.customUrl
  this.customButtonShape = data?.templateDesign?.customButtonShape
  this.customButtonBg = data?.templateDesign?.customButtonBg
  this.buttonTextColor = data?.templateDesign?.buttonTextColor
  this.customButtonSize = data?.templateDesign?.customButtonSize
  this.customAlign = data?.templateDesign?.customButtonAlign

 }

 getBannerData() {
  let data = this.bindData
  this.bannerUrl = data?.bannerImage
  this.bannerLink = data?.bannerLink
  this.bannerAlign = data?.templateDesign?.bannerAlign
  this.bannerSize = Number(data?.templateDesign?.bannerSize)
  this.bannerSizeVal = (this.bannerSize == 100)?3:(this.bannerSize == 75)?2:(this.bannerSize == 50) ? 1 : 300

 }

 getSalesEventData() {
  let data = this.bindData;
  this.eventTitle = data?.eventTitle
  this.eventName =  data?.eventName
  this.eventLink =  data?.eventLink
  this.eventIcon = data?.eventIcon
  this.eventColor = data?.templateDesign?.eventColor
  this.eventSize = Number(data?.templateDesign?.eventSize)
  this.eventFontVal = (this.eventSize == 14)?4:(this.eventSize == 13)?3:(this.eventSize == 12) ? 2 : 1
  this.eventAlignment = data?.templateDesign?.eventAlignment
  this.iconSize = data?.templateDesign?.iconSize
 }

 getDownloadAppData() {
  let data = this.bindData
  this.appName = data?.appName
  this.appleAppLink = data?.appleAppLink
  this.googleAppLink = data?.googleAppLink
  this.appButtonColor = data?.templateDesign.appButtonColor
  this.appbuttonAlign = data?.templateDesign?.appbuttonAlign
  this.appButtonSize = Number(data?.templateDesign?.appButtonSize)
  this.appSizeFont = (this.appButtonSize == 16)?4:(this.appButtonSize == 14)?3:(this.appButtonSize == 14) ? 2 : (this.appButtonSize == 12)?1 : 0

 }

//  i'm  using this only for qrcode
 gettemplatebyUser(){
  this.api.getbasicDetaiofUseer().subscribe((res: any) => {
 

this.code=res.result[0]?.QrCode;
console.log(this.code);


  })
 }

 ngOnDestroy() {
  if(localStorage.getItem('templateLongQuotes')) {
    localStorage.removeItem('templatequoteId');
  }
  if(localStorage.getItem('templateLongQuotes')) {
    localStorage.removeItem('templateLongQuotes')
  }
 }

  // Pro Templates

  changeSocialLink(evt:any) {
    if(this.planDetail != 'Plan A') {

    } else {
      this.faceB=null
      this.insta=null
      this.Linkedin=null
      this.uTube=null
      this.Twitter = null
      evt.preventDefault()
     
    }
  }

  chooseQuotes(evt:any) {
    if(evt) {
      if (localStorage.getItem('templatequoteId')) {
        this.QuoteId = localStorage.getItem('templatequoteId')
      }
      if (localStorage.getItem('templateLongQuotes')) {
        this.LongQuote = localStorage.getItem('templateLongQuotes')
  
      }
    }
    
  }







    //  --------- YOU TUBE PLAYLIST-----
  
  
  
    titleAlign(val: any) {
      this.youtubeAlignment = val;
    } 
  youtubeIcon(val: any) {
    // if (this.showPro = !this.showPro) {
    //   this.templatData = false;
    // }
    this.icon = val

    this.showIcon = !this.showIcon;
    console.log(this.showIcon);

  }


  changeYoutubeSize(evt: any) {
    let currnetSize = Number(evt.target.value);
    if (currnetSize == 4) {
      this.youtubeFont = 9
    } else if (currnetSize == 5) {
      this.youtubeFont = 12
    } else if (currnetSize == 3) {
      this.youtubeFont = 8
    } else if (currnetSize == 2) {
      this.youtubeFont = 7
    } else {
      this.youtubeFont = 6
    }
  }
    getUrl() {


      this.videoUrl = this.youtubeForm.value.youtubeUrl?this.youtubeForm.value.youtubeUrl:this.youtubeUrl;
  
      console.log(this.videoUrl, "videoUrl name");
  
      this.videoid = this.videoUrl.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
      if (this.videoid != null) {
        console.log("video id = ", this.videoid[1]);
        this.youId = this.videoid[1];
        console.log(this.youId, "youtube ID");
  
  
      } else {
        console.log("The youtube url is not valid.");
      }
      this.thumbnail = "http://img.youtube.com/vi/" + this.youId + "/" + "mqdefault" + ".jpg";
      console.log(this.thumbnail,'thtiroshtfoi');
      
  
  
    }
  
  
  
    youTubeDetails() {
      this.youtubeTitle = this.youtubeForm.value.youtubeTitle;
      this.getUrl();
      console.log(this.youtubeTitle)
      this.toast.show('Please click On Create Signature to Save ')
    }

  // ---------CUSTOM  IMAGE GALLLERY-------


  chaneImageSize(evt: any) {
    let currnetSize = Number(evt.target.value);
    if (currnetSize == 4) {

      this.imageSize = 125

    } else if (currnetSize == 5) {

      this.imageSize = 150

    } else if (currnetSize == 3) {


      this.imageSize = 80
    } else if (currnetSize == 2) {


      this.imageSize = 61
    } else {


      this.imageSize = 50
    }
  }

  changeImageRadious(val: any) {
    this.imageRadious = val
  }
  changeImageSpace(evt: any) {
    let currnetSize = Number(evt.target.value);
    if (currnetSize == 4) {

      this.imageSpace = 11

    } else if (currnetSize == 5) {

      this.imageSpace = 13

    } else if (currnetSize == 3) {


      this.imageSpace = 10
    } else if (currnetSize == 2) {


      this.imageSpace = 8
    } else {


      this.imageSpace = 6
    }
  }

  // ------------ CUSTOM PROFILE-1-------------

  onSelectFile1(event: any) {
    this.Submitted = true;
    let files = event.target.files;
    this.fileImageName = event.target.files[0].name;
    let fileSize= event.target.files[0].size
    this.isLoading = true;
    if (files) {
      if (fileSize> 1 * 1024 * 1024) {

        this.isLoading = false;
        this.toast.error('File size exceeds 1MB limit.');
        return;}
      this.imageProfile1 = files[0]
      this.File1ubmit()
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
        this.url1 = event.target?.result;
        console.log(this.url,'admlasdal');
        
      };
    }

  }

  File1ubmit() {
    this.Submitted = true
    let formData = new FormData();
    formData.append('attachment', this.imageProfile1);
    // this.spinner.show()
    this.api.addAttachments(formData).subscribe(
      (res: any) => {
        this.isLoading = false;
        // this.imageData1 = res;
     
        this.profile1 = res[0]?.key;
        this.url1 = this.profile1
        console.log(this.profile1, 'image111111');

        // console.log(this.imageData1[0].key, "image key ")

      },
      (err: any) => {
        this.isLoading = false;
        console.log(err);

      }
    )

  }



  // -------------- CUSTOM PROFILE -2 -----------
  onSelectFile2(event: any) {
    this.Submitted = true;
    let files = event.target.files;
    this.fileImageName = event.target.files[0].name;
    let fileSize= event.target.files[0].size
    this.isLoading1 = true;
    if (files) {
      if (fileSize> 1 * 1024 * 1024) {
        this.isLoading1 = false;

        this.toast.error('File size exceeds 1MB limit.');
        return;}
      this.imageProfile2 = files[0]
      this.File1ubmit2()
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
        this.url2 = event.target?.result;
      };
    }

  }

  File1ubmit2() {
    this.Submitted = true
    let formData = new FormData();
    formData.append('attachment', this.imageProfile2);
    // this.spinner.show()
    this.api.addAttachments(formData).subscribe(
      (res: any) => {

        this.isLoading1 = false;
        this.profile2 = res[0]?.key;
        this.url2 = this.profile2
        console.log(this.profile1, 'image111111');

        // console.log(this.imageData1[0].key, "image key ")

      },
      (err: any) => {
        this.isLoading1 = false;
        console.log(err);

      }
    )

  }


  // ---------------CUSTOM PROFILE-3------------
  onSelectFile3(event: any) {
    this.Submitted = true;
    let files = event.target.files;
    this.fileImageName = event.target.files[0].name;
    let fileSize= event.target.files[0].size
    this.isLoading2 = true;
    if (files) {
      if (fileSize> 1 * 1024 * 1024) {
        this.isLoading2 = false;

        this.toast.error('File size exceeds 1MB limit.');
        return;}
      this.imageProfile3 = files[0]
      this.File1ubmit3()
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
        this.url3 = event.target?.result;
      };
    }

  }

  File1ubmit3() {
    this.Submitted = true
    let formData = new FormData();
    formData.append('attachment', this.imageProfile3);
    // this.spinner.show()
    this.api.addAttachments(formData).subscribe(
      (res: any) => {
        this.isLoading2 = false;
        // this.imageData1 = res;
        // this.imageData2 = this.imageData1[0].key;
        this.profile3 = res[0]?.key;
        this.url3 = this.profile3
        console.log(this.profile3, 'image111111');

        // console.log(this.imageData1[0].key, "image key ")

      },
      (err: any) => {
        this.isLoading2 = false;
        console.log(err);

      }
    )

  }


  // ---------------CUSTOM PROFILE-4------------
  onSelectFile4(event: any) {
    this.Submitted = true;
    let files = event.target.files;
    this.fileImageName = event.target.files[0].name;
    let fileSize= event.target.files[0].size
    this.isLoading3 = true;
    if (files) {
      if (fileSize> 1 * 1024 * 1024) {


        this.isLoading3 = false;
        this.toast.error('File size exceeds 1MB limit.');
        return;}
      this.imageProfile4 = files[0]
      this.File1ubmit4()
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
        this.url4 = event.target?.result;
      };
    }

  }

  File1ubmit4() {
    this.Submitted = true
    let formData = new FormData();
    formData.append('attachment', this.imageProfile4);
    // this.spinner.show()
    this.api.addAttachments(formData).subscribe(
      (res: any) => {


        this.isLoading3 = false;
        this.profile4 = res[0]?.key;
        this.url4 = this.profile4
        console.log(this.profile4, 'image111111');

        // console.log(this.imageData1[0].key, "image key ")

      },
      (err: any) => {

        this.isLoading3 = false;
        console.log(err);

      }
    )

  }


  imageDetails(data: any) {
    this.galleryTitle = data.imageTitle
    this.galleryLink = data.imageLink
    console.log(this.galleryLink, 'link of image')
    console.log(this.galleryTitle, 'title')
    this.toast.show('Please click On Create Signature to Save after you done editing ')
  }


  // -------- DI S CLAIMER  FONT------
  
  getEvent(event: any, data: any) {
    this.eventdata = data;
    if (this.eventdata == 1) {
      this.textareaValue = ''
      this.content = "IMPORTANT: The contents of this email and any attachments are confidential. They are intended for the named recipient(s) only. If you have received this email by mistake, please notify the sender immediately and do not disclose the contents to anyone or make copies thereof."
    }
    else if (this.eventdata == 2) {


      this.content = "Warning: Although taking reasonable precautions to ensure no viruses or malicious softwares are present in this email, the sender cannot accept responsibility for any loss or damage arising from the use of this email or attachments."
    }
    else if (this.eventdata == 3) {

      this.content = "No employee or agent is authorized to conclude any binding agreement on behalf of the company with another party by email without specific confirmation."
    }
    else if (this.eventdata == 4) {

      this.content = "All views and opinions expressed in this email message are the personal opinions of the author and do not represent those of the company. No liability can be held for any damages, however caused, to any recipients of this message."
    }
    else if (this.eventdata == 5) {

      this.content = "If you received this email in error, please notify us immediately by sending an e-mail or by calling."
    }
    else if((this.eventdata == 6)){
      this.content = ''
    }

    console.log(this.eventdata, this.content, "toggle data");


  }

  checkCustomDisclamir(content:any) :any{
    if (this.content == "IMPORTANT: The contents of this email and any attachments are confidential. They are intended for the named recipient(s) only. If you have received this email by mistake, please notify the sender immediately and do not disclose the contents to anyone or make copies thereof." || this.content == "Warning: Although taking reasonable precautions to ensure no viruses or malicious softwares are present in this email, the sender cannot accept responsibility for any loss or damage arising from the use of this email or attachments." || this.content == "No employee or agent is authorized to conclude any binding agreement on behalf of the company with another party by email without specific confirmation." || this.content == "All views and opinions expressed in this email message are the personal opinions of the author and do not represent those of the company. No liability can be held for any damages, however caused, to any recipients of this message." || this.content == "If you received this email in error, please notify us immediately by sending an e-mail or by calling.") {
     return false
    }
    else {
      return true
    }
  }
  changeDesclaimer() {

    this.textareaValue = this.disclaimerForm.value.disclaimer
    this.content = this.textareaValue
    console.log(this.textareaValue, 'kaya');
    console.log(this.content, 'content');



  }

  disclaimerSizechange(evt: any) {
    let currnetSize = Number(evt.target.value);
    if (currnetSize == 4) {

      this.disclaimerSize = 14

    } else if (currnetSize == 3) {


      this.disclaimerSize = 12
    } else if (currnetSize == 2) {


      this.disclaimerSize = 10
    } else {




      this.disclaimerSize = 8
    }
  }


  changeDiscAlign(val: any) {
    this.disclaimerAlignment = val
  }

  // ------------ S A L E S   E V E N T ----------
  salesEvent(event: any, data: any) {
    this.eventdata = data;
    if (this.eventdata == 1) {
      this.textareaValue = ''
      this.eventIcon ="https://giveaspark.s3.us-west-1.amazonaws.com/giveASpark/sale-tag.png"
    }
    else if (this.eventdata == 2) {


      this.eventIcon ="https://giveaspark.s3.us-west-1.amazonaws.com/giveASpark/giftbox.png"
    }
    else if (this.eventdata == 3) {

      this.eventIcon ="https://giveaspark.s3.us-west-1.amazonaws.com/giveASpark/sale-black.png"
    }


    console.log(this.eventdata, this.eventIcon, "toggle data");


  }

  getEventAlign(val: any) {
    this.eventAlignment = val
  }

  changeIconSize(evt: any) {
    this.iconSize = evt

  }
  getEventFontSize(evt: any) {
    let currnetSize = Number(evt.target.value);
    if (currnetSize == 4) {

      this.eventSize = 14

    } else if (currnetSize == 3) {


      this.eventSize = 13
    } else if (currnetSize == 2) {


      this.eventSize = 12
    } else if (currnetSize == 1) {


      this.eventSize = 10
    }

  }
  getSalesDetails() {
    this.eventTitle = this.EventForm.value.eventTitle;
    this.eventName = this.EventForm.value.eventName;
    this.eventLink = this.EventForm.value.eventLink;
    console.log(this.eventTitle, this.eventName, this.eventLink, 'Sales Event')
  }





  // --------------footer-----------




  chooseFooter(event: any, data: any) {
    // debugger
    this.eventdata = data;
    if (this.eventdata == 1) {
      this.footerValue = ''
      this.footerText = "Please consider your environmental responsibility. Before printing this e-mail message, ask yourself whether you really need a hard copy."
    }
    else if (this.eventdata == 2) {

      this.footerValue = ''
      this.footerText = "Please consider the environment before printing this e-mail!"
    }
    else if (this.eventdata == 3) {
      this.footerValue = ''
      this.footerText = "Do you really need to print this email?"
    }
    else if (this.eventdata == 4) {
      this.footerValue = ''
      this.footerText = "Printing emails kills trees. Print is murder!"
    }
    else if (this.eventdata == 5) {
      this.footerValue = ''
      this.footerText = "Do not print this, Ok?"
    }
    else if (this.eventdata == 6) {

      this.footerText = ''
    }

    console.log(this.eventdata, this.footerText, "toggle data");


  }

  isCustomFooter(data:any):any {
    if(data == "Please consider your environmental responsibility. Before printing this e-mail message, ask yourself whether you really need a hard copy." || data == "Please consider the environment before printing this e-mail!" || data == "Do you really need to print this email?"|| data == "Printing emails kills trees. Print is murder!" || data == "Do not print this, Ok?") {
      return false
    } else {
      return true
    }
  }

  customFooter() {

    this.footerValue = this.footerForm.value.greenFooter
    this.footerText = this.footerValue
    // console.log(this.textareaValue , 'kaya');
    console.log(this.footerText, 'content');



  }

  selectfooterIcon(event: any, data: any) {
    this.eventdata = data;
    if (this.eventdata == 1) {

      this.greenIcon = "https://giveaspark.s3.us-west-1.amazonaws.com/category/green-leaf.png"
    }
    else if (this.eventdata == 2) {


      this.greenIcon = "https://giveaspark.s3.us-west-1.amazonaws.com/category/green-icon.png"
    }
    else if (this.eventdata == 3) {

      this.greenIcon = 'https://giveaspark.s3.us-west-1.amazonaws.com/category/image_2023_03_29T08_56_13_879Z.png'
    }


    console.log(this.eventdata, this.greenIcon, "toggle data");
  }





  getFooterSize(evt: any) {
    let currnetSize = Number(evt.target.value);
    if (currnetSize == 3) {

      this.footerSize = 12

    } else if (currnetSize == 2) {


      this.footerSize = 10
    } else if (currnetSize == 1) {


      this.footerSize = 8
    } else {




      this.footerSize = 8
    }

  }

  getFooterAlignment(val: any) {
    this.footerAlignment = val

  }


  // ------------------- B A N N E R ---------------





  selectBanner(event: any) {
    this.Submitted = true;
    let files = event.target.files;
    this.fileImageName = event.target.files[0].name;
    let fileSize= event.target.files[0].size
    
    this.isLoading = true;
    if (files) {
      if (fileSize> 1 * 1024 * 1024) {
        this.isLoading = false;

        this.toast.error('File size exceeds 1MB limit.');
        return;}
      this.bannerImage = files[0]
      this.submitBanner();
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
        this.bannerUrl = event.target?.result;
        console.log(this.bannerUrl,'url find');
        
      };
    }

  }

  submitBanner() {
    this.Submitted = true
    let formData = new FormData();
    formData.append('attachment', this.bannerImage);
    // this.spinner.show()
    this.api.addAttachments(formData).subscribe(
      (res: any) => {

        this.isLoading = false;
        this.banner = res[0]?.key;
        this.bannerUrl = this.banner
        console.log(this.profile4, 'image111111');

        // console.log(this.imageData1[0].key, "image key ")

      },
      (err: any) => {
        this.isLoading = false;
        console.log(err);

      }
    )

  }


  changeBannerSize(evt: any) {
    let currnetSize = Number(evt.target.value);
    if (currnetSize == 3) {

      this.bannerSize = 100

    } else if (currnetSize == 2) {


      this.bannerSize = 75
    } else if (currnetSize == 1) {


      this.bannerSize = 50
    } else {




      this.bannerSize = 300
    }

  }

  bannerAlignment(val: any) {
    this.bannerAlign = val
  }





  bannerValue() {
    this.bannerLink = this.bannerForm.value.bannerLink
    console.log(this.bannerLink);

  }



  // -----------------DOWNLOAD APP----------

  getdownloadFont(evt: any) {
    let currnetSize = Number(evt.target.value);
    if (currnetSize == 4) {

      this.appButtonSize = 16

    } else if (currnetSize == 3) {


      this.appButtonSize = 14
    } 
    else if (currnetSize == 2) {


      this.appButtonSize = 14
    } else if (currnetSize == 1) {


      this.appButtonSize = 12
    } else {




      this.appButtonSize = 10
    }


  }

  getDownloadbuttonAlign(val: any) {
    this.appbuttonAlign = val
  }
  getAppDetails() {
    this.appName = this.downloadAppForm.value.appName
    this.appleAppLink = this.downloadAppForm.value.appleAppLink
    this.googleAppLink = this.downloadAppForm.value.googleAppLink
console.log(this.appName, this.appleAppLink, this.googleAppLink, 'linllll');

  }







// -------------------CUSTOM  BUTTON--------------------
customButtonAlign(val:any){
  this.customAlign=val
  console.log(this.customAlign, 'size')
  }
  getButtonShape(val:any){
    this.customButtonShape=val
  }
  
  getCustomSize(val:any){
    this.customButtonSize=val
    console.log(this.customButtonSize, 'size')
  
  }
  getCustoBtDetails(){
    this.customText=this.customButtonForm.value.customButtonText
   this.customUrl=this.customButtonForm.value.customUrl
  
  }

// ----------------------- S C H E D U L E R --------------------


getScheduleSize(val:any){
  this.scheduleSize=val
  console.log(this.scheduleSize, 'size')
}

getScheduleShape(val:any){
  this.scheduleShape=val
  console.log(this.scheduleShape, 'size')
}
getScheduleDetails(){
this.inputValue=this.scheduleForm.value.scheduleText
this.scheduleLink=this.scheduleForm.value.scheduleLink
console.log(this.inputValue, this.scheduleLink, 'schedule')
}


getScheduleIcon(event: any, data: any){
 
    this.scheduleData = data;
    if (this.scheduleData == 1) {
      this.scheduleIcon = "https://giveaspark.s3.us-west-1.amazonaws.com/giveASpark/white-calender.png"
    }
    else if (this.scheduleData == 2) {
      this.scheduleIcon ="https://giveaspark.s3.us-west-1.amazonaws.com/giveASpark/white-clock.png"
    }
    else if (this.scheduleData == 3) {
      this.scheduleIcon ="https://giveaspark.s3.us-west-1.amazonaws.com/giveASpark/white-meet.png"
    }


    console.log(this.scheduleData, this.scheduleIcon, "toggle data");


  }

  onSubmit(data: any) { 
    let body:any={}
   body = {signatureName:this.sign,
      yourName: data.yourName,
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

      },
      quotesId:data.quotesId,
      quotes: this.quotevar,  
      companyPhone: data.companyPhone,
      profileImage:this.imageData2?this.imageData2:this.userProfile,
      fbProfile: data.fbProfile,
      twitterProfile: data?.twitterProfile,
      instagramProfile: data.instagramProfile,
      linkedInProfile: data.linkedInProfile,
      youtubeChannel: data.youtubeChannel,
  
    }
    body['disclaimer'] = this.content,
        body['fbProfile'] = data.fbProfile,
        body['twitterProfile'] = data?.twitterProfile,
        body['instagramProfile'] = data.instagramProfile,
        body['linkedInProfile'] = data.linkedInProfile,
        body['youtubeChannel'] = data.youtubeChannel,
        body['youtubeUrl'] = this.videoUrl,
        body['youtubeTitle'] = this.youtubeTitle,
        body['customProfile1'] = this.url1,
        body['customProfile2'] = this.url2,
        body['customProfile3'] = this.url3,
        body['customProfile4'] = this.url4,
        body['imageTitle'] = this.galleryTitle,
        body['imageLink'] = this.galleryLink,
        body['eventTitle'] = this.eventTitle,
        body['eventLink'] = this.eventLink,
        body['eventName'] = this.eventName,
        body['eventIcon'] = this.eventIcon,
        body['greenFooter'] = this.footerText,
        body['greenIcon'] = this.greenIcon,
        body['bannerImage'] =this.bannerUrl
      body['bannerLink'] = this.bannerLink
      body['appName'] = this.appName
      body['appleAppLink'] = this.appleAppLink
      body['googleAppLink'] = this.googleAppLink
      body ['customButtonText']=this.customText,
      body['customUrl']=this.customUrl,
      body['scheduleText'] =this.inputValue
      body['scheduleLink'] =this.scheduleLink
      body['scheduleIcon']=this.scheduleIcon
      body['thumbnailImage']=this.thumbnail,
   body['templateDesign'] = {
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
        borderRadius: this.borderRadius,
        youtubeColor: this.youtubeColor,
        youtubeFont: this.youtubeFont,
        youtubeAlignment: this.youtubeAlignment,
        disclaimerAlignment: this.disclaimerAlignment,
        disclaimerSize: this.disclaimerSize,
        disclaimerColor: this.disclaimerColor,
        imageRadious: this.imageRadious,
        imageSize: this.imageSize,
        imageSpace: this.imageSpace,
        eventColor: this.eventColor,
        eventSize: this.eventSize,
        iconSize: this.iconSize,
        eventAlignment: this.eventAlignment,
        footerSize: this.footerSize,
        footerColor: this.footerColor,
        footerAlignment: this.footerAlignment,
        bannerSize: this.bannerSize,
        bannerAlign: this.bannerAlign,
        appbuttonAlign: this.appbuttonAlign,
        appButtonSize: this.appButtonSize,
        appButtonColor: this.appButtonColor,
        customButtonSize:this.customButtonSize,
        buttonTextColor:this.buttonTextColor,
        customButtonShape:this.customButtonShape,
        customButtonAlign:this.customAlign,
        customButtonBg:this.customButtonBg,
        scheduleBg:this.scheduleBg,
        scheduleSize:this.scheduleSize,
        scheduleShape:this.scheduleShape
      }
    // if(this.proTemplate) {
    //   body['proTemplateId']=this.templateId
    // }
    //   else if(this.freeTemplate) {
    //     body['templateId']=this.templateId
        
    //   } else if(this.proPlusTemplate) {
    //     body['proPlusTemplateId']=this.templateId
    //   }
    console.log(body,'dssfcsfvcs');
    

    this.api.updateCreateTemplate(this.templateId,body).subscribe((res: any) => {
      console.log(res);
      this.TemplateId=res?.data?._id      
      this.toast.success('Template  Updated Successfully');
      if (localStorage.getItem('templatequoteId')) {
        this.QuoteId = localStorage.getItem('templatequoteId')
      }
      if (localStorage.getItem('templateLongQuotes')) {
        this.LongQuote = localStorage.getItem('templateLongQuotes')
        this.quotevar=this.LongQuote
      }
      // this.saveChanges() ;
      this.getTemplate();
      this.router.navigate(['/home-dashboard/templates/saved-templates'])
    },
      (error) => {
        this.toast.error('please try again');
      })
  }





delyoutube(){

  this.api.delyouTube(this.templateId).subscribe((res:any)=>{
    console.log(res);
    this.toast.success( 'Youtube Video has been removed  Successfully');
    this.getTemplate();
    window.location.reload();
  },
  (error) => {
    this.toast.error('please try again');
  })
  


}







delFooter(){

  this.api.delFooter(this.templateId).subscribe((res:any)=>{
    console.log(res);
    this.toast.success( 'Footer has been removed  Successfully');
    this.getTemplate();

  },
  (error) => {
    this.toast.error('please try again');
  })

}
delSchedule(){
  
  this.api.delSchedule(this.templateId).subscribe((res:any)=>{
    console.log(res);
    this.toast.success( ' Removed  Successfully');
    this.getTemplate();

  },
  (error) => {
    this.toast.error('please try again');
  })
}


delSale(){
  
  this.api.delEvent(this.templateId).subscribe((res:any)=>{
    console.log(res);
    this.toast.success( ' Removed  Successfully');
    this.getTemplate();

  },
  (error) => {
    this.toast.error('please try again');
  })

}
delDesclaimer(){
  this.api.deldesclaimer(this.templateId).subscribe((res:any)=>{
    console.log(res);
    this.toast.success( 'Desclaimer has been removed  Successfully');
    this.getTemplate();

  },
  (error) => {
    this.toast.error('please try again');
  })

}

delGallery(){
  this.api.delGallery(this.templateId).subscribe((res:any)=>{
    console.log(res);
    this.toast.success( 'Images has been removed  Successfully');
    this.getTemplate();

  },
  (error) => {
    this.toast.error('please try again');
  })
  
}

delBanner(){
  this.api.delBanner(this.templateId).subscribe((res:any)=>{
    console.log(res);
    this.toast.success( ' Banner has been removed  Successfully');
    this.getTemplate();

  },
  (error) => {
    this.toast.error('please try again');
  })
}

delcustomButton(){
  this.api.delcustom(this.templateId).subscribe((res:any)=>{
    console.log(res);
    this.getTemplate();
    this.toast.success( ' Removed  Successfully');
   

  },
  (error) => {
    this.toast.error('please try again');
  })
}

delApp(){
  this.api.delApp(this.templateId).subscribe((res:any)=>{
    console.log(res);
    this.toast.success( ' Removed  Successfully');
    this.getTemplate();

  },
  (error) => {
    this.toast.error('please try again');
  })
}
removeBanner(){
  this.banner = ''
  this.bannerUrl=''
  console.log(this.banner)
    }
}
