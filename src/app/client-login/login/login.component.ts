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
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
auth2: any;
  // @ViewChild('loginRef', { static: true }) loginElement!: ElementRef;
  // @ViewChild('loginRef', {static: true })loginElement!: ElementRef;
  LoginForm: FormGroup;

  submitted = false;
  show: any;

  Name: any;
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
private clientId = environment.clientId

  socialUser!: SocialUser;
  isLoggedin?: boolean = undefined;
  constructor(private fb: FormBuilder, private sparkService: SparkService, private _Router: Router, private toast:ToastrService, private _ngZone: NgZone,  private socialAuthService: SocialAuthService ) { 
    console.log(this.isLoggedin);

 
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


    // this.googleInitialize();
   
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(user);
      this.socialLogin(user)
     this._ngZone.run(() => {
        this._Router.navigate(['home-dashboard']);
      }) 
    });
  
    // this.googleAuthSDK();
    window.onload = () => {
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: this.clientId,
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true
      });
      // @ts-ignore
      google.accounts.id.renderButton(
      // @ts-ignore
      document.getElementById("buttonDiv"),
        { theme: "outline", size: "large", width: "100%" } 
      );
      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {});
    };
  }

  async handleCredentialResponse(response: CredentialResponse) {
    console.log(response.credential,'hghjuygtujyujy');
    console.log(response, 'kkkkkkkkkkkkkkkkkkk')
    debugger;
    await this.sparkService.LoginWithGoogle(response.credential).subscribe(
      (x:any) => {
        debugger;
        localStorage.setItem("token", x.token);
        this._ngZone.run(() => {
          this._Router.navigate(['home-dashboard']);
        })},
      (error:any) => {
          console.log(error);
        }
      );  
}



















  socialLogin(user:any) {
    let body :any ={
      token:user.authToken
    }
    console.log(body,'json');
    
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




// googleInitialize() {
//   (window as any)['googleSDKLoaded'] = () => {
//     (window as any)['gapi'].load('auth2', () => {
//       this.auth2 = (window as any)['gapi'].auth2.getAuthInstance({
//         client_id: '935459196417-oju7vlqs42s41rfame001tspj2foon4q.apps.googleusercontent.com',
//         cookie_policy: 'single_host_origin',
//         scope: 'profile email',
//         plugin_name:'Giveaspark'
//       });
//       this.prepareLogin();
//     });
//   }
//   (function(d, s, id){
//     var js, fjs = d.getElementsByTagName(s)[0] as any;
//     if (d.getElementById(id)) {return;}
//     js = d.createElement(s); js.id = id;
//     js.setAttribute('src',"https://apis.google.com/js/platform.js?onload=googleSDKLoaded");
//     fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'google-jssdk'));
// }

// prepareLogin() {
//   this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
//     (googleUser: any) => {
//       let profile = googleUser.getBasicProfile();
      
      
//       console.log('Token || ' + googleUser.getAuthResponse().id_token);
//       this.show = true;
//       this.Name =  profile.getName();
//       console.log('Image URL: ' + profile.getImageUrl());
//       console.log('Email: ' + profile.getEmail());
//       console.log(profile);
//       let data = {
//         email: profile.getEmail(),
//         firstName: profile.getName(),
//         socialId: profile.getId(),
//         isGoogle: true,
//         // isFacebook: false
//       }
//       console.log(data);
//       this.sparkService.registerSocialUser(data).subscribe
//       (
//        (successData:any) => this.success(successData),
//        (reject:any) => {
//          this.toast.error("Please Try Again");
//        }
//      );
//       // this.toastr.successToastr("Successfully logged in",'' , {toastTimeout: 2000});
//     }, (error: any) => {
//       // alert(JSON.stringify(error, undefined, 2));
//       console.log(error);
      
//       // this.toastr.errorToastr("Please Try Again");
//     });
// }








}


