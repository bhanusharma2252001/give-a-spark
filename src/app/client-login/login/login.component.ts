import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from "ngx-spinner";
import {
  SocialAuthService,
  FacebookLoginProvider,
  SocialUser,
} from 'angularx-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
auth2: any;
  @ViewChild('loginRef', { static: true }) loginElement!: ElementRef;
  LoginForm: FormGroup;
googleEmail:any;

  submitted = false;

  isLoggin = false;
  model: any;
  loggedInUserData: any;
  tokenValue: any;
  userID: any;
  roles: any;
  logindetail: any;
  loginId: any;
  fieldTextType!: boolean;
  repeatFieldTextType!: boolean;

token:any;


  socialUser!: SocialUser;
  isLoggedin?: boolean = undefined;
  Email:any;
  constructor(private fb: FormBuilder, private sparkService: SparkService, private _Router: Router, private toast:ToastrService, private _ngZone: NgZone,  private socialAuthService: SocialAuthService,private spinner: NgxSpinnerService ) { console.log(this.isLoggedin);

 
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
   


  }

  ngOnInit(): void {
    setTimeout(() => { this.ngOnInit() }, 1000 * 10)
 if (sessionStorage.getItem('email'))
 this.Email=sessionStorage.getItem('email')
 sessionStorage.removeItem('email')

 
    // this.spinner.show();

    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 1000);



   
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
     this._ngZone.run(() => {
        this._Router.navigate(['home-dashboard']);
      }) 
    });
  
    this.googleAuthSDK();
    
  }

 


  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((res:any)=>{
      console.log(res,'fb result');
      let profile = res.response
      let data = {
        email: profile.email,
        firstName: profile.name,
        socialId: profile.id,
        isGoogle: false,
        isFacebook: true
      }
        this.sparkService.registerSocialUser(data).subscribe
        (
         (successData) => this.success(successData),
         (reject) => {
          console.log(reject);
          
          //  this.toastr.errorToastr("Please Try Again");
          alert(reject.error.error)
         }
       );
    });
  }
  signOut(): void {
    this.socialAuthService.signOut();
  }
 
  toggleFieldTextType(){
    this.fieldTextType = !this.fieldTextType;
  }


 
  get f() {
    return this.LoginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.LoginForm.invalid) {
      return;
    }
    this.model = {
      email: this.LoginForm.value.email,
      password: this.LoginForm.value.password,
    };
    // console.log(this.model);
    this.spinner.show()
    this.sparkService.onLogin(this.model).subscribe(
      (res: any) => {
        // console.log(res);
        this.spinner.hide()
        sessionStorage.setItem('email',this.LoginForm.value.email)
        this.toast.success('Logged in Successfully');

        this.success(res);


      },
      (error) => {
        this.toast.error('please try again');
        this.spinner.hide()
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
      console.log(this.googleEmail)
      sessionStorage.setItem('gg',this.googleEmail)
      if(data?.result?.roleId == 0) {
        sessionStorage.setItem('roleId', data?.result?.roleId);
        this._ngZone.run(() => {
              this._Router.navigate(['home-dashboard/user-profile']);
            }) 
        // this._Router.navigate(['home-dashboard']);
      } 
      // else {
      //   sessionStorage.setItem('roleId', data?.result?.roleId);
      //   this._Router.navigate(['home-dashboard/author/authordashboard'])
      // }
      
      
    }
    
  }

  logout() {
    sessionStorage.removeItem('AdminUser');
  }


// Google Login


callLogin() {  
  this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
    (googleAuthUser: any) => {
      let profile = googleAuthUser.getBasicProfile();
      // console.log('Token || ' + googleAuthUser.getAuthResponse().id_token);
      // console.log('ID: ' + profile.getId());
      // console.log('Name: ' + profile.getName());
      // console.log('Image URL: ' + profile.getImageUrl());
      // console.log('Email: ' + profile.getEmail());

      let data = {
        email: profile.getEmail(),
        firstName: profile.getName(),
        socialId: profile.getId(),
        isGoogle: true,
        isFacebook: false
      }
    
 
this.googleEmail=profile.getEmail()

        this.sparkService.registerSocialUser(data).subscribe
        (   
         (successData) => this.success(successData),
         
        
         
         (reject:any) => {
          // console.log(reject);
        
          //  this.toastr.errorToastr("Please Try Again");
          alert(reject.error.error)
         }
       );
    }, (error: any) => {
      // console.log(error);
      alert(JSON.stringify(error, undefined, 2));
    });

}
googleAuthSDK() {
  
  (<any>window)['googleSDKLoaded'] = () => {
    (<any>window)['gapi'].load('auth2', () => {
      this.auth2 = (<any>window)['gapi'].auth2.getAuthInstance({
        client_id:'538732973134-hcoh31a8sbf6t3gu2mlkngj5co0qebg8.apps.googleusercontent.com',
        plugin_name:'login',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.callLogin();
     
    });
   
  }

  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement('script');
    js.id = id;
    js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
    fjs?.parentNode?.insertBefore(js, fjs);
  }(document, 'script', 'google-jssdk'));
}


signup() {
  console.log('jkk');
  
  this._Router.navigate(['./client-login/enter-email'])
}
}


