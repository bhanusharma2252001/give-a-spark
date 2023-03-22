import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SparkService {
  [x: string]: any;
  public content = new BehaviorSubject<any>(null);



  token: any;
  isLoggedIn = false;
  // private path = environment.apiUrl
  constructor(private http: HttpClient) {
    console.log(environment);
    
    this.token = sessionStorage.getItem('ClientSpark');
  }
  getLatestValue(data:any) {    
    this.content.next(data);    
  }
  isLoggedInAdmin() {
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


onSignup(data:any): Observable<any> {
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


 registerSocialUser(data: any): Observable<any>{
  return this.http.post(environment.localApiURL + '/api/user/socialLogin',data);
 }
// email verfication

enterEmailForVerify(data:any):Observable<any>{
  return this.http.post(environment.localApiURL + '/api/user/sendOTP',data)
  
}
enterOtp(data:any):Observable<any>{
  return this.http.post(environment.localApiURL + '/api/user/emailVerify',data)
  
}
  // forget password

  forgetPasswordSendOtp(data:any):Observable<any>{
    return this.http.post(environment.localApiURL + '/api/user/sendOTPForForgotPassword',data)
    
  }
  // email verify
  enterOtpforForget(data:any):Observable<any>{
    return this.http.post(environment.localApiURL + '/api/user/emailVerify',data)
    
  }
  //reset password api
  resetPassword(data:any) {
    return this.http.put(environment.localApiURL + '/api/user/forgetPassword',data)
  
  }






// userProfile

basicDetailofUser(data:any): Observable<any> {
  return this.http.put(environment.localApiURL + '/api/template/emailSignatureBasicDeatils', data,
  {
    headers: { Authorization: `bearer ${this.token}` },});
}

getbasicDetaiofUseer(){
  return this.http.get(environment.localApiURL + '/api/template/getTemplate' ,{
    headers: { Authorization: `bearer ${this.token}` },
  });
}

// api/template/getTemplate
// homePage 

getAllQuotesList() {
  return this.http.get(environment.localApiURL + '/api/Quotes/getQuotes' ,{
    headers: { Authorization: `bearer ${this.token}` },
  });
}

// basicCompanyDetails

addAttachments(data:any){
  return this.http.post( environment.localApiURL+ '/api/user/uploadAttachement',data)
  // {
  //   headers: { Authorization: `bearer ${this.token}` },
  // }
}

addCompanyDetails(data:any){
  return this.http.put(environment.localApiURL+ '/api/template/companyDetails', data,
  {
    headers: { Authorization: `bearer ${this.token}` },
  }
);
}
  // signatureDetails--basicTemplates api/template/createLimitTemplate

  addsignatureDetails(data:any){
    return this.http.post(environment.localApiURL+ '/api/template/createLimitTemplate', data,
    {
      headers: { Authorization: `bearer ${this.token}` },
    }
  );
  }
getsignatureDetails(){
  return this.http.get(environment.localApiURL + '/api/template/getTemplateByUser' ,{
    headers: { Authorization: `bearer ${this.token}` },
  });
}

//  My quote Create
addQuote(data:any){
  return this.http.post(environment.localApiURL+ '/api/Quotes/createQuotesByUser', data,
  {
    headers: { Authorization: `bearer ${this.token}` },
  }
);
}
getMyQuotes(){
  return this.http.get(environment.localApiURL + '/api/Quotes/myQuotes' ,{
    headers: { Authorization: `bearer ${this.token}` },
  });
}
//  My Story


addMyStory(data:any){
  return this.http.post(environment.localApiURL+ '/api/Stories/createStoriesByUser', data,
  {
    headers: { Authorization: `bearer ${this.token}` },
  }
);
}

getMyStory(){
  return this.http.get(environment.localApiURL + '/api/Stories/myStories' ,{
    headers: { Authorization: `bearer ${this.token}` },
  });
}


// Motivational Quotes

getCategoryList(): Observable<any> {
  return this.http.get(environment.localApiURL + '/api/categories/getAllCategories', {
    headers: {
       Authorization: `bearer ${this.token}`},
  });
}

getSubCategoryList(id: any): Observable<any> {
  return this.http.get(environment.localApiURL+ '/api/categories/subCat?id=' + id, {
      headers: {
        Authorization: `bearer ${this.token}`},
    });
}



getSubSubCat(id: any) {
  return this.http.get(environment.localApiURL + '/api/categories/getSubCategories/' + id, {
      headers: { Authorization: `bearer ${this.token}` },
    });
}


motivaionalQuotebyFilter(data:any){
  return this.http.post(environment.localApiURL+ '/api/Quotes/motivationalFilterQuotesByCat', data,
  {
    headers: { Authorization: `bearer ${this.token}` },
  }
);
}
motivaionalStorybyFilter(data:any){
  return this.http.post(environment.localApiURL+ '/api/Stories/motivationalFiterStoriesByCat', data,
  {
    headers: { Authorization: `bearer ${this.token}` },
  }
);
}



// planpurchase
makePayment(data:any ):Observable<any>{


  return this.http.post(environment.localApiURL+ '/api/stripe/checkout',data,
{
  headers: { Authorization: `bearer ${this.token}` }
}
);
}





// My Plan




getMyPlan(){
  return this.http.get(environment.localApiURL + '/api/plan/myPlans' ,{
    headers: { Authorization: `bearer ${this.token}` },
  });
}




//  basic temoplate

getQuoteById(){
  return this. http.get(environment.localApiURL +'/api/Quotes/getQuotes',{
    headers: { Authorization: `bearer ${this.token}` },
});


}




myProfile(){
  return this. http.get(environment.localApiURL +'/api/user/getProfile',{
    headers: { Authorization: `bearer ${this.token}` },
});

}



// for QR code

getUserProfile(token:any) {
  return this. http.get(environment.localApiURL +'/api/user/getProfile',{
    headers: { Authorization: `bearer ${token}` },
});}



// GET QR CODE FROM BACKEND


getQrCode() {
  return this.http.get(environment.localApiURL +'/api/template/generateQrCode',{
    headers: { Authorization: `bearer ${this.token}` },
});}





// TEMPLATES

templateCustomize(id:any, data:any){
  return this.http.post(environment.localApiURL+ '/api/TemplateCustomization/createTemplateCustomization?templateId='+id, data,
  {
    headers: { Authorization: `bearer ${this.token}` },
  }
);
}

getdesign() {
  return this.http.get(environment.localApiURL +'/api/TemplateCustomization/TemplateCustomizationList',{
    headers: { Authorization: `bearer ${this.token}` },
});}


// Templates Edit For Free

getFreeTemp() {
  return this.http.get(environment.localApiURL +'/api/freeTemplate/getFreeTemplateList',{
    headers: { Authorization: `bearer ${this.token}` },
});}

FreeTempById(id:any){

    return this.http.get(environment.localApiURL +'/api/freeTemplate/getTemplateById/'+ id ,{
      headers: { Authorization: `bearer ${this.token}` },
    })}
    


    
updateFreeTemp(id:any,body:any){
  return this.http.put( environment.localApiURL +'/api/freeTemplate/UpdateFreeTemplateById/'+id,body,{
    headers: { Authorization: `bearer ${this.token}` },
   
    
  });

}





// Pro Plus
getProTemp(){ return this.http.get(environment.localApiURL +'/api/freeTemplate/getProTemplateList',{
    headers: { Authorization: `bearer ${this.token}` },
});
  
}
phoneValidation(){
  return this.http.get(environment.localApiURL +'/api/user/getMobileValidation',{
    headers: { Authorization: `bearer ${this.token}` },})
}

updateTemplate(id:any,body:any) {
  return this.http.put(environment.localApiURL + '/api/template/updateTemplate/'+id,body,{
    headers: { Authorization: `bearer ${this.token}` },});
    console.log(this.token ,'ks');
}


getProTemplates(){
  return this.http.get(environment.localApiURL +'/api/freeTemplate/getTemplatePro1List',{
    headers: { Authorization: `bearer ${this.token}` },
});  
}

updateCreateTemplate(id:any,body:any){
  return this.http.put(environment.localApiURL + '/api/template/updateOnTemplate/'+id,body,{
    headers: { Authorization: `bearer ${this.token}` },});
}


//  gAMIL /


gmail( data:any){
  return this.http.post(environment.localApiURL+ '/api/user/setSignature', data,
  {
    headers: { Authorization: `bearer ${this.token}` }
  }
);
}





  //  O R D E R   HISTORY

  getOrder(){
    return this.http.get(environment.localApiURL +'/api/plan/myOrderhistory',{
      headers: { Authorization: `bearer ${this.token}` },
  });  
  }



// Delete Logo


// removeLogo(id:any,body:any){
//   return this.http.delete(environment.localApiURL + '/api/template/deleteLogoById/'+id,body,{
//     headers: { Authorization: `bearer ${this.token}` },});
// }

removeLogo(id:any) {
  return this.http.get(environment.localApiURL + '/api/template/deleteLogoById/'+id,{
    headers: { Authorization: `bearer ${this.token}` },
  })
}
removeSignatureLogo(id:any) {
  return this.http.get(environment.localApiURL + '/api/freeTemplate/deleteLogoById/'+id,{
    headers: { Authorization: `bearer ${this.token}` },
  })
}






updatePass(body:any){
  return this.http.put(environment.localApiURL+ '/api/user/changePassword', body,
  {
    headers: { Authorization: `bearer ${this.token}` }
  }
);
}
homeVariable() {
  return this.http.get(environment.localApiURL + '/api/user/clientHomePageVariable'

  ,{
    headers: { Authorization: `bearer ${this.token}` },
  })
}
}