import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
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
  constructor(private fb: FormBuilder, private sparkService: SparkService, private _Router: Router, private toast:ToastrService, private _ngZone: NgZone,  private socialAuthService: SocialAuthService ) { console.log(this.isLoggedin);

 
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
   


  }

  ngOnInit(): void {

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
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
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
    console.log(this.model);
    this.sparkService.onLogin(this.model).subscribe(
      (res: any) => {
        console.log(res);
        this.toast.success('Logged in Successfully');

        this.success(res);


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
      if(data?.result?.roleId == 0) {
        sessionStorage.setItem('roleId', data?.result?.roleId);
        this._Router.navigate(['home-dashboard']);
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

      sessionStorage.setItem ;

      let profile = googleAuthUser.getBasicProfile();


      console.log('Token || ' + googleAuthUser.getAuthResponse().id_token);
      console.log('ID: ' + profile.getId());
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());

      // this._Router.navigate(['home-dashboard']);
      this._ngZone.run(() => {
        this._Router.navigate(['home-dashboard']);
      })




    }, (error: any) => {
      alert(JSON.stringify(error, undefined, 2));
    });

}
googleAuthSDK() {
  
  (<any>window)['googleSDKLoaded'] = () => {
    (<any>window)['gapi'].load('auth2', () => {
      this.auth2 = (<any>window)['gapi'].auth2.getAuthInstance({
        client_id:'670734614925-ve5lmgfrjcjg37oj3scepn5tfvdga00u.apps.googleusercontent.com',
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



}


