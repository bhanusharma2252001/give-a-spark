import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-basic-template',
  templateUrl: './basic-template.component.html',
  styleUrls: ['./basic-template.component.scss']
})
export class BasicTemplateComponent implements OnInit {
  details: any;
  username: any;
  Email: any;
  compName: any;
  compWebsite: any;
  number: any;
  templateForm:FormGroup
  constructor( private api:SparkService,
    private fb:FormBuilder) { 
      this.templateForm=this.fb.group({

      })
    }

  ngOnInit(): void {
    this.getBasicProfile()
  }





  getBasicProfile(){
    this.api.getbasicDetaiofUseer().subscribe((res:any)=>{
 this.details=res.result;
 
 this.username=res.result[0]?.firstName
 this.Email=res.result[0]?.email
 this.compName=res.result[0]?.companyName
 this.compWebsite=res.result[0]?.companyWebsite
 this.number=res.result[0]?.phone
 
 
 
 console.log(this.compWebsite, 'jojo')
 
 console.log(this.details)
   })
 
 
 
 }




 onSubmit(){
  
 }
}
