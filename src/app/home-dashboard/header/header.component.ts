import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router:Router, private api:SparkService, private _ngZone:NgZone,) { 
    this.api.updateImage.subscribe((res:any)=>{
      if(res==true) {
        this.profileData()
      }
    })
  }

  ngOnInit(): void {
    this.profileData();
    this.href=this.router.url;
    console.log(this.router.url)
  }



 


  public logout() {
    // this.socialAuthService.signOut();
    sessionStorage.clear();
    localStorage.clear();
    // this.api.requestSyncSessionStorage().clear();
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
}
