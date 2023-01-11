import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SparkService {
  [x: string]: any;

  token: any;
  isLoggedIn = false;
  // private path = environment.apiUrl
  constructor(private http: HttpClient) {
    console.log(environment);
    
    this.token = sessionStorage.getItem('ClientSpark');
  }

  isLoggedInAdmin() {
    this.token = sessionStorage.getItem('ClientSpark');
    if (this.token) {
      return (this.isLoggedIn = true);
    } else {
      return this.isLoggedIn;
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
  // google Login


//   public signOutExternal = () => {
//     localStorage.removeItem("token");
//     console.log("token deleted")
// }

// LoginWithGoogle(credentials: string): Observable<any> {
//   const header = new HttpHeaders().set('Content-type', 'application/json');
//   return this.http.post(this.path + "LoginWithGoogle", JSON.stringify(credentials), { headers: header });
// }


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
  // signatureDetails--basicTemplates

  addsignatureDetails(data:any){
    return this.http.post(environment.localApiURL+ '/api/template/signatureDetails', data,
    {
      headers: { Authorization: `bearer ${this.token}` },
    }
  );
  }
getsignatureDetails(){
  return this.http.get(environment.localApiURL + '/api/template/getTemplateList' ,{
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



// planpurchase

makePayment(stripeToken:any ):Observable<any>{
  // const url = "https://api.giveaspark.com/api/stripe/paymentIntent"
  // return this.http.post<any>(url,{token:stripeToken})
  // return this.http.post(environment.localApiURL+ '/api/stripe/paymentIntent', {token:stripeToken},
    return this.http.post('http://localhost:8000'+ '/api/stripe/paymentIntent', {token:stripeToken},
  {
    headers: { Authorization: `bearer ${this.token}` }
  }
);
}

// sendPayment(token: string, id: string): Promise<any> {
//   return this.http.patch(`${environment.api}/orders/${id}`,
//     {
//       token
//     }).toPromise()
// }

// generateOrder(data: { name: string, amount: number }): Observable<any> {
//   return this.http.post(`${environment.api}/orders`, data)
// }

// confirmOrder(id:string): Promise<any> {
//   return this.http.patch(`${environment.api}/orders/confirm/${id}`, {}).toPromise()
// }




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
}