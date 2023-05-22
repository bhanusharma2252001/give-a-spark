import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public href:string=""
  userDetails: any;
  planDetails: any;
   private channel = new BroadcastChannel('logout');
  private logoutSubscription: Subscription;
  warning: any;
  constructor(private router:Router, private api:SparkService, private _ngZone:NgZone) { 
    this.api.updateImage.subscribe((res:any)=>{
      if(res==true) {
        this.profileData()
      }
    })
  }

  ngOnInit(): void {
    this.profileData();
    this.getTrialTime();
    this.href=this.router.url;
    console.log(this.router.url)

    this.logoutSubscription = this.api.getLogoutObservable()
    .subscribe(() => {
      this.channel.postMessage('logout'); // send logout message to all tabs
    });
  this.channel.onmessage = (event) => {
    if (event.data === 'logout') {
      this.logout(); // log out the user
    }
  };
  this.notify();
  }

getTrialTime(){
  this.api.getTime().subscribe((res:any)=>{
    console.log(res, 'time')
    this.warning= res?.msg
  })
}

 


  public logout() {
    // this.socialAuthService.signOut();

  this.api.logOutTab()
  localStorage.clear();
    this.api.isLoggedIn = false;
    this.api.signOutExternal();
    this._ngZone.run(() => {
      this.router.navigate(['']).then(() => window.location.reload());
    })

  }
  profileData() {
    this.api.myProfile().subscribe((res:any)=>{
      this.userDetails = res[0];
      this.planDetails=res[0]?.SelectPlan

      console.log(this.userDetails?.address[0]?.addressline1, "addddd",this.userDetails.profile)
    })
  }
  notify(){
    this.api.getNotifications().subscribe((res:any)=>{
      console.log(res, 'notifications')
    })
  }
}
