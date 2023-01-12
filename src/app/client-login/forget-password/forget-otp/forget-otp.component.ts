import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-forget-otp',
  templateUrl: './forget-otp.component.html',
  styleUrls: ['./forget-otp.component.scss']
})
export class ForgetOtpComponent implements OnInit {

  enterOtpForm:FormGroup;
  emailId:any



  constructor(private fb:FormBuilder,private toast:ToastrService, private router:Router, private sparkService:SparkService ) { 
    this.enterOtpForm= this.fb.group({
      otp:['']
    })
    
  }

  ngOnInit(): void {
   
    if(localStorage.getItem('email')) {
      this.emailId =localStorage.getItem('email') 
    }
   
  }

otpSubmit(){
 let body={
    otp: this.enterOtpForm.value.otp,
    email:this.emailId
 }
 this.sparkService.enterOtp(body).subscribe((res:any)=>{
  this.toast.success('otp submit')
  this.router.navigate(['client-login/forget-password/password-reset'])
 },err=>{
  this.toast.error(err.error.body);
 })
}

}