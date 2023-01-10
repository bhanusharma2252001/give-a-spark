import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SparkService } from './service/spark.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Giveaspark_client';



  public href:string="";
  constructor(private api:SparkService, private router:Router) { }


 

  ngOnInit(): void {
    this.href=this.router.url;
    console.log(this.router.url)
  }
}
