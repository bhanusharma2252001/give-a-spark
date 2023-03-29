import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  userDetails: any;
  Email: any;
  name: any;
  compName: any;
  compWeb: any;
  number: any;
  std: any;
  userProfile: any;
  useraddress: any;
  desig: any;
  updateProfile:FormGroup;
  updatePasswordForm:FormGroup;
  fileData = [] as any;
  
  Submitted = false;
  fileImageName: any = '';
 
  url: string | ArrayBuffer | null | undefined;
  isImage = true;

  uploadImage: any;
  imageData1: any;
  imageData2: any;
  country: any;
  dob: any;
  compPhone: any;
  plandetails: any;
  currentDetails: any;
  previousDetails: any;
  today=new Date();
  constructor(private api :SparkService, private fb:FormBuilder,private toast:ToastrService, private router:Router) {
    this.updateProfile=this.fb.group({
      phone:['',[Validators.required,Validators.pattern('[0-9 ]+')]],
    companyPhone:['',Validators.pattern('[0-9 ]+')],
    companyWebsite:[''],
    companyName:[''],
    country:[''],

  profile:[''],
  DOB:[''],
  address:[''],
  designation:['']

    })
    this.updatePasswordForm=this.fb.group({
      oldPassword:['',[Validators.required]],
      newPassword:['',[Validators.required]],
      confirmPassword:['',[Validators.required]]
    },
    { 
      validators: this.password.bind(this)
    }
    )
   }
   get f() { return this.updateProfile.controls; }

  ngOnInit(): void {
    this.profileData() ;
    this.myPlans();
    this.myOrder();
  }
  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }
  profileData() {
    this.api.myProfile().subscribe((res:any)=>{
      this.userDetails = res;
      console.log(this.userDetails,'kaya');
 this.Email=res?.email     
this.dob=res?.DOB

this.desig=res?.designation
this.compName=res?.companyName
this.compWeb=res?.companyWebsite
this.number=res?.phone
this.std=res?.stdCode
this.compPhone=res?.companyPhone
this.userProfile=res?.profile
this.useraddress=res?.address[0]?.addressline1
      console.log(this.userDetails?.address[0]?.addressline1, "addddd")
      this.country=res?.country
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
  // this.spinner.show()
  this.api.addAttachments(formData).subscribe(
    (res: any) => {
      // console.log(res);
      // this.spinner.hide()
      this.imageData1 = res;
      this.imageData2 = this.imageData1[0].key;
      // console.log(this.imageData1[0].key, "image key ")
      
    },
    (err: any) => {
      // this.spinner.hide()
      console.log(err);
      
    }
  )

}
onSubmit(data:any){
  this.Submitted=true;
let body:any = {

  profile:this.imageData2?this.imageData2:this.userProfile,
 
  designation:data?.designation,
  DOB:data?.DOB,
  phone:data?.phone,
companyPhone:data?.companyPhone,
companyWebsite:data?.companyWebsite,
companyName:data?.companyName,
  address: [

    {
      addressline1: data.address,
      country: data.country,
      
    }

  ],

  
}

this.api.basicDetailofUser(body).subscribe(
  (res: any) => {
    // console.log(res);
   
    this.toast.success('submitted');
   
    // this.bannerData=null
    // this.fileData=null
    this.router.navigate(["/home-dashboard/myprofile/profile-dashboard"])
  },
  (err: any) => {
  
    this.toast.error('not submitted');
    // this.toast.error(err.error.body.slice(0, 20));
  }
);
}

password(formGroup: any) {
  let newPassword = formGroup.controls.newPassword.value
  let confirmPassword = formGroup.controls.confirmPassword.value    
  return newPassword === confirmPassword ? null : { passwordNotMatch: true };
}

changePassword(data:any){
  let body={
    email: this.Email,
    oldPassword:data?.oldPassword,
    newPassword:data?.newPassword,
    confirmPassword:data?.confirmPassword
  }
this.api.updatePass(body).subscribe((res:any)=>{
  console.log(res, 'passswooorrrd')
  this.toast.success('Password Has been updated'),{
    
  }
},
(err: any) => {
  
  this.toast.error('Please Check your Password');
  // this.toast.error(err.error.body.slice(0, 20));
})
}




myPlans(){
  this.api.getMyPlan().subscribe((res:any)=>{
this.plandetails=res?.result[0];
console.log(this.plandetails, 'planmkkgdfkg')

  })
}


navigate(){
  this.router.navigate(['home-dashboard/plan/plan-dashboard'])
}


myOrder(){
  this.api. getOrder().subscribe((res:any)=>{
    this.currentDetails=res?.currentPlan[0][0];
    this.previousDetails=res?.previousPlan;
  })
}


}
