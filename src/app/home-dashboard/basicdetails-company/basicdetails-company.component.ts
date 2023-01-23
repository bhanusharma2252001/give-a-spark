import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';
import { Meta, Title } from '@angular/platform-browser';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
@Component({
  selector: 'app-basicdetails-company',
  templateUrl: './basicdetails-company.component.html',
  styleUrls: ['./basicdetails-company.component.scss']
})
export class BasicdetailsCompanyComponent implements OnInit {
  basicDetails:any;
  compWebsite:any;
  useremail:any;
  userphone:any;
  username:any;
  compName:any;
  NewcompWeb:any;
  NewcompName:any;
  companyDetailForm:FormGroup;
  // socialLinksForm:FormGroup;
  url: string | ArrayBuffer | null | undefined;
  Submitted=false
  fileData = [] as any;
  fileImageName: any = '';
  isImage = true;
  uploadImage: any;
  imageData1: any;
  imageData2: any;
  details: any;
  Email: any;
  number: any;
  constructor(private api:SparkService, private fb:FormBuilder, private router:Router, private toast : ToastrService,private meta:Meta,private title: Title ) { 
    this.companyDetailForm=this.fb.group({
      companyName:['', ],
      companyWebsite: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      companyAddress:[''],  

      companyPhone:['', Validators.compose([Validators.required,Validators.pattern(
      '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})'
        )])],
      companyFax:[''],
      companyLogo:[''],
      fbProfile:[''],
      instagramProfile:[''],
      linkedInProfile:[''],  
      youtubeChannel:[''],
      twitterProfile:['',],
    })
   


  



  }
  get m(){
    return this.companyDetailForm.controls;
  }
  ngOnInit(): void {
    this.getBasicProfile();
    this.title.setTitle('Templates');

 
 

    this.getScanText()
  }
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = ""
  getScanText() {
    let token:any = sessionStorage.getItem('ClientSpark')
    this.value = 'https://app.giveaspark.com/home-dashboard/myprofile/profile-dashboard?token='+btoa(token)
    // this.router.navigateByUrl('home-dashboard/myprofile/profile-dashboard?token='+btoa(token))
  }

 getBasicProfile(){
   this.api.getbasicDetaiofUseer().subscribe((res:any)=>{
this.details=res.result;

this.username=res.result[0]?.firstName
this.Email=res.result[0]?.email
this.compName=res.result[0]?.companyName
this.compWebsite=res.result[0]?.companyWebsite
this.number=res.result[0]?.phone



console.log(this.compWebsite, 'jojo')

console.log(this.details)
  })



}
 


 onSelectImage(event: any) {
  this.Submitted=true;
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
subImageSubmit(){
  this.Submitted=true
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



onSubmit() {
  this.Submitted = true;
  let data = this.companyDetailForm.value;

  let body:any = {
    companyName: data?.companyName,
    companyWebsite: data?.companyWebsite,
    companyLogo: this.imageData2,
    
    companyPhone: data?.companyPhone,
    companyAddress: [

      {
        addressline: data.companyAddress}],
   
    fbProfile:data?.fbProfile,
    instagramProfile:data?.instagramProfile,
    linkedInProfile:data?.linkedInProfile,
    youtubeChannel:data?.youtubeChannel,
    twitterProfile:data?.twitterProfile
}
  this.api.addCompanyDetails(body).subscribe(
    (res: any) => {
      console.log(res);
      this.toast.success('submitted');
    //   // this.companyDetailForm.reset()
    //  sessionStorage.setItem('newcompanyweb',data.companyWebsite),
    //  sessionStorage.setItem('newcompanyname',data.companyName),
      this.router.navigate(["home-dashboard/basicdetails-company"])
    },
    (err: any) => {
      this.toast.error('not submitted');
      // this.toast.error(err.error.body.slice(0, 20));
    }
  );
}

 

route(){
  this.router.navigate(["home-dashboard/basic-template"])
}



// getbasicDetails(){
//   this.api.getbasicDetaiofUseer().subscribe((res:any)=>{
// this.details=res.result;

// this.userName=res.result[0]?.firstName
// // this.Email=res.result?.email
// this.compname=res.result[0]?.companyName
// this.compwebsite=res.result[0]?.companyWebsite
// this.number=res.result[0]?.phone



// console.log(this.compwebsite, 'jojo')

// console.log(this.details)
//   })



// }



}
