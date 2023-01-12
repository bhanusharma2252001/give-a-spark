import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss']
})
export class MyorderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigate(){
this.router.navigate(['/plan/plan-dashboard'])
  }
}
