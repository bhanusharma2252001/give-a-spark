import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-forget-email',
  templateUrl: './forget-email.component.html',
  styleUrls: ['./forget-email.component.scss']
})
export class ForgetEmailComponent implements OnInit {

  public href="string"
  forgetForm:FormGroup;

  forgetMessage:any;
  constructor(private fb:FormBuilder, private sparkService:SparkService,private toast:ToastrService,private router: Router) { 

    this.forgetForm= this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    })
  }

  ngOnInit(): void {
    this.href=this.router.url;
    console.log(this.router.url)
  }
    onSubmit(){
      let body={
        email:this.forgetForm.value.email
      }
    this.sparkService.forgetPasswordSendOtp(body).subscribe((res=>{
      localStorage.setItem('email',this.forgetForm.value.email)
        this.toast.success('A verfication code has been sent to your email')
      this.router.navigate(["client-login/forget-password/forget-otp"])
    }),  (error) => {
      // this.toast.error('please try again');
      this.toast.error(error.error.body);
    }
    )


    }

}
