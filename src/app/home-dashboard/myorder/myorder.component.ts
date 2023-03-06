import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss']
})
export class MyorderComponent implements OnInit {
  currentDetails: any;
previousDetails:any;
  constructor(private router:Router, private api:SparkService, private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.myOrder();
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
  navigate(){
this.router.navigate(['/plan/plan-dashboard'])
  }
     

  myOrder(){
    this.api. getOrder().subscribe((res:any)=>{
      this.currentDetails=res?.currentPlan[0][0];
      this.previousDetails=res?.previousPlan[0];
    })
  }
}
