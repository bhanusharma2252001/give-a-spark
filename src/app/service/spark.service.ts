import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
/// <reference types="chrome"/>
// import * as chrome from 'chrome';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SparkService {
  [x: string]: any;
  public content = new BehaviorSubject<any>(null);

  private logoutSubject = new Subject<void>();
  email: any;
  token: any;
  isLoggedIn = false;
  updateImage = new Subject()
  closeQuotes= new Subject()
  closeMyQuotes = new Subject()
  // private path = environment.apiUrl
  constructor(private http: HttpClient) {
    console.log(environment);
   
    this.token = localStorage.getItem('ClientSpark')
    this.token = sessionStorage.getItem('ClientSpark');
    console.log(this.token)
    if (sessionStorage.getItem('email')) {
      this.email = sessionStorage.getItem('email')
    }
    else if (sessionStorage.getItem('ff')) {
      this.email = sessionStorage.getItem('ff')
    }
    else if (sessionStorage.getItem('gg')) {
      this.email = sessionStorage.getItem('gg')
    }
    console.log(this.email, 'email for gmail')
    window.addEventListener('storage', this.handleStorageEvent, false);
    this.requestSyncSessionStorage();
  
  
  }
  requestSyncSessionStorage(): void {
    if (!sessionStorage.length) {
      const current = new Date().toLocaleTimeString();
      localStorage.setItem(
        'requestSyncSessionStorage',
        'request session storage' + current
      );
    }
  }
  handleStorageEvent = (event: StorageEvent): void => {
    if (event.key === 'requestSyncSessionStorage') {
      localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
      localStorage.removeItem('sessionStorage');
    } else if (event.key === 'sessionStorage') {
      const sessionStorage = JSON.parse(event.newValue || '{}');
      for (const key in sessionStorage) {
        window.sessionStorage.setItem(key, sessionStorage[key]);
      }
    } else if (event.key === 'CREDENTIALS_FLUSH') {
      window.sessionStorage.clear()
    }
  };

  logOutTab(){
    sessionStorage.clear();
    localStorage.clear();
    this.logoutSubject.next();
  }
  ngOnDestroy(): void {
    window.removeEventListener('storage', this.handleStorageEvent, false);
  }
  getLogoutObservable() {
    return this.logoutSubject.asObservable();
  }
  getLatestValue(data: any) {
    this.content.next(data);
  }
  isLoggedInAdmin() {
    this.token = localStorage.getItem('ClientSpark')
    this.token = sessionStorage.getItem('ClientSpark');

    if (this.token) {
      return (this.isLoggedIn = true);
    } else {
      return false;
    }
  }




  onLogin(data: any): Observable<any> {
    return this.http.post(environment.localApiURL + '/api/user/login', data);
  }


  onSignup(data: any): Observable<any> {
    return this.http.post(environment.localApiURL + '/api/user/register', data);
  }
  //  GOOGLE LOGIN


  public signOutExternal = () => {
    localStorage.removeItem("token");
    console.log("token deleted")
  }

  LoginWithGoogle(credentials: string): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.post(environment.localApiURL + '/api/user/socialLogin', JSON.stringify(credentials), { headers: header });
  }


  registerSocialUser(data: any): Observable<any> {
    return this.http.post(environment.localApiURL + '/api/user/socialLogin', data);
  }
  // email verfication

  enterEmailForVerify(data: any): Observable<any> {
    return this.http.post(environment.localApiURL + '/api/user/sendOTP', data)

  }
  enterOtp(data: any): Observable<any> {
    return this.http.post(environment.localApiURL + '/api/user/emailVerify', data)

  }
  // forget password

  forgetPasswordSendOtp(data: any): Observable<any> {
    return this.http.post(environment.localApiURL + '/api/user/sendOTPForForgotPassword', data)

  }
  // email verify
  enterOtpforForget(data: any): Observable<any> {
    return this.http.post(environment.localApiURL + '/api/user/emailVerify', data)

  }
  //reset password api
  resetPassword(data: any) {
    return this.http.put(environment.localApiURL + '/api/user/forgetPassword', data)

  }





  // userProfile

  basicDetailofUser(data: any): Observable<any> {
    return this.http.put(environment.localApiURL + '/api/template/emailSignatureBasicDeatils', data,
      {
        headers: { Authorization: `bearer ${this.token}` },
      });
  }

  getbasicDetaiofUseer() {
    return this.http.get(environment.localApiURL + '/api/template/getTemplate', {
      headers: { Authorization: `bearer ${this.token}` },
    });
  }

  // api/template/getTemplate
  // homePage 

  getAllQuotesList() {
    return this.http.get(environment.localApiURL + '/api/Quotes/getQuotes', {
      headers: { Authorization: `bearer ${this.token}` },
    });
  }

  // basicCompanyDetails

  addAttachments(data: any) {
    return this.http.post(environment.localApiURL + '/api/user/uploadAttachement', data)
    // {
    //   headers: { Authorization: `bearer ${this.token}` },
    // }
  }

  addCompanyDetails(data: any) {
    return this.http.put(environment.localApiURL + '/api/template/companyDetails', data,
      {
        headers: { Authorization: `bearer ${this.token}` },
      }
    );
  }
  // signatureDetails--basicTemplates api/template/createLimitTemplate

  addsignatureDetails(data: any) {
    return this.http.post(environment.localApiURL + '/api/template/createLimitTemplate', data,
      {
        headers: { Authorization: `bearer ${this.token}` },
      }
    );
  }
  getsignatureDetails() {
    return this.http.get(environment.localApiURL + '/api/template/getTemplateByUser', {
      headers: { Authorization: `bearer ${this.token}` },
    });
  }

  //  My quote Create
  addQuote(data: any) {
    return this.http.post(environment.localApiURL + '/api/Quotes/createQuotesByUser', data,
      {
        headers: { Authorization: `bearer ${this.token}` },
      }
    );
  }
  getMyQuotes() {
    return this.http.get(environment.localApiURL + '/api/Quotes/myQuotes', {
      headers: { Authorization: `bearer ${this.token}` },
    });
  }

  delMyQuote(id:any){
    return this.http.delete(environment.localApiURL + '/api/Quotes/deleteMyQuotesById?id=' + id, {
      headers: { Authorization: `bearer ${this.token}` },
    })
  }
  updateQuotes(id:any, data:any){
    return this.http.put(environment.localApiURL + '/api/Quotes/updateMyQuotesById?id=' + id, data,{
      headers: { Authorization: `bearer ${this.token}` },
    })
  }

  //  My Story


  addMyStory(data: any) {
    return this.http.post(environment.localApiURL + '/api/Stories/createStoriesByUser', data,
      {
        headers: { Authorization: `bearer ${this.token}` },
      }
    );
  }

  getMyStory() {
    return this.http.get(environment.localApiURL + '/api/Stories/myStories', {
      headers: { Authorization: `bearer ${this.token}` },
    });
  }

delMyStory(id:any){
    return this.http.delete(environment.localApiURL + '/api/Stories/deleteMyStoriesById?id=' + id, {
      headers: { Authorization: `bearer ${this.token}` },
    })
  }

  updateStory(id:any, data:any){
    return this.http.put(environment.localApiURL + '/api/Stories/updateMyStoriesById?id=' + id,data, {
      headers: { Authorization: `bearer ${this.token}` },
    })
  }

  // Motivational Quotes

  getCategoryList(): Observable<any> {
    return this.http.get(environment.localApiURL + '/api/categories/getAllCategories', {
      headers: {
        Authorization: `bearer ${this.token}`
      },
    });
  }

  getSubCategoryList(id: any): Observable<any> {
    return this.http.get(environment.localApiURL + '/api/categories/subCat?id=' + id, {
      headers: {
        Authorization: `bearer ${this.token}`
      },
    });
  }



  getSubSubCat(id: any) {
    return this.http.get(environment.localApiURL + '/api/categories/getSubCategories/' + id, {
      headers: { Authorization: `bearer ${this.token}` },
    });
  }


  motivaionalQuotebyFilter(data: any) {
    return this.http.post(environment.localApiURL + '/api/Quotes/motivationalFilterQuotesByCat', data,
      {
        headers: { Authorization: `bearer ${this.token}` },
      }
    );
  }
  motivaionalStorybyFilter(data: any) {
    return this.http.post(environment.localApiURL + '/api/Stories/motivationalFiterStoriesByCat', data,
      {
        headers: { Authorization: `bearer ${this.token}` },
      }
    );
  }



  // planpurchase
  makePayment(data: any): Observable<any> {


    return this.http.post(environment.localApiURL + '/api/stripe/checkout', data,
      {
        headers: { Authorization: `bearer ${this.token}` }
      }
    );
  }





  // My Plan




  getMyPlan() {
    return this.http.get(environment.localApiURL + '/api/plan/myPlans', {
      headers: { Authorization: `bearer ${this.token}` },
    });
  }




  //  basic temoplate

  getQuoteById() {
    return this.http.get(environment.localApiURL + '/api/Quotes/getQuotes', {
      headers: { Authorization: `bearer ${this.token}` },
    });


  }




  myProfile() {
    return this.http.get(environment.localApiURL + '/api/user/getProfile', {
      headers: { Authorization: `bearer ${this.token}` },
    });

  }



  // for QR code

  getUserProfile(token: any) {
    return this.http.get(environment.localApiURL + '/api/user/getProfile', {
      headers: { Authorization: `bearer ${token}` },
    });
  }



  // GET QR CODE FROM BACKEND


  getQrCode() {
    return this.http.get(environment.localApiURL + '/api/template/generateQrCode', {
      headers: { Authorization: `bearer ${this.token}` },
    });
  }





  // TEMPLATES

  templateCustomize(id: any, data: any) {
    return this.http.post(environment.localApiURL + '/api/TemplateCustomization/createTemplateCustomization?templateId=' + id, data,
      {
        headers: { Authorization: `bearer ${this.token}` },
      }
    );
  }

  getdesign() {
    return this.http.get(environment.localApiURL + '/api/TemplateCustomization/TemplateCustomizationList', {
      headers: { Authorization: `bearer ${this.token}` },
    });
  }


  // Templates Edit For Free

  getFreeTemp() {
    return this.http.get(environment.localApiURL + '/api/freeTemplate/getFreeTemplateList', {
      headers: { Authorization: `bearer ${this.token}` },
    });
  }

  FreeTempById(id: any) {

    return this.http.get(environment.localApiURL + '/api/freeTemplate/getTemplateById/' + id, {
      headers: { Authorization: `bearer ${this.token}` },
    })
  }




  updateFreeTemp(id: any, body: any) {
    return this.http.put(environment.localApiURL + '/api/freeTemplate/UpdateFreeTemplateById/' + id, body, {
      headers: { Authorization: `bearer ${this.token}` },


    });

  }





  // Pro Plus
  getProTemp() {
    return this.http.get(environment.localApiURL + '/api/freeTemplate/getProTemplateList', {
      headers: { Authorization: `bearer ${this.token}` },
    });

  }
  phoneValidation() {
    return this.http.get(environment.localApiURL + '/api/user/getMobileValidation', {
      headers: { Authorization: `bearer ${this.token}` },
    })
  }

  updateTemplate(id: any, body: any) {
    return this.http.put(environment.localApiURL + '/api/template/updateTemplate/' + id, body, {
      headers: { Authorization: `bearer ${this.token}` },
    });
    console.log(this.token, 'ks');
  }


  getProTemplates() {
    return this.http.get(environment.localApiURL + '/api/freeTemplate/getTemplatePro1List', {
      headers: { Authorization: `bearer ${this.token}` },
    });
  }

  updateCreateTemplate(id: any, body: any) {
    return this.http.put(environment.localApiURL + '/api/template/updateOnTemplate/' + id, body, {
      headers: { Authorization: `bearer ${this.token}` },
    });
  }


  //  gAMIL /


  gmail(data: any) {
    return this.http.post(environment.localApiURL + '/api/user/setSignature?email=${email}', data,
      {
        headers: { Authorization: `bearer ${this.token}` }
      }
    );
  }
  //  ---------Outlook-------






  outlook(data: any) {
    return this.http.post(environment.localApiURL + '/api/user/setSignatureOnOutlook', data,
      {
        headers: { Authorization: `bearer ${this.token}` }
      }
    );
  }




  yahoo(data: any) {
    return this.http.post(environment.localApiURL + '/api/user/setSignatureOnYahoo', data,
      {
        headers: { Authorization: `bearer ${this.token}` }
      }
    );
  }
  //  O R D E R   HISTORY

  getOrder() {
    return this.http.get(environment.localApiURL + '/api/plan/myOrderhistory', {
      headers: { Authorization: `bearer ${this.token}` },
    });
  }



  // Delete Logo


  // removeLogo(id:any,body:any){
  //   return this.http.delete(environment.localApiURL + '/api/template/deleteLogoById/'+id,body,{
  //     headers: { Authorization: `bearer ${this.token}` },});
  // }

  removeLogo(id: any) {
    return this.http.get(environment.localApiURL + '/api/template/deleteLogoById/' + id, {
      headers: { Authorization: `bearer ${this.token}` },
    })
  }
  removeSignatureLogo(id: any) {
    return this.http.get(environment.localApiURL + '/api/freeTemplate/deleteLogoById/' + id, {
      headers: { Authorization: `bearer ${this.token}` },
    })
  }






  updatePass(body: any) {
    return this.http.put(environment.localApiURL + '/api/user/changePassword', body,
      {
        headers: { Authorization: `bearer ${this.token}` }
      }
    );
  }
  homeVariable() {
    return this.http.get(environment.localApiURL + '/api/user/clientHomePageVariable'

      , {
        headers: { Authorization: `bearer ${this.token}` },
      })
  }


  giftForSomeOne(data: any) {
    return this.http.post(environment.localApiURL + '/api/stripe/byPackageForSomeone', data,
      {
        headers: { Authorization: `bearer ${this.token}` }
      }
    );
  }




  // ------------del template-----------


  delTemplate(id: any) {
    return this.http.delete(environment.localApiURL + '/api/template/deleteTemplateById/' + id, {
      headers: { Authorization: `bearer ${this.token}` },
    })
  }

  createTicket(data: any): Observable<any> {
    return this.http.post(environment.localApiURL + '/api/Ticket/createTickets', data, {
      headers: {
        Authorization: `bearer ${this.token}`,
      },
    });
  }

  updateTicket(id: any, data: any): Observable<any> {
    return this.http.put(environment.localApiURL + '/api/Ticket/updateTicketById/' + id, data, {
      headers: {
        Authorization: `bearer ${this.token}`,
      },
    });
  }

  deleteTicket(id: any): Observable<any> {
    return this.http.delete(environment.localApiURL + '/api/Ticket/deleteTicketById/' + id, {
      headers: {
        Authorization: `bearer ${this.token}`,
      },
    });
  }

  getTicketList(): Observable<any> {
    return this.http.get(environment.localApiURL + '/api/Ticket/getTicketListByUser', {
      headers: {
        Authorization: `bearer ${this.token}`
      },
    });
  }

  getTicketbyId(id: any): Observable<any> {
    return this.http.get(environment.localApiURL + '/api/Ticket/getTicketById/' + id, {
      headers: {
        Authorization: `bearer ${this.token}`
      },
    });
  }

  // -----------------------Delete app------------------------

  delyouTube(id: any): Observable<any> {
    return this.http.delete(environment.localApiURL + '/api/template/deleteYouTubeById/' + id, {
      headers: {
        Authorization: `bearer ${this.token}`,
      },
    });
  }
  delFooter(id: any): Observable<any> {
    return this.http.delete(environment.localApiURL + '/api/template/deleteGreenFooterAndIconById/' + id, {
      headers: {
        Authorization: `bearer ${this.token}`,
      },
    });
  }
  deldesclaimer(id: any): Observable<any> {
    return this.http.delete(environment.localApiURL + '/api/template/deleteDisclaimerById/' + id, {
      headers: {
        Authorization: `bearer ${this.token}`,
      },
    });
  }


  delGallery(id: any): Observable<any> {
    return this.http.delete(environment.localApiURL + '/api/template/deleteCustomProfileById/' + id, {
      headers: {
        Authorization: `bearer ${this.token}`,
      },
    });
  }

  delBanner(id: any): Observable<any> {
    return this.http.delete(environment.localApiURL + '/api/template/deleteBannerById/' + id, {
      headers: {
        Authorization: `bearer ${this.token}`,
      },
    });
  }

  delSchedule(id: any): Observable<any> {
    return this.http.delete(environment.localApiURL + '/api/template/deleteScheduleById/' + id, {
      headers: {
        Authorization: `bearer ${this.token}`,
      },
    });
  }

  delEvent(id: any): Observable<any> {
    return this.http.delete(environment.localApiURL + '/api/template/deleteEventById/' + id, {
      headers: {
        Authorization: `bearer ${this.token}`,
      },
    });
  }
  delApp(id: any): Observable<any> {
    return this.http.delete(environment.localApiURL + '/api/template/deleteAppById/' + id, {
      headers: {
        Authorization: `bearer ${this.token}`,
      },
    });
  }
  delcustom(id: any): Observable<any> {
    return this.http.delete(environment.localApiURL + '/api/template/deleteCustomButtonById/' + id, {
      headers: {
        Authorization: `bearer ${this.token}`,
      },
    });
  }

// -----------------------Del pro plus app------------------------


delProBanner(id: any){
  return this.http.delete(environment.localApiURL + '/api/freeTemplate/deleteBannerById/' + id, {
    headers: {
      Authorization: `bearer ${this.token}`,
    },
  });

}

delProYouTube(id: any){
  return this.http.delete(environment.localApiURL + '/api/freeTemplate/deleteYouTubeById/' + id, {
    headers: {
      Authorization: `bearer ${this.token}`,
    },
  })};

  delProEvent(id: any){
    return this.http.delete(environment.localApiURL + '/api/freeTemplate/deleteEventById/' + id, {
      headers: {
        Authorization: `bearer ${this.token}`,
      },
    });

}


delProDesclaimer(id: any){
  return this.http.delete(environment.localApiURL + '/api/freeTemplate/deleteDisclaimerById/' + id, {
    headers: {
      Authorization: `bearer ${this.token}`,
    },
  });

}

delProCustombutton(id: any){
  return this.http.delete(environment.localApiURL + '/api/freeTemplate/deleteCustomButtonById/' + id, {
    headers: {
      Authorization: `bearer ${this.token}`,
    },
  });

}


delAppLink(id: any){
  return this.http.delete(environment.localApiURL + '/api/freeTemplate/deleteAppById/' + id, {
    headers: {
      Authorization: `bearer ${this.token}`,
    },
  });

}
delProFooter(id: any){
  return this.http.delete(environment.localApiURL + '/api/freeTemplate/deleteGreenFooterAndIconById/' + id, {
    headers: {
      Authorization: `bearer ${this.token}`,
    },
  });

}

delProSchedule(id: any){
  return this.http.delete(environment.localApiURL + '/api/freeTemplate/deleteScheduleById/' + id, {
    headers: {
      Authorization: `bearer ${this.token}`,
    },
  });

}
delProGallery(id: any){
  return this.http.delete(environment.localApiURL + '/api/freeTemplate/deleteCustomProfileById/' + id, {
    headers: {
      Authorization: `bearer ${this.token}`,
    },
  });

}

// -----------------Notification-------------------
getNotifications(): Observable<any> {
  return this.http.get(environment.localApiURL + '/api/Notification/getNotificationByUser', {
    headers: {
      Authorization: `bearer ${this.token}`
    },
  });
}


// --------------list of lost-----temp-----------

getLIst() {
  return this.http.get(environment.localApiURL + '/api/freeTemplate/getEditTemplateList', {
    headers: { Authorization: `bearer ${this.token}` },
  });
}

delproSignatureTemp(id: any){
  return this.http.delete(environment.localApiURL + '/api/freeTemplate/deleteEditTemplateById?proTemplateId=' + id, {
    headers: { Authorization: `bearer ${this.token}` },
  })

}
delfreeSignatureTemp(id: any){
  return this.http.delete(environment.localApiURL + '/api/freeTemplate/deleteEditTemplateById?templateId=' + id, {
    headers: { Authorization: `bearer ${this.token}` },
  })

}

delproPRoSignatureTemp(id: any){
  return this.http.delete(environment.localApiURL + '/api/freeTemplate/deleteEditTemplateById?proPlusTemplateId=' + id, {
    headers: { Authorization: `bearer ${this.token}` },
  })

}


modalCloseQuotes(data:any) {
  this.closeQuotes.next(data)
}
modalCloseMyQuotes(data:any) {
  this.closeMyQuotes.next(data)
}



// ---------------------faq ------------------

getFaqList(type:any) {
  return this.http.get(environment.localApiURL + '/api/Faq/listOfFaq?subject='+ type, {
    headers: {
      Authorization: `bearer ${this.token}`
    },
  });
}



getTime() {
  return this.http.get(environment.localApiURL + '/api/user/freeTrialWillEnd', {
    headers: {
      Authorization: `bearer ${this.token}`
    },
  });
}
}



