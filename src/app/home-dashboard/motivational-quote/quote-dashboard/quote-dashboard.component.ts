import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  constructor( private api:SparkService, private fb:FormBuilder) {
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
