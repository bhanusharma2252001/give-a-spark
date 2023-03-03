import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {
public href:string="";
  constructor(private router:Router, private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.href=this.router.url;
    console.log(this.router.url)
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    
  }
  }


