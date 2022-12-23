import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';

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

  constructor(private api: SparkService,
    private fb: FormBuilder, private toast:ToastrService) {
    this.signatureDetailsForm = this.fb.group({
      yourName:[''],
      designation:[''],
      email:[''],
      phoneNo:[''],
      companyWebsite:[''],
      address:[''],
      fbProfile:[''],
      instagramProfile:[''],
      linkedInProfile:[''],
      youtubeChannel:[''],
    })
  }

  ngOnInit(): void {
    this.getBasicProfile()
  }





  getBasicProfile() {
    this.api.getbasicDetaiofUseer().subscribe((res: any) => {
      this.details = res.result;

      this.username = res.result[0]?.firstName
      this.Email = res.result[0]?.email
      this.compName = res.result[0]?.companyName
      this.compWebsite = res.result[0]?.companyWebsite
      this.number = res.result[0]?.phone



      console.log(this.compWebsite, 'jojo')

      console.log(this.details)
    })



  }




  onSubmit(data:any) {

    let body = {

      yourName:data.yourName,
      designation:data.designation,
      email:data.email,
      phoneNo:data.phoneNo,
      companyWebsite:data.companyWebsite,
      address: [
        
           { addressline: data.address,
                      addressline2: data.address,
            landmark:data.address,
            city: data.address,
            state: data.address,
            pincode: '',
            country: data.address,}
  
    ],
      fbProfile:data.fbProfile,
      instagramProfile:data.instagramProfile,
      linkedInProfile:data.linkedInProfile,
      youtubeChannel:data.youtubeChannel,   


    }



    this.api.addsignatureDetails(body).subscribe((res: any) => {
      console.log(res);
      this.toast.success('Logged in Successfully');


    },
      (error) => {
        this.toast.error('please try again');
      })
  }


  showOnPlan() {
    this.planShow == true
  }

  onClick(){


  }
}
