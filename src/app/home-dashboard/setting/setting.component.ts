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
  repeatFieldTextType!:boolean;
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
      newPassword:['',[Validators.required, Validators.minLength(8),
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')  ]],
      confirmPassword:['',[Validators.required, Validators.minLength(8),
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')  ]]
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
      this.userDetails = res[0];
      console.log(this.userDetails,'kaya');
 this.Email=res[0]?.email     
this.dob=res[0]?.DOB

this.desig=res[0]?.designation
this.compName=res[0]?.companyName
this.compWeb=res[0]?.companyWebsite
this.number=res[0]?.phone
this.std=res[0]?.stdCode
this.compPhone=res[0]?.companyPhone
this.userProfile=res[0]?.profile
this.useraddress=res[0]?.address[0]?.addressline
      console.log(this.userDetails?.address[0]?.addressline, "addddd")
      this.country=res[0]?.country
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
        console.log(this.url)
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
      addressline: data.address,
      country: data.country,
      
    }

  ],

  
}

this.api.basicDetailofUser(body).subscribe(
  (res: any) => {
    // console.log(res);
   
    this.toast.success('submitted');
   this.api.updateImage.next(true)
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

ngOnDestroy() {
  this.api.updateImage.complete();

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
  
  this.toast.error(err.error.error);
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
toggleRepeatFieldTextType() {
  this.repeatFieldTextType = !this.repeatFieldTextType;
}

}
