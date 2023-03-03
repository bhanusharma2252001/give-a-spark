import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss']
})
export class MyorderComponent implements OnInit {
  orderDetails: any;

  constructor(private router:Router, private api:SparkService) { }

  ngOnInit(): void {
    this.myOrder();
  }
  navigate(){
this.router.navigate(['/plan/plan-dashboard'])
  }
     

  myOrder(){
    this.api. getOrder().subscribe((res:any)=>{
      this.orderDetails=res;
    })
  }
}
