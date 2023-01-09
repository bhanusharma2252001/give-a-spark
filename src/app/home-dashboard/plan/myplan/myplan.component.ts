import { Component, OnInit } from '@angular/core';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-myplan',
  templateUrl: './myplan.component.html',
  styleUrls: ['./myplan.component.scss']
})
export class MyplanComponent implements OnInit {
plandetails:any;
  constructor(private api:SparkService) { }

  ngOnInit(): void {
    this.myPlans();
  }


myPlans(){
  this.api.getMyPlan().subscribe((res:any)=>{
this.plandetails=res?.result[0];

  })
}




}
