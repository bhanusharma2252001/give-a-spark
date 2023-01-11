import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private api: SparkService, private router:Router, private fb:FormBuilder, private toast:ToastrService) { 
    this.profileUpdate=this.fb.group({

      firstName:['', ],
      email:[''],
      phone:[''],
      designation:[''],
      address:[''],
         country:[''],

DOB:[''],
yourBio:[''],
profile:['']


      
    })
  }

  details: any;
  ngOnInit(): void {
    this.getbasicDetails();

  }
  getbasicDetails() {
    this.api.getbasicDetaiofUseer().subscribe((res: any) => {
      this.details = res.result;

      this.userName = res.result[0]?.firstName
      // this.Email=res.result?.email
      this.compname = res.result[0]?.companyName
      this.compwebsite = res.result[0]?.companyWebsite
      this.number = res.result[0]?.phone



      console.log(this.compwebsite, 'jojo')

      console.log(this.details)
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
  let body:any = {
    firstName: data?.firstName,
    description: data?.description,
    profile: this.imageData2,
    email:data.email,
    designation:data?.designation,
    DOB:data?.DOB,
    phone:data?.phone,
    address:[data?.companyAddress ],
    country:[data?.companyAddress ]
    
}
 
  this.api.basicDetailofUser(body).subscribe(
    (res: any) => {
      // console.log(res);
     
      this.toast.success('submitted');
     
      // this.bannerData=null
      // this.fileData=null
      // this.router.navigate(["home-dashboard/category/categorydashboard"])
    },
    (err: any) => {
    
      this.toast.error('not submitted');
      // this.toast.error(err.error.body.slice(0, 20));
    }
  );
}
}
  