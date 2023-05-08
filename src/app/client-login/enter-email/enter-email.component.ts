import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-enter-email',
  templateUrl: './enter-email.component.html',
  styleUrls: ['./enter-email.component.scss']
})
export class EnterEmailComponent implements OnInit {
  enterEmail:FormGroup

  forgetMessage:any;
  constructor(private fb:FormBuilder, private sparkService:SparkService,private toast:ToastrService,private router: Router) { 

    this.enterEmail= this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    })
  }

  ngOnInit(): void {

  }
  
    onSubmit(){
      let body={
        email:this.enterEmail.value.email
      }
    this.sparkService.enterEmailForVerify(body).subscribe((res=>{
      sessionStorage.setItem('email',this.enterEmail.value.email)
        this.toast.success('A verfication code has been sent to your email')
      this.router.navigate(["client-login/enter-otp"])
    }),  (error) => {
      console.log(error.error.error, 'erroro')
  
      this.toast.error(error.error.body);
    }
    )


    }

}
