import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  details: any;

  constructor(private spinner:NgxSpinnerService, private api:SparkService) { }

  ngOnInit(): void {
    this.getVariable()
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
getVariable(){
  this.api.homeVariable().subscribe((res:any)=>{
    this.details=res;
    console.log(res);
    
  })
}
  
}
