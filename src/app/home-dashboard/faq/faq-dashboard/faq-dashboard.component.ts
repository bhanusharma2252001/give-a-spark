import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-faq-dashboard',
  templateUrl: './faq-dashboard.component.html',
  styleUrls: ['./faq-dashboard.component.scss']
})
export class FaqDashboardComponent implements OnInit {
  catType: any;
  faqList: any;
arrow:boolean;
  constructor(private api:SparkService, private router:Router) { }

  ngOnInit(): void {
    this.getFAQ('EmailSignature');

  }



  getFAQ(type:any){
    this.catType= type 
    this.api.getFaqList(this.catType).subscribe((res:any)=>{
      console.log(res, 'faq List')
      this.faqList=res?.result
      console.log(this.catType, ' type of');
      
      
    })
  }

    show(){
      this.arrow=!this.arrow
    }
}
