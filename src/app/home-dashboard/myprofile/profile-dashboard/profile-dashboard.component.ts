import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SparkService } from 'src/app/service/spark.service';
@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.scss']
})
export class ProfileDashboardComponent implements OnInit {
  userDetails:any
  constructor(private api: SparkService,private route: ActivatedRoute) { 
    this.route.queryParams.subscribe((params:any) => {
      // console.log(params,'sssssss');
      if(params?.token) {
        let decodeToken:any= atob(params?.token)
        this.profileData(decodeToken)
      }
  });
  }

  ngOnInit(): void {
  }

  profileData(token:any) {
    this.api.getUserProfile(token).subscribe((res:any)=>{
      this.userDetails = res;
    })
  }
}