import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SparkService } from 'src/app/service/spark.service';
@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.scss']
})
export class ProfileDashboardComponent implements OnInit {
  userDetails:any
  constructor(private api: SparkService,private route: ActivatedRoute, private router:Router, private spinner:NgxSpinnerService) { 
    this.route.queryParams.subscribe((params:any) => {
      // console.log(params,'sssssss');
      if(params?.token) {
        let decodeToken:any= atob(params?.token)
        this.profileData(decodeToken)
      } else {
        if(sessionStorage.getItem('ClientSpark')) {
          let token = sessionStorage.getItem('ClientSpark')
          this.profileData(token)
        }
      }
  });
  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  profileData(token:any) {
    this.api.getUserProfile(token).subscribe((res:any)=>{
      this.userDetails = res;
      console.log(this.userDetails?.address[0]?.addressline1, "addddd")
    })
  }

navigate(){
  this.router.navigate(['/home-dashboard/myprofile/update-profile'])
}















}