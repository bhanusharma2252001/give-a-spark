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
  resendVisible:boolean=false;
  resendTimer:any=1;
  interval:any;
  display: string;
  constructor(private fb:FormBuilder,private toast:ToastrService, private router:Router, private sparkService:SparkService ) { 
    this.enterOtpForm= this.fb.group({
      otp:['']
    })
    
  }

  ngOnInit(): void {
   
    if(localStorage.getItem('email')) {
      this.emailId =localStorage.getItem('email') 
      this.timer()
    }
   
  }

  // timerStart() {
  //   this.interval= setInterval(()=>{
  //     this.resendTimer++
  //     if(this.resendTimer == 11) {
  //       this.resendVisible=true
  //       clearInterval(this.interval);

  //     }
  //    },1000)
  // }

  timer() {
    let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;
  
    const prefix = minute < 10 ? "0" : "";
  
    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;
  
      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;
  
      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;
  
      if (seconds == 0) {
        this.resendVisible=true
        console.log("finished");
        clearInterval(timer);
      }
    }, 1000);
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

resend(){
  let body={
    email:this.emailId
  }
this.sparkService.forgetPasswordSendOtp(body).subscribe((res=>{
  clearInterval(this.interval);
  this.resendVisible=false
  this.resendTimer =1
  this.timer()

    this.toast.success('A verfication code has been sent to your email')
}),  (error) => {
  // this.toast.error('please try again');
  this.toast.error(error.error.body);
}
)


}

ngOnDestroy() {
  if(this.interval) {
    clearInterval(this.interval);
  }
}

}
