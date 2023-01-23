import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { max, merge } from 'rxjs';
import { SparkService } from 'src/app/service/spark.service';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
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



  constructor(private fb:FormBuilder, private api: SparkService, private router:Router, private toast:ToastrService, private _ngZone:NgZone) {
    this.profileForm=this.fb.group({
      firstName:[''],
      companyName:[''],
      companyWebsite:[''],
      phone:['', Validators.compose([Validators.required,Validators.pattern(
        '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})'
          )])]
      

    

    })
   

   }
   get f(){  
    return this.profileForm.controls;  
  }  


  ngOnInit(): void {
   this.getbasicDetails()
 if(sessionStorage.getItem('username')){
  this.userName= sessionStorage.getItem('username')

 }
 if(sessionStorage.getItem('email')){
  this.Email= sessionStorage.getItem('email')

 }
 console.log(this.userName, this.Email, "kkk;k;k;k")

 
this.getScanText();
this.qrCodeByApi();
  }


  getScanText() {
    let token:any = sessionStorage.getItem('ClientSpark')
    this.value = 'https://app.giveaspark.com/home-dashboard/myprofile/profile-dashboard?token='+btoa(token)
    // this.router.navigateByUrl('home-dashboard/myprofile/profile-dashboard?token='+btoa(token))
  }

  onSubmit(data:any){  this.Submitted = true;
    let body = {
        firstName:data.firstName,
        companyName:data.companyName,
        companyWebsite:data.companyWebsite,
        phone:data.phone,
         email:this.Email,
         
    } 
    this.api.basicDetailofUser(body).subscribe((res:any)=>{
      console.log(res, 'profile')
      this.toast.success(' Details added successfully');
      this.router.navigate(['home-dashboard/basicdetails-company'])
      // sessionStorage.setItem('website', data.companyWebsite)
      // sessionStorage.setItem('phone', data.phone)
      // sessionStorage.setItem('compname', data.companyName)
    })
    
  }


  getbasicDetails(){
    this.api.getbasicDetaiofUseer().subscribe((res:any)=>{
this.details=res.result;

this.userName=res.result[0]?.firstName
// this.Email=res.result?.email
 this.compname=res.result[0]?.companyName
 this.compwebsite=res.result[0]?.companyWebsite
 this.number=res.result[0]?.phone



console.log(this.compwebsite, 'jojo')

console.log(this.details)
    })



  }


  logout() {
    // this.socialAuthService.signOut();
    sessionStorage.clear();
    this.api.isLoggedIn = false;
    this._ngZone.run(() => {
      this.router.navigate(['']);
    })

  }

qrCodeByApi(){
  this.api.getQrCode().subscribe((res:any)=>{
    this.qrCode=res;
    console.log(this.qrCode)

  })
}
}