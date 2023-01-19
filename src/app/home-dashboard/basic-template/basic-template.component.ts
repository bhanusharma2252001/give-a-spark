import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-basic-template',
  templateUrl: './basic-template.component.html',
  styleUrls: ['./basic-template.component.scss']
})
export class BasicTemplateComponent implements OnInit {
  details: any;
  username: any;
  Email: any;
  compName: any;
  compWebsite: any;
  number: any;

  signatureDetailsForm: FormGroup
  planShow = false;
  public toggle: boolean = false;
  showPro: boolean = false;
  templateShow: any;
  QuoteId: any;
  LongQuote: any;
  ShowOneQuote: boolean = true;


  url: string | ArrayBuffer | null | undefined;
  Submitted = false
  fileData = [] as any;
  fileImageName: any = '';
  isImage = true;
  uploadImage: any;
  imageData1: any;
  imageData2: any;


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
  // fontSizeChange:any=3
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
  fontFamilyList: any = ['Poppins, sans-serif', 'serif',
    'sans-serif',
    'monospace',
    'cursive',
    'fantasy',
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
  // chnage end
  getScanText() {
    let token: any = sessionStorage.getItem('ClientSpark')
    this.value = 'https://app.giveaspark.com/home-dashboard/myprofile/profile-dashboard?token=' + btoa(token)
    // this.router.navigateByUrl('home-dashboard/myprofile/profile-dashboard?token='+btoa(token))
  }



  data = document.getElementById('scam');

 


  constructor(private api: SparkService, myElement: ElementRef,
    private fb: FormBuilder, private toast: ToastrService, private router: Router) {
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
      twitterProfile: ['']
    })

  }



  ngOnInit(): void {
    console.log(this.data, 'dessssssssiggggnsnnnnl;')
    // this.getBasicProfile()
this.getDesign();
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

      this.tempDetails = res.result[res.result.length - 1];
      console.log(this.tempDetails, "kkkkkkkk")


    })
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
      this.toast.success('Template  Created Successfully');


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
    this.api.templateCustomize(log).subscribe((res: any) => {
      console.log(res, "gfk;lkf;d");

    })
  }













  onSelectImage(event: any) {
    this.Submitted = true;
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

      },
      (err: any) => {

        console.log(err);

      }
    )

  }

  getDesign(){
    this.api.getdesign().subscribe((res:any)=>{
      let data = res?.result
          let result = data[data?.length - 1]
          let templateResult = result?.templateDesign;
          console.log(templateResult,'ada');
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


}
