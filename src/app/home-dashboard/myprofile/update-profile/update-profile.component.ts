import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  userName: any;
  compname: any;
  compwebsite: any;
  number: any;
  profileUpdate:FormGroup;



  fileData = [] as any;
  
  Submitted = false;
  fileImageName: any = '';
 
  url: string | ArrayBuffer | null | undefined;
  isImage = true;

  uploadImage: any;
  imageData1: any;
  imageData2: any;
  designation: any;
  addr: any;
  Email: any;
  yBio: any;
  countryName: any;
  maxDate: string;

  constructor(private api: SparkService, private router:Router, private fb:FormBuilder, private spinner:NgxSpinnerService,private toast:ToastrService) { 
    this.profileUpdate=this.fb.group({

      firstName:['', ],
      email:[''],
      phone:['',[Validators.required,Validators.pattern('[0-9 ]+')]],
      designation:[''],
      address:[''],
         country:[''],

DOB:[''],
yourBio:[''],
profile:['']


      
    })
  }
  get f() { return this.profileUpdate.controls; }



  public noWhitespaceValidator(control: FormGroup) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}
  details: any;
  ngOnInit(): void {
    this.getbasicDetails();
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

  }
  getbasicDetails() {
    this.api.getbasicDetaiofUseer().subscribe((res: any) => {
      this.details = res.result[0];

      this.userName = res.result[0]?.firstName
      this.Email=res.result[0].email
      this.compname = res.result[0]?.companyName
      this.compwebsite = res.result[0]?.companyWebsite
      this.number = res.result[0]?.phone
this.addr=res.result[0]?.address[0]?.addressline1
this.designation=res.result[0]?.designation
this.yBio=res.result[0]?.yourBio
this.countryName=res.result[0]?.country
      console.log(this.compwebsite, 'jojo')

      console.log(this.details),
      console.log(this.details?.address[0]?.addressline1, "ipoeritperi");
      
    })}


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
  this.Submitted=true
  let body:any = {
    firstName: data?.firstName,
    description: data?.description,
    profile: this.imageData2,
    email:data.email,
    designation:data?.designation,
    DOB:data?.DOB,
    phone:data?.phone,
    yourBio:data?.yourBio,
    address: [

      {
        addressline1: data.address,
        country: data.country,
        
      }

    ],
    // address: [

    //   {
    //     country: data.country,
        
    //   }

    // ]
    
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










getToday(): string {
  return new Date().toISOString().split('T')[0]
}
}
  
