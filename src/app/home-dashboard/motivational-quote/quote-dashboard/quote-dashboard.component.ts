import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-quote-dashboard',
  templateUrl: './quote-dashboard.component.html',
  styleUrls: ['./quote-dashboard.component.scss']
})
export class QuoteDashboardComponent implements OnInit {
  category:any;
  subCategory:any;
  subSubCategory:any
  showQuotesForm:FormGroup;

  quoteList:any;
  quotedata: any;
  quoteId: any;
  LongQuotes: any;
  constructor( private api:SparkService, private fb:FormBuilder, private router:Router) {
    this.showQuotesForm=this.fb.group({
      categoriesId:[''],
      subCategoriesId:[''],
      subSubCategoriesId:[''],
    })
   }

  ngOnInit(): void {
    this.getCategory();
  }



  getCategory() {
    this.api.getCategoryList().subscribe((res) => {
      this.category = res;
      console.log(this.category);
    });
  }


  getSubCategory() {
    let data = this.showQuotesForm.value;
    console.log(data);
    this.api.getSubCategoryList(data.categoriesId).subscribe((res) => {
      this.subCategory = res;
      console.log(this.subCategory);
    });
  }

  getSubsubCategory(){

    let data= this.showQuotesForm.value;
    console.log(data);
    this.api.getSubSubCat(data.subCategoriesId).subscribe((res=>{
      this.subSubCategory = res;
      console.log(this.subSubCategory)
    }))
  }
//  selectQuoot4e


getQuoteEvent(event:any, data:any){
  this.quotedata = data;
  this.quoteId = this.quotedata._id;
  this.LongQuotes=data?.longQuotes
this.router.navigate(['/home-dashboard/basic-template'])
  sessionStorage.setItem('quoteId', this.quoteId )

  sessionStorage.setItem('LongQuotes',this.LongQuotes )
  console.log(this.quotedata, "quote data");
  
}


  showQuote(data:any) {

    let body:any = {
    filters:
      {
      categoriesId:data.categoriesId,
      subCategoriesId:data.subCategoriesId,
      subSubCategoriesId:data.subSubCategoriesId
 
    }}
    console.log(body, 'body')


    this.api.motivaionalQuotebyFilter(body).subscribe((res: any) => {
      this.quoteList=res?.result;
      console.log(res);
      // this.toast.success('Added  Successfully');
console.log(body)
console.log(this.quoteList, "qqqq")


    },
      (error) => {
        // this.toast.error('please try again');
      })
  }
}
