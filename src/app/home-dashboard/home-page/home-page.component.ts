import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  details: any;
  giftForm:FormGroup;
  constructor(private spinner:NgxSpinnerService, private api:SparkService,  private fb:FormBuilder, private toast:ToastrService, private router:Router) {   
     this.giftForm=this.fb.group({
    email:['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    firstName:['',Validators.required]
  })
 }

  ngOnInit(): void {
    this.getVariable()
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

getVariable(){
  this.api.homeVariable().subscribe((res:any)=>{
    this.details=res;
    console.log(res);
    
  })
}


onSubmit(data:any){
  let body={
    firstName:data.firstName,
    email:data.email
  }
  this.api.giftForSomeOne(body).subscribe((res:any)=>{
    console.log(res)
    this.toast.success('Signature Updated Successfully');
    this.router.navigate(['/home-dashboard/plan/plan-dashboard'])

  },
  (error) => {
    this.toast.error('Please Try Again');
  })
  }
}




