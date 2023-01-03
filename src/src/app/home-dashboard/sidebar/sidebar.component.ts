import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private api:SparkService,private _ngZone:NgZone, private router:Router) { }

  ngOnInit(): void {
  }

  logout() {
    // this.socialAuthService.signOut();
    sessionStorage.clear();
    this.api.isLoggedIn = false;
    this._ngZone.run(() => {
      this.router.navigate(['']);
    })

  }
}
