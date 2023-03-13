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
  constructor(private router:Router, private api:SparkService) { }

  ngOnInit(): void {
    this.profileData();
    this.href=this.router.url;
    console.log(this.router.url)
  }

  profileData() {
    this.api.myProfile().subscribe((res:any)=>{
      this.userDetails = res;
      console.log(this.userDetails,'profile')

      console.log(this.userDetails?.address[0]?.addressline1, "addddd")
    })
  }
}
