import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-myplan',
  templateUrl: './myplan.component.html',
  styleUrls: ['./myplan.component.scss']
})
export class MyplanComponent implements OnInit {
plandetails:any;
  userDetails: any;
  constructor(private api:SparkService, private router:Router, private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.myPlans();
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.profile();
  }


myPlans(){
  this.api.getMyPlan().subscribe((res:any)=>{
this.plandetails=res?.result[0];
console.log(this.plandetails, 'planmkkgdfkg')

  })
}

navigate(){
  this.router.navigate(['/plan/plan-dashboard'])
}
profile(){
  this.api.myProfile().subscribe((res:any)=>{
    this.userDetails = res[0];
    console.log(this.userDetails.profile)
    console.log(this.userDetails?.address[0]?.addressline1, "addddd")
  })
}

}
