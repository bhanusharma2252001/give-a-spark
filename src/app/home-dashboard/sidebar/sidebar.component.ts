import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public href:string="";
  constructor(private api:SparkService,private _ngZone:NgZone, private router:Router) { }


 

  ngOnInit(): void {
    this.href=this.router.url;
    console.log(this.router.url,'jjjjjjjjjjjjjjjj')
  }

  public logout() {
    // this.socialAuthService.signOut();
    sessionStorage.clear();
    this.api.isLoggedIn = false;
    this.api.signOutExternal();
    this._ngZone.run(() => {
      this.router.navigate(['']).then(() => window.location.reload());
    })

  }

  // public logout(){
  //   this.SparkService.signOutExternal();
  //   this._ngZone.run(() => {
  //     this.router.navigate(['/']).then(() => window.location.reload());
  //   })
  // }
}
