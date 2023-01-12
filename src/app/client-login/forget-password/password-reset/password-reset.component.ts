import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  resetPasswordForm:FormGroup
  emailId: any | null;
  // hide:boolean = true;
  // hide1!:boolean;
  fieldTextType!:boolean;
  repeatFieldTextType!:boolean;
  constructor(private fb:FormBuilder,private toast:ToastrService,private sparkservice:SparkService,private router:Router ) { 
    this.resetPasswordForm = this.fb.group({
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]]
    },{ 
      validators: this.password.bind(this)
    })
  }

  password(formGroup: any) {
    let password = formGroup.controls.password.value
    let confirmPassword = formGroup.controls.confirmPassword.value    
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  ngOnInit(): void {
    if(localStorage.getItem('email')) {
      this.emailId =localStorage.getItem('email') 
    }
  }

  get f() { return this.resetPasswordForm.controls; }

  submit() {
    let body = {
      email: this.emailId,
      password: this.resetPasswordForm.value.password,
    };

    this.sparkservice.resetPassword(body).subscribe((res:any)=>{
      console.log(res);
      this.toast.success('Your password is sucessfully reset')
      this.router.navigate(['./client-login/login'])
    },err=>{
      
    })
  }

  // passwordCheck() {
  //   this.hide = !this.hide;
  // }

  // passwordCheck1() {
  //   this.hide1 = !this.hide1;
  // }
  
  ngOnDestroy() {
    if(localStorage.getItem('email')) {
      localStorage.removeItem('email')
    }
  }


  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }


}
