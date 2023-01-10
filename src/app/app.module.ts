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
// import { NgxColorsModule } from 'ngx-colors';
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
    EnterOtpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
              '601328888286-spmfslu2dh5p42u8tbg6876kquvptg0m.apps.googleusercontent.com',googleLoginOptions
              
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1172501020361882')
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
