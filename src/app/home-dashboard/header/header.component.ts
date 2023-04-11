import { Component, OnInit } from '@angular/core';
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
  constructor(private router:Router, private api:SparkService) { 
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

  profileData() {
    this.api.myProfile().subscribe((res:any)=>{
      this.userDetails = res[0];
      this.planDetails=res[0]?.SelectPlan

      console.log(this.userDetails?.address[0]?.addressline1, "addddd",this.userDetails.profile)
    })
  }
}
