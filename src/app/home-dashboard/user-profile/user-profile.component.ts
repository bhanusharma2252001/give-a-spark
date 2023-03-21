import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { max, merge } from 'rxjs';
import { SparkService } from 'src/app/service/spark.service';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

profileForm:FormGroup;
 userName:any;
Email:any;
 compname:any;
 compwebsite:any;
 number:any;

details:any;



  Submitted: boolean = false;
  // Qrcode  

  //https:localhost:4200/home-dashboard/myprofile/profile-dashboard
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = ""
  qrCode: any;
  gemail: any;

  phoneCode:any
  country:any;
  countryList:any
  countryName: any;
  // countryList:any = [{"id":1,"name":"USA","stdCode":"1","isoCode2":"US","isoCode3":"USA"},{"id":2,"name":"Afghanistan","stdCode":"93","isoCode2":"AF","isoCode3":"AFG"},{"id":3,"name":"Albania","stdCode":"355","isoCode2":"AL","isoCode3":"ALB"},{"id":4,"name":"Algeria","stdCode":"213","isoCode2":"DZ","isoCode3":"DZA"},{"id":5,"name":"American Samoa","stdCode":"1-684","isoCode2":"AS","isoCode3":"ASM"},{"id":224,"name":"Tuvalu","stdCode":"688","isoCode2":"TV","isoCode3":"TUV"},{"id":225,"name":"U.S. Virgin Islands","stdCode":"1-340","isoCode2":"VI","isoCode3":"VIR"},{"id":226,"name":"Uganda","stdCode":"256","isoCode2":"UG","isoCode3":"UGA"},{"id":227,"name":"Ukraine","stdCode":"380","isoCode2":"UA","isoCode3":"UKR"},{"id":228,"name":"United Arab Emirates","stdCode":"971","isoCode2":"AE","isoCode3":"ARE"},{"id":229,"name":"United Kingdom","stdCode":"44","isoCode2":"GB","isoCode3":"GBR"},{"id":230,"name":"Uruguay","stdCode":"598","isoCode2":"UY","isoCode3":"URY"},{"id":231,"name":"Uzbekistan","stdCode":"998","isoCode2":"UZ","isoCode3":"UZB"},{"id":232,"name":"Vanuatu","stdCode":"678","isoCode2":"VU","isoCode3":"VUT"},{"id":233,"name":"Vatican","stdCode":"379","isoCode2":"VA","isoCode3":"VAT"},{"id":234,"name":"Venezuela","stdCode":"58","isoCode2":"VE","isoCode3":"VEN"},{"id":235,"name":"Vietnam","stdCode":"84","isoCode2":"VN","isoCode3":"VNM"},{"id":236,"name":"Wallis and Futuna","stdCode":"681","isoCode2":"WF","isoCode3":"WLF"},{"id":237,"name":"Western Sahara","stdCode":"212","isoCode2":"EH","isoCode3":"ESH"},{"id":238,"name":"Yemen","stdCode":"967","isoCode2":"YE","isoCode3":"YEM"},{"id":239,"name":"Zambia","stdCode":"260","isoCode2":"ZM","isoCode3":"ZMB"},{"id":240,"name":"Zimbabwe","stdCode":"263","isoCode2":"ZW","isoCode3":"ZWE"}]


  constructor(private fb:FormBuilder, private api: SparkService, private router:Router, private toast:ToastrService, private _ngZone:NgZone,private spinner: NgxSpinnerService) {
    this.profileForm=this.fb.group({
      firstName:['',[Validators.required]],
      companyName:['',[Validators.required]],
      companyWebsite:['',[Validators.required]],
      phone:['',[Validators.required,Validators.pattern('[0-9 ]+')]],
      stdCode:['']
      

    

    })
   
    if(router.url == '/home-dashboard/user-profile') {
      this.api.getLatestValue(router.url); 
      this.api.content.subscribe((res:any)=>{console.log(res,'result');        
       router.routeReuseStrategy.shouldReuseRoute = () => false;
    
  }); 
  router.canceledNavigationResolution = 'computed';
  history.pushState(null, '', location.href);
window.onpopstate = function () {
   history.go(1);
};
  }
   }
   get f(){  
    return this.profileForm.controls;  
  }  


  ngOnInit(): void {

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
   this.getPhoneCode()
 if(sessionStorage.getItem('username')){
  this.userName= sessionStorage.getItem('username')

 }
 if(sessionStorage.getItem('email')){
  // this.Email= sessionStorage.getItem('email')

 }
 if (sessionStorage.getItem('email')){
  this.gemail=sessionStorage.getItem('gg')
 }

//  sessionStorage.removeItem('gg')
//  console.log(this.userName, this.Email, "kkk;k;k;k")

 console.log(this.gemail, 'k;kdfg;kl');
 
this.getScanText();

  }


  getScanText() {
    let token:any = sessionStorage.getItem('ClientSpark')
    this.value = 'https://app.giveaspark.com/home-dashboard/myquote/quote-dashboard?token='+btoa(token)

  }
  changeCountry(evt:any) {
    console.log(evt.value);
    this.countryList.filter((item:any)=>{
      if(item.name == evt.value) {
        this.countryName=evt.value
        console.log(this.countryName)
        this.phoneCode = item.stdCode
      }
    })
    console.log(this.phoneCode);
    
  }

  onSubmit(data:any){  this.Submitted = true;
    let body = {
        firstName:data.firstName,
        companyName:data.companyName,
        companyWebsite:data.companyWebsite,
        phone:data.phone,
         email:this.Email,
         stdCode:data.stdCode,
         country:this.countryName
    } 
    this.spinner.show()
    this.api.basicDetailofUser(body).subscribe((res:any)=>{
      // console.log(res, 'profile')
      this.spinner.hide()
      this.toast.success(' Details added successfully');
      this.router.navigate(['home-dashboard/basicdetails-company'])
    
    },err=>{
      this.spinner.hide()
    })
    
  }


  getbasicDetails(){
    this.api.getbasicDetaiofUseer().subscribe((res:any)=>{
this.details=res.result[0];

this.userName=res.result[0]?.firstName
this.Email=res.result[0]?.email
 this.compname=res.result[0]?.companyName
 this.compwebsite=res.result[0]?.companyWebsite
 this.number=res.result[0]?.phone
  this.phoneCode = res.result[0]?.stdCode
  if(this.countryList) {
    this.countryList.filter((item:any)=>{
      if(item?.stdCode == this.phoneCode) {
        this.country = item?.name
      }
    })
  }

// console.log(this.compwebsite, 'jojo')

console.log(this.details)
    })



  }

  getPhoneCode(){
    this.api.phoneValidation().subscribe((res:any)=>{
      this.countryList=res;
      this.getbasicDetails()

      console.log(this.countryList, 'country');
      
    })
  }
  onSelectImage(event:any){

  }

  logout() {
    // this.socialAuthService.signOut();
    sessionStorage.clear();
    this.api.isLoggedIn = false;
    this._ngZone.run(() => {
      this.router.navigate(['']);
    })

  }


  // yha chnage h




}