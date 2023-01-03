import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { interval, Subscription } from 'rxjs';
// import { SocialAuthService } from 'angularx-social-login';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit,OnDestroy {
  quotesList: any = []
  quotesData: any;
  subscription$: Subscription = new Subscription();
  source: any;
  profileData:any=[];
  // quotesList:any;
  constructor(private router: Router, private api: SparkService, private _ngZone: NgZone, private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    this.getQuotesListforProfile();
  }

  getQuotes() {
   
    let count=0;
    this.quotesData = this.quotesList[count]?.quotesName
    this.source = setInterval(()=>{
      this.profileData=[]
      this.profileData.push(this.quotesData)
      this.quotesData = this.quotesList[count+1].quotesName;
      count++;
      if(count==this.quotesList.length) {
        clearInterval(this.source)
      }
    },8000)
  }

  logout() {
    this.socialAuthService.signOut();
    sessionStorage.clear();
    this.api.isLoggedIn = false;
    this._ngZone.run(() => {
      this.router.navigate(['']);
    })

  }

ngOnDestroy() {
  if(this.source) {
    clearInterval(this.source)
  }
}

  // public logout(){
  //   this.sparkService.signOutExternal();
  //   this._ngZone.run(() => {
  //     this.router.navigate(['']).then(() => window.location.reload());
  //   })
  // }


  getQuotesListforProfile(){
    this.api.getAllQuotesList().subscribe((res: any)=>{
      this.quotesList= res.result;
      this.getQuotes()

    })

  }
 
}
