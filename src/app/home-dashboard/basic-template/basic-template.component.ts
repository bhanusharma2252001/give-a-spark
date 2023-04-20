import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef, ViewEncapsulation, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { Clipboard } from '@angular/cdk/clipboard';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-basic-template',
  templateUrl: './basic-template.component.html',
  styleUrls: ['./basic-template.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class BasicTemplateComponent implements OnInit {
  progessAray=[] as any
  showInputBox: boolean = false;
  selectedOption: string = 'option1';
  inputValue: string = '';
  details: any;
  username: any;
  Email: any;
  compName: any;
  compWebsite: any;
  number: any;
  
  img: boolean = true;
  @ViewChild('tableData', { static: false }) tableData!: ElementRef
  signatureDetailsForm: FormGroup
  customGalleryForm: FormGroup;
  disclaimerForm: FormGroup;
  planShow = false;
  public toggle: boolean = false;
  showPro: boolean = false;
  templateShow: any;
  QuoteId: any;
  LongQuote: any;
  ShowOneQuote: boolean = true;

  TemplateId: any
  profileImages: any;
  url: string | ArrayBuffer | null | undefined;
  Submitted = false
  fileData = [] as any;
  fileImageName: any = '';
  isImage = true;
  uploadImage: any;
  imageData1: any;
  imageData2: any;
  templateRef: any
  youtubeForm: FormGroup;
  EventForm: FormGroup;
  footerForm: FormGroup;
  public rgbaText: string = 'rgba(165, 26, 214, 0.2)';


  public selectedColor: string = 'firstNameColor';

  public color1: string = '#2889e9';

  progress: any = 0

  public color19: string = '#070606';
   customButtonShape:any = 0
  customButtonSize:any=10
  customAlign: any='';
  bannerSize: any = 100

 public buttonTextColor:string ='#fff'
  public customButtonBg:string ='#0d6efd'
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
  public youtubeColor: string = '#000000';
  youtubeFont: any = 8
  youtubeAlignment: any = ''
  imageSize: any = 61
  public footerColor: string = '#000000';
  public disclaimerColor: string = '#000000';
  public eventColor: string = '#000000';
  public contactDetailColor: string = '#000000';
  public lastNameColor: string = '#000000';
  public designationColor: string = '#000000';
  public firstNameColor: string = '#000000';
  
  fontFamilyNew: any = 'Poppins, sans-serif'
  lineHeight: any = 1.5
  tempDetails: any;
  itemFontSize: any = 12
  fontSizeName: any = 18
  footerSize: any = 12
  nameAlign: any = '';
  footerAlignment: any = ''
  disclaimerAlignment: any = ''
  borderRadius: any = 0
  bannerAlign: any = ''
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
    borderRadius: this.borderRadius,
    youtubeColor: this.youtubeColor,
    youtubeFont: this.youtubeFont,
    youtubeAlignment: this.youtubeAlignment,


  }
  fontFamilyList: any = ['Poppins, sans-serif', 'serif',
    'sans-serif',
    'monospace',
    'cursive',
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
  planDetail: any
  defaultDetails: any;
  userProfile: any;
  code: any;
  std: any;
  add: any;
  videoUrl: any;
  videoid: any;
  youId: any;
  thumbnail: any;
  youtubeTitle: any;
  youUrl: any;
  youImage: any;
  tempId: any;
  showIcon: boolean;
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



  newArray = [
    { 'id': 1, 'content': "A" },
    { 'id': 2, 'content': "B" },
    { 'id': 3, 'content': "C" },

  ]
  content: string;
  textareaValue: any;
  disclaimerSize: any = 10;
  eventIcon: any;
  eventTitle: any;
  eventName: any;
  eventLink: any;
  footerText: string;
  footerValue: any;
  greenIcon: any;
  bannerImage: any;
  bannerUrl: string | ArrayBuffer | null | undefined;
  banner: any;
  bannerLink: any;

  bannerForm: FormGroup;
  downloadAppForm: FormGroup;
  appName: any;
  appleAppLink: any;
  googleAppLink: any;
  customText: any;
  customUrl: any;
  customButtonForm:FormGroup;
  scheduleForm:FormGroup;
  scheduleLink: any;
  scheduleIcon: any;
  scheduleData: any;
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
  updateBar: any;
  getScanText() {
    let token: any = sessionStorage.getItem('ClientSpark')
    this.value = 'https://app.giveaspark.com/home-dashboard/myprofile/profile-dashboard?token=' + btoa(token)
    // this.router.navigateByUrl('home-dashboard/myprofile/profile-dashboard?token='+btoa(token))
  }



  @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any>;



  constructor(private api: SparkService, myElement: ElementRef,
    private fb: FormBuilder, private toast: ToastrService, private router: Router, private clipboard: Clipboard, private dialog: MatDialog, private spinner: NgxSpinnerService) {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.signatureDetailsForm = this.fb.group({
      yourName: [''],
      designation: [''],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phoneNo: ['', [Validators.pattern('[0-9 ]+')]],
      companyWebsite: ['', [Validators.pattern(reg)]],
      address: [''],
      fbProfile: ['', [Validators.pattern(reg)]],
      instagramProfile: ['', [Validators.pattern(reg)]],
      linkedInProfile: ['', [Validators.pattern(reg)]],
      youtubeChannel: ['', [Validators.pattern(reg)]],
      quotesId: [''],
      quotes: [''],
      profileImage: [''],
      companyPhone: ['', [Validators.pattern('[0-9 ]+')]],
      twitterProfile: ['', [Validators.pattern(reg)]],
      signatureName: ['']
    })


 
    this.youtubeForm = this.fb.group({
      youtubeUrl: ['', [Validators.required,]],
      youtubeTitle: ['', Validators.required]
    })

    this.EventForm = this.fb.group({
      eventTitle: ['',Validators.required],
      eventName: ['',Validators.required],
      eventLink: ['', [Validators.required,Validators.pattern(reg)]]
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
      imageLink: ['', [Validators.pattern(reg)]]
    })

    this.disclaimerForm = this.fb.group({
      disclaimer: ['']
    })

    this.bannerForm = this.fb.group({
      bannerLink: ['', [Validators.pattern(reg)]]
    })
    this.downloadAppForm = this.fb.group({
      appName: [''],
      appleAppLink: ['', [Validators.pattern(reg)]],
      googleAppLink: ['', [Validators.pattern(reg)]]
    })
    this.customButtonForm=this.fb.group({
      customButtonText: ['',Validators.required],
      customUrl: ['', [Validators.required,Validators.pattern(reg)]],
    })

this.scheduleForm=this.fb.group({
  scheduleLink: ['', [Validators.required,Validators.pattern(reg)]],
  scheduleText: ['',Validators.required], 
})
  }
  get f() { return this.signatureDetailsForm.controls; 
  
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
    // this.getBasicProfile();
    this.getScanText();


  }


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
    else {
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
  navigate() {
    this.router.navigate(['home-dashboard/templates/template-dashboard'])
  }



  CopyToClipboard(element: any) {

    var doc: any = document
      , text = doc.getElementById(element)
      , range, selection: any;
    console.log(element, 'kaya')
    if (doc.body.createTextRange) {
      range = doc.body.createTextRange();
      range.moveToElementText(text);
      range.select();
    }

    else if (window.getSelection) {
      selection = window.getSelection();
      range = doc.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
      console.log(text, 't');
      alert(text)

    }
    document.execCommand('copy');
    let a: any = window.getSelection();
    a.removeAllRanges();
    console.log(a, 'a');

    let b: any = document.getElementById("btn")
    b.value = "Copied"
    console.log(b, 'b');

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
    if (this.planDetail != 'Plan A') {
      this.nameAlign = val;
    } else {
      // s
    }
  }


  titleAlign(val: any) {
    this.youtubeAlignment = val;
  }

  //new change end
  getSignature() {
    this.sign = this.signatureDetailsForm.value.signatureName;
    console.log(this.sign, "signature name");

  }



  // getBasicProfile() {
  //   this.api.getbasicDetaiofUseer().subscribe((res: any) => {
  //     this.details = res.result[0];
  //     console.log(this.details, 'dddddd')
  //     console.log(res, 'xasds');

  //     this.useraddress=this.details?.address[0]?.city
  //     this.username=this.details?.firstName
  //     this.Email = this.details?.email
  //     this.compName = this.details?.companyName
  //     this.compWebsite = this.details?.companyWebsite
  //     this.number = this.details?.phone
  //     this.compPhone = this.details?.companyPhone
  //     this.desig = this.details?.designation
  //     this.addr =this.details?.address

  //     this.insta =  this.details?.instagramProfile
  //     this.uTube =  this.details?.youtubeChannel

  //     this.Linkedin = res.result[0]?.linkedInProfile
  //     this.Twitter = res.result[0]?.twitterProfile
  //     this.faceB = res.result[0]?.fbProfile


  //     console.log(this.compWebsite, 'jojo')

  //     console.log(this.details)
  //   })



  // }
  getTemplateDetails() {

    this.api.getsignatureDetails().subscribe((res: any) => {
      this.planDetail = res?.plan

      this.defaultDetails = res?.userData[0]
      this.std = this.defaultDetails?.stdCode
      this.code = this.defaultDetails?.QrCode
      if (res?.result.length > 0) {
        this.tempDetails = res.result[res.result.length - 1];
        this.useraddress = this.tempDetails?.address[0]?.addressline
        this.username = this.tempDetails?.yourName
        this.Email = this.tempDetails?.email
        this.compName = this.tempDetails?.companyName
        this.compWebsite = this.tempDetails?.companyWebsite
        this.number = this.tempDetails?.phoneNo
        this.compPhone = this.tempDetails?.companyPhone
        this.desig = this.tempDetails?.designation


        this.insta = this.tempDetails?.instagramProfile
        this.uTube = this.tempDetails?.youtubeChannel
        this.userProfile = this.tempDetails?.profileImage
        this.Linkedin = this.tempDetails?.linkedInProfile
        this.Twitter = this.tempDetails?.twitterProfile
        this.faceB = this.tempDetails?.fbProfile
        this.quotevar = this.tempDetails?.quotes
        this.youtubeTitle = this.tempDetails?.youtubeTitle
        this.youUrl = this.tempDetails?.youtubeUrl
        this.youImage = this.tempDetails?.thumbnailImage
        this.galleryImage2 = this.tempDetails?.customProfile2
        this.galleryImage1 = this.tempDetails?.customProfile1
        this.galleryImage3 = this.tempDetails?.customProfile3
        this.galleryImage4 = this.tempDetails?.customProfile4
      }

      else {
        this.useraddress = this.defaultDetails?.address[0]?.addressline
        this.username = this.defaultDetails?.firstName
        this.Email = this.defaultDetails?.email
        this.compName = this.defaultDetails?.companyName
        this.compWebsite = this.defaultDetails?.companyWebsite
        this.number = this.defaultDetails?.phone
        this.compPhone = this.defaultDetails?.companyPhone
        this.desig = this.defaultDetails?.designation

        this.userProfile = this.defaultDetails?.profile
        this.insta = this.defaultDetails?.instagramProfile
        this.uTube = this.defaultDetails?.youtubeChannel

        this.Linkedin = this.defaultDetails?.linkedInProfile
        this.Twitter = this.defaultDetails?.twitterProfile
        this.faceB = this.defaultDetails?.fbProfile

        console.log(this.username)
      }
      if(this.useraddress){

        this.progessAray.push(this.useraddress);

      }
      if(this.Email){
        this.progessAray.push(this.Email);

      }
      if(this.compName){
        this.progessAray.push(this.compName);

      }
      if(this.compWebsite){
        this.progessAray.push(this.compWebsite);

      }
      if(this.number){
        this.progessAray.push(this.number);

      }
      if(this.compPhone){
        this.progessAray.push(this.compPhone);

      }
      if(this.desig){
        this.progessAray.push(this.desig);

      }

      if(this.userProfile){
        this.progessAray.push(this.userProfile);

      }
      if(this.insta){
        this.progessAray.push(this.insta);

      }
      if(this.uTube){
        this.progessAray.push(this.uTube);

      }
      if(this.Linkedin){
        this.progessAray.push(this.Linkedin);

      }
      if(this.Twitter){
        this.progessAray.push(this.Twitter);

      }
      if(this.faceB){
        this.progessAray.push(this.faceB);

      }


      // this.progressdata = this.progessAray.length;
      if(this.progessAray.length == 3 ){
        this.updateBar = 25
      }
      if(this.progessAray.length == 5 ){
        this.updateBar = 25
      }
      if(this.progessAray.length == 4 ){
        this.updateBar = 25
      }
      if(this.progessAray.length == 6 ){
        this.updateBar = 50
      }
      if(this.progessAray.length == 7 ){
        this.updateBar = 50
      }
      if(this.progessAray.length == 8 ){
        this.updateBar = 50
      }
      if(this.progessAray.length == 9 ){
        this.updateBar = 75
      }
      if(this.progessAray.length == 10 ){
        this.updateBar = 75
      }
      if(this.progessAray.length == 11 ){
        this.updateBar = 75
      }
      if(this.progessAray.length == 12 ){
        this.updateBar = 100
      }
  
      console.log(this.updateBar, 'barvalue')
      console.log(this.progessAray.length, "progress array")

    })


  }







  youtubeIcon(val: any) {
    // if (this.showPro = !this.showPro) {
    //   this.templatData = false;
    // }
    this.icon = val

    this.showIcon = !this.showIcon;
    console.log(this.showIcon);

  }






  selectFeature(val: any) {
    if ((val == 'design' || val == 'social' || val == 'apps') && this.planDetail == 'Plan A') {

      // let a:any=document.getElementById("design").style.width = "800px";
      this.dialog.open(this.secondDialog);
    }
    if ((val == 'apps' || val == 'social') && this.planDetail == 'Plan B') {

      // let a:any=document.getElementById("design").style.width = "800px";
      this.dialog.open(this.secondDialog);
    }
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
      this.toast.success('Signature Updated Successfully');

      // this.getDesign();
    },
      (error) => {
        this.toast.error('please try again');
      })
  }












  onSelectImage(event: any) {
    this.Submitted = true;
    this.img = false;
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
        if (this.useraddress && this.desig && this.username && this.Email && this.compName && this.compWebsite && this.imageData2) {
          this.progress = 50;
        } else if (this.imageData2) {
          this.progress = 25
        }
        console.log(this.imageData1[0].key, "image key ")
        this.toast.success('Image upload Successfully');
      },
      (err: any) => {

        console.log(err);
        this.toast.error('File size is too Large ');
      }
    )

  }



  setimageSignature() {
    console.log(this.tableData.nativeElement);
    this.templateRef = this.tableData.nativeElement
    console.log(this.templateRef, "templatesssssssss")
  }

  changeDesignation() {
    if (this.imageData2) {
      if (this.useraddress && this.desig && this.username && this.Email && this.compName && this.compWebsite) {
        this.progress = 50
      }
      else {
        this.progress = 25
      }
    } else {
      if (this.useraddress && this.desig && this.username && this.Email && this.compName && this.compWebsite) {
        this.progress = 25
      }
      else {
        this.progress = 0
      }
    }

  }

  changeSocialLink(evt: any) {
    if (this.planDetail == 'Plan C') {
      console.log(this.imageData2, this.useraddress, this.desig, this.username, this.Email, this.compName, this.compWebsite, this.faceB, this.insta, this.Linkedin, this.uTube, this.Twitter);

      if (this.imageData2 && this.useraddress && this.desig && this.username && this.Email && this.compName && this.compWebsite) {
        if (this.faceB && this.insta && this.Linkedin && this.uTube && this.Twitter) {
          this.progress = 75
        } else {
          this.progress = 50
        }
      } else if (this.useraddress && this.desig && this.username && this.Email && this.compName && this.compWebsite) {
        if (this.faceB && this.insta && this.Linkedin && this.uTube && this.Twitter) {
          this.progress = 50
        } else {
          this.progress = 25
        }
      } else if (this.imageData2) {
        if (this.faceB && this.insta && this.Linkedin && this.uTube && this.Twitter) {
          this.progress = 50
        } else {
          this.progress = 25
        }
      }

    } else {
      this.faceB = null
      this.insta = null
      this.Linkedin = null
      this.uTube = null
      this.Twitter = null
      evt.preventDefault()


    }


  }
  changeQuote() {
    if (this.imageData2 && this.useraddress && this.desig && this.username && this.Email && this.compName && this.compWebsite && this.faceB && this.insta && this.Linkedin && this.uTube && this.Twitter) {
      if (this.quotevar) {

        this.progress = 100
      } else {
        this.progress = 75
      }
      // else if(this.imageData2 && this.useraddress && this.desig && this.username && this.Email && this.compName && this.compWebsite ){

      // }

    }
    else if (this.imageData2 && this.useraddress && this.desig && this.username && this.Email && this.compName && this.compWebsite) {
      if (this.faceB && this.insta && this.Linkedin && this.uTube && this.Twitter) {
        this.progress = 75
      } else {
        this.progress = 50
      }
    }
    else if (this.useraddress && this.desig && this.username && this.Email && this.compName && this.compWebsite) {
      if (this.faceB && this.insta && this.Linkedin && this.uTube && this.Twitter) {
        this.progress = 50
      } else {
        this.progress = 25
      }
    } else if (this.imageData2) {
      if (this.faceB && this.insta && this.Linkedin && this.uTube && this.Twitter) {
        this.progress = 50
      } else {
        this.progress = 25
      }
    }
  }

  hideModel() {
    this.closeModal.nativeElement.click();
  }

  remove(logoId: any) {
    this.tempId = logoId

    if (this.planDetail == 'Plan C' || this.planDetail == 'Plan B') {
      this.api.removeLogo(this.tempId).subscribe((res: any) => {
        console.log(this.tempId);
        this.getTemplateDetails();
        this.toast.show('Logo Removed')
      })
    }
    if (this.planDetail == 'Plan A') {
      this.router.navigate(['home-dashboard/plan/plan-dashboard'])

      if (this.planDetail == 'Plan B' || this.planDetail == 'Plan c') {
        this.api.removeLogo(this.tempId).subscribe((res: any) => {
          console.log(this.tempId);
          this.getTemplateDetails();
          this.toast.show('Logo Removed')
        })
      }
      //       else{
      // this.logo
      //       }
    }


    console.log(this.tempId, 'iiiiidddddd');

    console.log('working');
    // debugger

  }




  //  --------- YOU TUBE PLAYLIST-----

  getUrl() {


    this.videoUrl = this.youtubeForm.value.youtubeUrl;

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



  }



  youTubeDetails() {
    this.youtubeTitle = this.youtubeForm.value.youtubeTitle;
    this.getUrl();
    console.log(this.youtubeTitle)
    this.toast.show('Please click On Create Signature to Save ')
  }



  chooseQuotes(evt: any) {
    if (evt) {
      if (localStorage.getItem('quoteId')) {
        this.QuoteId = localStorage.getItem('quoteId')
      }
      if (localStorage.getItem('LongQuotes')) {
        this.LongQuote = localStorage.getItem('LongQuotes')
      }
    }

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
    if (files) {
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

        // this.imageData1 = res;
        // this.imageData2 = this.imageData1[0].key;
        this.profile1 = res[0]?.key;
        this.url1 = this.profile1
        console.log(this.profile1, 'image111111');

        // console.log(this.imageData1[0].key, "image key ")

      },
      (err: any) => {
        // this.spinner.hide()
        console.log(err);

      }
    )

  }



  // -------------- CUSTOM PROFILE -2 -----------
  onSelectFile2(event: any) {
    this.Submitted = true;
    let files = event.target.files;
    this.fileImageName = event.target.files[0].name;
    if (files) {
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

        // this.imageData1 = res;
        // this.imageData2 = this.imageData1[0].key;
        this.profile2 = res[0]?.key;
        this.url2 = this.profile2
        console.log(this.profile2, 'image111111');

        // console.log(this.imageData1[0].key, "image key ")

      },
      (err: any) => {
        // this.spinner.hide()
        console.log(err);

      }
    )

  }


  // ---------------CUSTOM PROFILE-3------------
  onSelectFile3(event: any) {
    this.Submitted = true;
    let files = event.target.files;
    this.fileImageName = event.target.files[0].name;
    if (files) {
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

        // this.imageData1 = res;
        // this.imageData2 = this.imageData1[0].key;
        this.profile3 = res[0]?.key;
        this.url3 = this.profile3
        console.log(this.profile3, 'image111111');

        // console.log(this.imageData1[0].key, "image key ")

      },
      (err: any) => {
        // this.spinner.hide()
        console.log(err);

      }
    )

  }


  // ---------------CUSTOM PROFILE-4------------
  onSelectFile4(event: any) {
    this.Submitted = true;
    let files = event.target.files;
    this.fileImageName = event.target.files[0].name;
    if (files) {
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

        // this.imageData1 = res;
        // this.imageData2 = this.imageData1[0].key;
        this.profile4 = res[0]?.key;
        this.url4 = this.profile4
        console.log(this.profile4, 'image111111');

        // console.log(this.imageData1[0].key, "image key ")

      },
      (err: any) => {
        // this.spinner.hide()
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
      this.eventIcon = "https://giveaspark.s3.us-west-1.amazonaws.com/giveASpark/sale-tag.png"
    }
    else if (this.eventdata == 2) {


      this.eventIcon = "https://giveaspark.s3.us-west-1.amazonaws.com/giveASpark/giftbox.png"
    }
    else if (this.eventdata == 3) {

      this.eventIcon = "https://giveaspark.s3.us-west-1.amazonaws.com/giveASpark/sale-black.png"
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


      this.greenIcon = "https://giveaspark.s3.us-west-1.amazonaws.com/category/green-icon.png "
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
    if (files) {
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

        // this.imageData1 = res;
        // this.imageData2 = this.imageData1[0].key;
        this.banner = res[0]?.key;
        this.bannerUrl = this.banner
        console.log(this.profile4, 'image111111');

        // console.log(this.imageData1[0].key, "image key ")

      },
      (err: any) => {
        // this.spinner.hide()
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
  this.Submitted = true;
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


      this.scheduleIcon = "https://giveaspark.s3.us-west-1.amazonaws.com/giveASpark/white-clock.png"
    }
    else if (this.scheduleData == 3) {

      this.scheduleIcon = "https://giveaspark.s3.us-west-1.amazonaws.com/giveASpark/white-meet.png"
    }


    console.log(this.scheduleData, this.scheduleIcon, "toggle data");


  }

















  onSubmit(data: any) {
    let body: any = {}
    body = {

      yourName: data.yourName,
      signatureName: this.sign ? this.sign : '',
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
      quotesId: this.QuoteId ? this.QuoteId : '',
      quotes: data.quotes ? data.quotes : '',
      profileImage: this.imageData2 ? this.imageData2 : this.userProfile,
      companyPhone: data.companyPhone ? data.companyPhone : '',



    }

    console.log(this.showIcon, "showicon value");



    

    if (this.planDetail != 'Plan A') {
      if (
        this.showIcon == true) {
        body['thumbnailImage'] = "https://giveaspark.s3.us-west-1.amazonaws.com/Soical_icons/youtube-icon.png"


      }
      else if (
        this.showIcon == false) {
        body['thumbnailImage'] = this.thumbnail
      }
      else {
        body['thumbnailImage'] = this.thumbnail
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
        body['bannerImage'] = this.banner
      body['bannerLink'] = this.bannerLink
      body['appName'] = this.appName
      body['appleAppLink'] = this.appleAppLink
      body['googleAppLink'] = this.googleAppLink
      body ['customButtonText']=this.customText,
      body['customUrl']=this.customUrl,
      body['scheduleText'] =this.inputValue
      body['scheduleLink'] =this.scheduleLink
      body['scheduleIcon']=this.scheduleIcon
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

    }
    else {
      body['fbProfile'] = '',
        body['twitterProfile'] = '',
        body['instagramProfile'] = '',
        body['linkedInProfile'] = '',
        body['youtubeChannel'] = '',

        body['templateDesign'] = {
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

    console.log(body, 'sbxkabxak');


    this.api.addsignatureDetails(body).subscribe((res: any) => {
      console.log(res);
      this.TemplateId = res?.data?._id
      console.log(this.TemplateId, 'iddddd');


      this.toast.success('Signature Updated Successfully');




      this.getTemplateDetails();
      if (localStorage.getItem('quoteId')) {
        localStorage.removeItem('quoteId')

      }

      if (localStorage.getItem('LongQuotes')) {
        localStorage.removeItem('LongQuotes')

      }
      // this.saveChanges() ;
      this.router.navigate(['/home-dashboard/templates/saved-templates'])
    },
      (error) => {
        this.toast.error(error);
      })
  }
  removeBanner(){
this.banner = ''
this.bannerUrl=''
console.log(this.banner)
  }


// ---------------cacel -gallery---------------

cancelGallery(){
  this.url1= ''
  this.url2= ''
  this.url3= ''
  this.url4= ''
  this.galleryTitle=''
}


// ---------------cacel -banner---------------


cancelBanner(){
  this.banner=''
  this.bannerLink=''
}

// ---------------cacel -disclaimer---------------


cancelDesclaimer(){
  this.content=''
}

// ---------------cacel -apps---------------


cancelApps(){
  this.appName=''
  this.appleAppLink=''
  this.googleAppLink=''
}

// ---------------cacel -custom---------------
cancelCustomButton(){
  this.customUrl=''
  this.customText=''
}
// ---------------cacel -even---------------
cancelEvent(){
  this.eventTitle=''
this.eventLink=''
 this.eventName=''
 this.eventIcon=''
}
cancelYoutube(){
  this.thumbnail=''
  this.videoUrl=''
}
cancelFooter(){
  this.footerText=''
  this.greenIcon=''
}
cancelMeeting(){
  this.inputValue=''

  this.scheduleLink=''
this.scheduleIcon=''
}
}
