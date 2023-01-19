import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-dashboard',
  templateUrl: './template-dashboard.component.html',
  styleUrls: ['./template-dashboard.component.scss']
})
export class TemplateDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
navigate(){
  this.router.navigate(['./basic-template'])
}
}
