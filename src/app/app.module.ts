import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './client-login/login/login.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { SignupComponent } from './client-login/signup/signup.component';
import { EnterEmailComponent } from './client-login/enter-email/enter-email.component';
import { EnterOtpComponent } from './client-login/enter-otp/enter-otp.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { PasswordResetComponent } from './client-login/forget-password/password-reset/password-reset.component';
import { ForgetEmailComponent } from './client-login/forget-password/forget-email/forget-email.component';
import { ForgetOtpComponent } from './client-login/forget-password/forget-otp/forget-otp.component';
// import { NgxColorsModule } from 'ngx-colors';
import { NgxSpinnerModule } from "ngx-spinner";
import { QuillModule } from 'ngx-quill';
import { SafepipePipe } from './homedashboard/pipe/safepipe.pipe';



const googleLoginOptions = {
  scope: 'profile email',
  plugin_name:'google-login' //you use any name here
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EnterEmailComponent,
    EnterOtpComponent,
    PasswordResetComponent,
    ForgetEmailComponent,
    ForgetOtpComponent,
    SafepipePipe
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule, 
    QuillModule.forRoot() ,
   
 
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      progressBar: true,
      
      progressAnimation: 'decreasing',
      closeButton: true,
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule,
    ColorPickerModule,
    // NgxColorsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '538732973134-hcoh31a8sbf6t3gu2mlkngj5co0qebg8.apps.googleusercontent.com',googleLoginOptions
              
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('896292734721717')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
// 1172501020361882