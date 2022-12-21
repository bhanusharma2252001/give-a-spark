import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SparkService {

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




}