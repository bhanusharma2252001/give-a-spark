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
 
img:boolean=true;
@ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any>;
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

  @ViewChild('content') content: any;
  userProfile: any;
  logo: any;
  std: any;
  constructor(private api: SparkService, myElement: ElementRef,private route: ActivatedRoute,private dialog: MatDialog,
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
      companyPhone: [''],
      twitterProfile:  ['', [ Validators.pattern(reg)]],
      signatureName:['']
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
      profileImage:this.imageData2,
      fbProfile: data.fbProfile,
      twitterProfile: data?.twitterProfile,
      instagramProfile: data.instagramProfile,
      linkedInProfile: data.linkedInProfile,
      youtubeChannel: data.youtubeChannel,
  
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
        this.imageData1 = res;
        this.imageData2 = this.imageData1[0].key;
        console.log(this.imageData1[0].key, "image key ")
        this.toast.success('Image upload Successfully');
      },
      (err: any) => {

        console.log(err);
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
   }

 getBindData(data:any) {
  console.log(data,'adadcw');

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

}
