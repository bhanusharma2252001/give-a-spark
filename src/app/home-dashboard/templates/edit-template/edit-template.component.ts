import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { Clipboard } from '@angular/cdk/clipboard';
import { ActivatedRoute, Router } from '@angular/router';
import { SafepipePipe } from 'src/app/homedashboard/pipe/safepipe.pipe';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditTemplateComponent implements OnInit {
  details: any;
  username: any;
  Email: any;
  compName: any;
  compWebsite: any;
  number: any;
 
img:boolean=true;
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
  public contactDetailColor: string = '#e920e9';
  public lastNameColor: string = '#fff500';
  public designationColor: string = 'rgb(236,64,64)';
  public firstNameColor: string = '#2d5964';
  fontFamilyNew: any = 'Poppins, sans-serif'
  lineHeight: any = 1.5
  tempDetails: any;
  itemFontSize: any = 10
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
  title: any;
  sign: any;
  userProfile: any;




  constructor(private api: SparkService, myElement: ElementRef,private route: ActivatedRoute,
    private fb: FormBuilder, private toast: ToastrService, private router: Router, private clipboard: Clipboard, private spinner:NgxSpinnerService) {
    this.editTemplateForm = this.fb.group({
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

    this.getTemplateId()
  }




  

  ngOnInit(): void { this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  this.gettemplatebyUser();
  // this. getProTemplate();
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
      this.itemFontSize = 13
      this.fontSizeName = 14
    } else if (currnetSize == 5) {
      this.templateFontSize = 36
      this.fontSizeName = 15
      this.itemFontSize = 14
    } else if (currnetSize == 3) {
      this.templateFontSize = 32
      this.itemFontSize = 10
      this.fontSizeName = 13
    } else if (currnetSize == 2) {
      this.templateFontSize = 31
      this.itemFontSize = 8
      this.fontSizeName = 12
    } else {
      this.templateFontSize = 30
      this.itemFontSize = 10
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

  getTemplateId() {
    this.route.queryParamMap.subscribe((params: any) => {
     let templateId = params.params['templateId'] || 0;
     this.templateId = Number(templateId)
     if (this.templateId == 0) {
       this.router.navigate(['home-dashboard/templates/template-dashboard'])
     } else {
       this. getFreeTemplate();

     }
   });
 }


  onSubmit(data: any) { 
    let body:any={}
   body = {
      yourName: data.yourName,
      designation: data.designation,
      email: data.email,
      phoneNo: data.phoneNo,
      companyWebsite: data.companyWebsite,
      signatureName:this.sign,
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
      quotesId: this.QuoteId,
      quotes: this.quotevar,  
      companyPhone: data.companyPhone,
      profileImage:this.imageData2,
      fbProfile: data.fbProfile,
      twitterProfile: data?.twitterProfile,
      instagramProfile: data.instagramProfile,
      linkedInProfile: data.linkedInProfile,
      youtubeChannel: data.youtubeChannel,
  
    }
    
    if(this.proTemplate) {
      body['proTemplateId']=this.templateId
    }
      else if(this.freeTemplate) {
        body['templateId']=this.templateId
        
      } else if(this.proPlusTemplate) {
        body['proPlusTemplateId']=this.templateId
      }
    console.log(body,'dssfcsfvcs');
    

    this.api.updateTemplate(this.templateId,body).subscribe((res: any) => {
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
      this.getFreeTemplate();
    },
      (error) => {
        this.toast.error('please try again');
      })
  }


 
  addQuote() {
    this.router.navigate(['/home-dashboard/motivational-quote/quote-dashboard'],{ queryParams: { templateId: this.templateId } })
  }





  onClick() {

  }

  saveChanges() {
    console.log(this.templateId, "template id");
    
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
    this.api.templateCustomize(this.templateId, log).subscribe((res: any) => {
      console.log(res);
      this.toast.success('Template  Created Successfully');
      this.getFreeTemplate();
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



  
 getFreeTemplate(){
  this.api.getFreeTemp().subscribe((res:any)=>{
    this.tempDetails=res?.freeTemplates;

  this.proList=res?.templateForPro;

  this.proplus=res?.templateForProPlus;
  console.log(this.proList,'ppppppppppppppppppppppppp');
  
    console.log( this.tempDetails, 'free Templates');
    this.tempDetails.filter((item:any)=>{
      if(item?._id == this.templateId) {
        this.freeTemplate = true
        this.getBindData(item)
      }
      // if(item?.templateId == this.templateId) {
      //   this.getBindData(item)
      // }
    })
    this.proList.filter((item:any)=>{
      if(item?._id == this.templateId) {
        this.proTemplate = true
        this.getBindData(item)
        this.getTemplateDesign(item?.templateDesign)
      }
      
      
    })
    this.proplus.filter((item:any)=>{
      if(item?._id == this.templateId) {
        this.proPlusTemplate=true
        this.getBindData(item)
        this.getTemplateDesign(item?.templateDesign)
      }
      
      
    })
  })
 }

 getTemplateDesign(data:any) {
this.firstNameColor = data?.firstNameColor,
this.lastNameColor = data?.lastNameColor,
this.designationColor = data?.designationColor,
this.contactDetailColor = data?.contactDetailColor,
this.fontFamilyNew = data?.fontFamily,
this.templateFontSize = data?.fontSize,
this.lineHeight = data?.lineHeight,
this.itemFontSize = data?.fontSizeItem,
this.fontSizeName = data?.nameFontSize,
this.nameAlign = data?.nameAlign,
this.borderRadius = data?.borderRadius

 }

 getBindData(data:any) {
  console.log(data,'adadcw');
  
  this.username = data?.yourName
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
this.title=data?.signatureName
      this.Linkedin = data?.linkedInProfile
      this.Twitter = data?.twitterProfile
      this.faceB = data?.fbProfile
this.userProfile=data?.profileImage
      this.QuoteId = data?.quotesId
      if (localStorage.getItem('templatequoteId')) {
        this.QuoteId = localStorage.getItem('templatequoteId')
  
      }
  
      if (localStorage.getItem('templateLongQuotes')) {
        this.LongQuote = localStorage.getItem('templateLongQuotes')
        this.quotevar=this.LongQuote
  
      }
 }
 getSignature(){
  debugger
  this.sign = this.editTemplateForm.value.signatureName;
  console.log(this.sign, "signature name");
  
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
  

}
