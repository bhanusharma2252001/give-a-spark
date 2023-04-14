import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  fieldTextType!: boolean;
  repeatFieldTextType!: boolean;
  signupForm:FormGroup;
  submitted = false;

  isLoggin = false;
  model: any;
  loggedInUserData: any;
  tokenValue: any;
  userID: any;
  roles: any;
  logindetail: any;
  loginId: any;
  emailId:any;


  isLoggedin?: boolean = undefined;
  token:any;

  constructor(private fb:FormBuilder, private sparkService:SparkService, private toast:ToastrService, private _Router:Router, private _ngZone: NgZone) { 
    this.signupForm=this.fb.group({
          firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(8),
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')  ]],
  
     
    })
  }




  ngOnInit(): void {

    // if(localStorage.getItem('email')) {
    //   this.emailId =localStorage.getItem('email') 
    // }
  }



  toggleFieldTextType(){
    this.fieldTextType = !this.fieldTextType;
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
  
  }

  // success(data: any) {
  //   // debugger
  //   this.tokenValue = data.token;
  //   if (data) {
  //     sessionStorage.setItem('ClientSpark', this.tokenValue);
  //     this.sparkService.isLoggedInAdmin();
  //     console.log(this.sparkService.isLoggedIn);
  //     // if(data?.result?.roleId == 0) {

  //       // sessionStorage.setItem('roleId', data?.result?.roleId);
  //       this._Router.navigate(['home-dashboard']);
  //     // } 
  //     // else {
  //     //   sessionStorage.setItem('roleId', data?.result?.roleId);
  //     //   this._Router.navigate(['home-dashboard/author/authordashboard'])
  //     // }
      
      
  //   }
  // }

  signup(){
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    this.model = {
      firstName: this.signupForm.value.firstName,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
    };
    console.log(this.model);
    this.sparkService.onSignup(this.model).subscribe(
      (res: any) => {
        console.log(res);
        this.toast.success('Logged in Successfully');
      alert('login Successfully')
        this.success(res);

     sessionStorage.setItem('username', this.signupForm.value.firstName)
     sessionStorage.setItem('email', this.signupForm.value.email)
        this._Router.navigate(['/']);
      },
      (error) => {
        this.toast.error('please try again');
      }
    );
  }
  success(data: any) {
    // debugger
    this.tokenValue = data.token;
    if (data) {
      sessionStorage.setItem('ClientSpark', this.tokenValue);
      this.sparkService.isLoggedInAdmin();
      console.log(this.sparkService.isLoggedIn);
     
      // else {
      //   sessionStorage.setItem('roleId', data?.result?.roleId);
      //   this._Router.navigate(['home-dashboard/author/authordashboard'])
      // }
      
      
    }
  }



}
