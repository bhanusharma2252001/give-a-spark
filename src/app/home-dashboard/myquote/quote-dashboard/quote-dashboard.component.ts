import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-quote-dashboard',
  templateUrl: './quote-dashboard.component.html',
  styleUrls: ['./quote-dashboard.component.scss']
})
export class QuoteDashboardComponent implements OnInit {
  quotesList:any;
  storyList:any;
  constructor(private api:SparkService,private router:Router, private spinner:NgxSpinnerService ) { }

  ngOnInit(): void {
    this.getmyQuote();
    this.getMyStories();
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }



getmyQuote(){
  this.api.getMyQuotes().subscribe((res:any)=>{
this.quotesList=res?.result
  })
}

navigate(){
  this.router.navigate(['myquote/add-quote'])
}
getMyStories(){
  this.api.getMyStory().subscribe((res:any)=>{
  this.storyList = res?.result
  })
}
navigate1(){
  this.router.navigate(['myquote/add-story'])
}


}
