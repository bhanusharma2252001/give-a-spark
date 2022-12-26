import { Component, OnInit } from '@angular/core';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-quote-dashboard',
  templateUrl: './quote-dashboard.component.html',
  styleUrls: ['./quote-dashboard.component.scss']
})
export class QuoteDashboardComponent implements OnInit {
  quotesList:any;
  constructor(private api:SparkService, ) { }

  ngOnInit(): void {
    this.getmyQuote();
  }



getmyQuote(){
  this.api.getMyQuotes().subscribe((res:any)=>{
this.quotesList=res?.result
  })
}





}
