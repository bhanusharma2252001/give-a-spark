import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-myplan',
  templateUrl: './myplan.component.html',
  styleUrls: ['./myplan.component.scss']
})
export class MyplanComponent implements OnInit {
plandetails:any;
  userDetails: any;
  constructor(private api:SparkService, private router:Router) { }

  ngOnInit(): void {
    this.myPlans();
    this.profile()
  }


myPlans(){
  this.api.getMyPlan().subscribe((res:any)=>{
this.plandetails=res?.result[0];

  })
}

navigate(){
  this.router.navigate(['/plan/plan-dashboard'])
}
profile(){
  this.api.myProfile().subscribe((res:any)=>{
    this.userDetails = res;
    console.log(this.userDetails?.address[0]?.addressline1, "addddd")
  })
}

}
