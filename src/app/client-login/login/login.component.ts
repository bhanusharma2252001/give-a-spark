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
authInstance:any;
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
  intervalId:any
token:any;


  socialUser!: SocialUser;
  isLoggedin?: boolean = undefined;
  Email:any;
  error: any;
  facebookEamil:any;
  constructor(private fb: FormBuilder, private sparkService: SparkService, private _Router: Router, private toast:ToastrService, private _ngZone: NgZone,  private socialAuthService: SocialAuthService,private spinner: NgxSpinnerService ) { console.log(this.isLoggedin);

 
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
    
    sessionStorage.removeItem('ClientSpark')


  }

  ngOnInit(): void {
    // setTimeout(() => { this.getData()
    // this.googleAuthSDK();}, 1000 * 10)
 if (sessionStorage.getItem('email')) {
  this.Email=sessionStorage.getItem('email')
 }
//  sessionStorage.removeItem('email')

//  this.isLoggedInAdmin();
    // this.spinner.show();

    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 1000);



   
    
    this.getData()
    // this.intervalId =  setInterval(() => {
      this.googleAuthSDK();
      // console.log('google login')}, 1000);


 }
 ngOnDestroy() {
  // if(this.intervalId){
  //  clearInterval(this.intervalId); // clear the interval on component destruction

  // }
 }
  getData() {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
     this._ngZone.run(() => {
        this._Router.navigate(['home-dashboard']);
      }) 
    });
  }

 

  // photoUrl
  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((res:any)=>{
      console.log(res,'fb result');
      let details = res.response
      let data = {
        email: details.email,
        firstName: details.name,
        socialId: details.id,
        profile:details.photoUrl,
        isGoogle: false,
        isFacebook: true,
        
      }
      this.facebookEamil= details.email
      console.log(data, 'ffffffffff');
      
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
      error => {
        
        this.error = error.error; 
        console.log(error,'error')
        console.log(this.error, 'this error')
        this.toast.error(this.error.error);
        this.spinner.hide();
      })
      
   

  }

  success(data: any) {
    // debugger
    this.tokenValue = data.token;
    if (data) {

      sessionStorage.setItem('ClientSpark', this.tokenValue);
      localStorage.setItem('ClientSpark', this.tokenValue);
      this.sparkService.isLoggedInAdmin();
      console.log(this.sparkService.isLoggedIn);
      console.log(this.googleEmail)
      sessionStorage.setItem('gg',this.googleEmail)
      sessionStorage.setItem('gg',this.facebookEamil)
      if(data?.result?.roleId == 0) {
        sessionStorage.setItem('roleId', data?.result?.roleId);
        // this._ngZone.run(() => {
              this.getbasicDetails()
            // }) 
        // this._Router.navigate(['home-dashboard']);
      } 
      // else {
      //   sessionStorage.setItem('roleId', data?.result?.roleId);
      //   this._Router.navigate(['home-dashboard/author/authordashboard'])
      // }
      this.spinner.show();

      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      
    }
    
  }

  getbasicDetails(){
    this.sparkService.getbasicDetaiofUseer().subscribe((res:any)=>{
let userDetail=res.result[0];
      if(userDetail?.firstName && userDetail?.email && userDetail?.companyName && userDetail?.companyWebsite && userDetail?.phone && userDetail?.stdCode) {
       
        this._ngZone.run(() => {
          this._Router.navigate(['home-dashboard/home-page']);
        }) 

      } else {
        this._ngZone.run(() => {
          this._Router.navigate(['home-dashboard/user-profile']);
        }) 
     
      }
    })



  }

  logout() {
    sessionStorage.removeItem('ClientSpark');
    localStorage.removeItem('AdminUser');
  }


// Google Login


callLogin() {  
 
  this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
    (googleAuthUser: any) => {
    
      let details = googleAuthUser.getBasicProfile();
      console.log("this.auth2",this.auth2);
      
      const currentUser = this.auth2.currentUser.get();
      console.log("currentUser",currentUser);
      // Request restricted scopes
      currentUser.grant({
        'scope': 'https://www.googleapis.com/auth/gmail.settings.basic'
      }).then((response:any) => {
        // Scopes granted successfully
        console.log('Scopes granted successfully:', response);
      }, (error:any) => {
        // Error occurred while granting scopes
        console.error('Error occurred while granting scopes:', error);
      });

      // console.log('Token || ' + googleAuthUser.getAuthResponse().id_token);
      // console.log('ID: ' + profile.getId());
      // console.log('Name: ' + profile.getName());
      // console.log('Image URL: ' + profile.getImageUrl());
      // console.log('Email: ' + profile.getEmail());
console.log(details, 'goooooogle')
      let data = {
        email: details.getEmail(),
        firstName: details.getName(),
        socialId: details.getId(),
        profile:details.getImageUrl(),

        isGoogle: true,
        isFacebook: false
      }
    
 
this.googleEmail=details.getEmail()

        this.sparkService.registerSocialUser(data).subscribe
        (   
         (successData) => this.success(successData),
         
        
         
         (reject:any) => {
          // console.log(reject);
        
          //  this.toastr.errorToastr("Please Try Again");
          this.toast.error(reject.error.error)
         }
       );
      //  console.log(successData );
       
    }, (error: any) => {
      // console.log(error);
      alert(JSON.stringify(error, undefined, 2));
    });

}

googleAuthSDK() {
  
  (<any>window)['googleSDKLoaded'] = () => {
    (<any>window)['gapi'].load('auth2', () => {
      this.auth2 = (<any>window)['gapi'].auth2.getAuthInstance({
        client_id:'314583230343-p4lviak4saq374tr9bqld4kuhdceedat.apps.googleusercontent.com',
        plugin_name:'login',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      
      console.log("this.auth2",this.auth2);
      
      // this.callLogin();
     
    });
   
  }
  // 538732973134-hcoh31a8sbf6t3gu2mlkngj5co0qebg8.apps.googleusercontent.com
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
requestRestrictedScopes() {
  // Get the Google Auth2 instance
  console.log("auth", this.auth2);
  
  if (!this.auth2) {
    console.log('Google Auth2 library not yet loaded');
    return;
  }
  const currentUser = this.auth2.currentUser.get();
  // Request restricted scopes
  currentUser.grant({
    'scope': 'profile email https://www.googleapis.com/auth/gmail.settings.basic'
  }).then((response:any) => {
    // Scopes granted successfully
    let details = response.getBasicProfile();
    console.log(details, 'detail of email')
    console.log('Scopes granted successfully:', response);
    let data = {
      email: details.getEmail(),
      firstName: details.getName(),
      socialId: details.getId(),
      profile:details.getImageUrl(),

      isGoogle: true,
      isFacebook: false
    }
  

this.googleEmail=details.getEmail()

      this.sparkService.registerSocialUser(data).subscribe
      (   
       (successData) => this.success(successData),
       
      
       
       (reject:any) => {
        // console.log(reject);
      
        //  this.toastr.errorToastr("Please Try Again");
        this.toast.error(reject.error.error)
       }
     );
    //  console.log(successData );
     
  }, (error: any) => {
    // console.log(error);
    this.toast.error(JSON.stringify(error, undefined, 2));
  });
  // }, (error:any) => {
  //   // Error occurred while granting scopes
  //   console.error('Error occurred while granting scopes:', error);
  // });
}



}

