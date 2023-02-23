import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-template-dashboard',
  templateUrl: './template-dashboard.component.html',
  styleUrls: ['./template-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TemplateDashboardComponent implements OnInit {
logo="assets/images/logo-1.png"
  details: any;
  username: any;
  Email: any;
  compName: any;
  compWebsite: any;
  number: any;
  demodataa = "color :red";
img:boolean=true;
  @ViewChild('tableData',{static:false})tableData!:ElementRef
  EditFreeTempForm: FormGroup
  planShow = false;
  public toggle: boolean = false;
  showPro: boolean = false;
  templateShow: any;
  QuoteId: any;
  LongQuote: any;
  ShowOneQuote: boolean = true;
  
freeId:any;

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
  tempList: any;
  useraddress: any;
  proList: any;
  proplus: any;

  
CopyToClipboard(element:any) {

  var doc:any = document
  , text = doc.getElementById(element)
  , range, selection:any;
console.log(text,'ok');

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
}
document.execCommand('copy');
let a :any = window.getSelection();  
a.removeAllRanges();
let b :any= document.getElementById("btn")
b.value= "Copied"
// document.getElementById("btn").value="Copied";
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
  secondTemp: any;
  templateId: any;
  data: any;
  templateSelect: any;
  // chnage end



 







  constructor(private api: SparkService, myElement: ElementRef,

    private fb: FormBuilder, private toast: ToastrService, private router: Router) {
    this.EditFreeTempForm = this.fb.group({
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
      twitterProfile: ['']
    })

  }



  ngOnInit(): void {
    this.getTemplateByUser();

    this.getDesign();
    // this.getTemplateDetails();
    if (localStorage.getItem('quoteId')) {
      this.QuoteId = localStorage.getItem('quoteId')

    }

    if (localStorage.getItem('LongQuotes')) {
      this.LongQuote = localStorage.getItem('LongQuotes')

    }
    console.log(this.LongQuote, this.QuoteId)
    this.FreeTempList();



  }



  // new change start
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
  //new change end

  FreeTempList() {
    this.api.getFreeTemp().subscribe((res: any) => {
      this.details = res?.freeTemplates;
      this.proList= res?.templateForPro;
      this.proplus=res?.templateForProPlus;
      console.log(this.details, 'arrrayyyy');
      
      // this.secondTemp=res?.result[1];
      console.log(this.secondTemp,"secondTemo");
      
      console.log(res, 'xasds');

 
    })



  }
  






sendId(Id:any){
this.templateId=Id
console.log(this.templateId, "idddddddd");
this.getFreeTempById();


}
 

getFreeTempById(){
  this.api.FreeTempById(this.templateId).subscribe((res=>{

this.data=res;
console.log(this.data?.result?.email);

       this.username = this.data?.result?.yourName
      this.Email = this.data?.result?.email
      this.compName = this.data?.result?.companyName
      this.compWebsite = this.data?.result?.companyWebsite
      this.number = this.data?.result?.phoneNo
      this.compPhone = this.data?.result?.companyPhone
      this.desig = this.data?.result?.designation
      this.addr =this.data?.result?.address[0]?.addressline2
      this.quotevar=this.data?.result?.quotes
    console.log(res,'kkaya')
    console.log(this.addr);
    
  }))

}

updateFree(data:any){

  let body = {

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

    quotesId: this.QuoteId,
    quotes: data.quotes,
    
    companyPhone: data.companyPhone

  }

  this.api.updateFreeTemp(this.templateId, body).subscribe(
    (res: any) => {
          console.log(res);
          this.toast.success('submitted')
this.FreeTempList();
        },
        (err: any) => {
       
          this.toast.error('not submitted');
          
        } 

   )

}

openTemp(val:any){
  this.templateSelect=val

}



onSubmit(data: any) {

  let body = {

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
    fbProfile: data.fbProfile,
    twitterProfile: data?.twitterProfile,
    instagramProfile: data.instagramProfile,
    linkedInProfile: data.linkedInProfile,
    youtubeChannel: data.youtubeChannel,
    quotesId: this.QuoteId,
    quotes: data.quotes,
    profileImage: this.imageData2,
    companyPhone: data.companyPhone

  }



  this.api.addsignatureDetails(body).subscribe((res: any) => {
    console.log(res);
 
    this.templateId=res?.result?._id
    console.log(this.templateId, 'kkkkkkkkk')
    this.toast.success('Template  Created Successfully');

    
    if(localStorage.getItem('quoteId')){
      localStorage.removeItem('quoteId')
    
    }
    
    if(localStorage.getItem('LongQuotes')){
      localStorage.removeItem('LongQuotes')
    
    }
    // this.saveChanges() ;
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






saveChanges(Id:any) {
  
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
  this.api.templateCustomize(log,this.templateId).subscribe((res: any) => {
    console.log(res);
    this.toast.success('Template  Created Successfully');

    this.getDesign();
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

getDesign() {
  this.api.getdesign().subscribe((res: any) => {
    let data = res?.result
    let result = data[data?.length - 1]
    let templateResult = result?.templateDesign;
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


  })
}






setSignature() {
  console.log(this.tableData.nativeElement);
  this.templateRef = this.tableData.nativeElement
  console.log(this.templateRef, "templatesssssssss")
}




getTemplateByUser(){
  this.api.getsignatureDetails().subscribe((res: any) => {

    this.tempDetails = res.result[res.result.length - 1];
    this.useraddress= this.tempDetails?.address[0].city
    this.quotevar=this.tempDetails?.quotes

    console.log(this.tempDetails, "kkkkkkkk")


  })
}

editTemplate(val:any) {
  
  let id :number = val;
  this.router.navigate(['home-dashboard/templates/edit-template'], { queryParams: { templateId: id } })
}




}
