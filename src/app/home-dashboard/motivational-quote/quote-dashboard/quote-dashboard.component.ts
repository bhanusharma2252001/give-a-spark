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
  category: any;
  subCategory: any;
  subSubCategory: any
  showQuotesForm: FormGroup;

  quoteList: any;
  quotedata: any;
  quoteId: any;
  LongQuotes: any;
  catQuotes: any;
  subCatQuotes: any;
  SubSubQuotesData: any;
  subQuotesData: any;
  catQuoteData: any;
  constructor(private api: SparkService, private fb: FormBuilder, private router: Router) {
    this.showQuotesForm = this.fb.group({
      categoriesId: [''],
      subCategoriesId: [''],
      subSubCategoriesId: [''],
    })
  }
  getQuoteEvent(event: any, data: any) {
    this.quotedata = data;
    this.quoteId = this.quotedata._id;
    this.LongQuotes = data?.quotesName
    this.router.navigate(['/home-dashboard/basic-template'])
    localStorage.setItem('quoteId', this.quoteId)

    localStorage.setItem('LongQuotes', this.LongQuotes)
    console.log(this.quotedata, "quote data");

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




  showQuotes(data:any) {

    let body:any= {
    filters:
      {
      categoriesId:data.categoriesId,
      subCategoriesId:data.subCategoriesId,
      subSubCategoriesId:data.subSubCategoriesId
 
    }}
    console.log(body, 'body')


    this.api.motivaionalQuotebyFilter(body).subscribe((res: any) => {
      this.quoteList=res?.result;
      this.catQuotes = '';
      this.subCatQuotes = '';
      console.log(res);
      // this.toast.success('Added  Successfully');
console.log(body)
console.log(this.quoteList, "qqqq")


    },
      (error) => {
        // this.toast.error('please try again');
      })
  }



    // category quote
  showCatQuote(data:any) {

    let body:any = {
    filters:
      {
      categoriesId:data.categoriesId,
      
 
    }}
    console.log(body, 'body')


    this.api.motivaionalQuotebyFilter(body).subscribe((res: any) => {
      this.catQuotes=res?.result;
      this.subCatQuotes= '';
      this.quoteList = '';
      console.log(res);
      // this.toast.success('Added  Successfully');
console.log(body)
console.log(this.catQuotes, "qqqq")


    },
      (error) => {
        // this.toast.error('please try again');
      })
  }

// Sub cat Quote
  showSubCatQuote(data:any) {

    let body:any = {
    filters:
      {
        categoriesId:data.categoriesId,
        subCategoriesId:data.subCategoriesId,      
 
    }}
    console.log(body, 'body')


    this.api.motivaionalQuotebyFilter(body).subscribe((res: any) => {
      this.subCatQuotes=res?.result;
      this.catQuotes = '';
      this.quoteList = '';
      console.log(res);
      // this.toast.success('Added  Successfully');
console.log(body)
console.log(this.quoteList, "qqqq")


    },
      (error) => {
        // this.toast.error('please try again');
      })
  }






// LONG STORY FOR CATEGORY
  viewStory(data:any) {
    this.catQuoteData = data;
  }
  close() {
    let audio:any=document.getElementById('audio')
    if(audio){
      audio.pause()
  
    }
  }


  // LONG STORY FOR SUBCATEGORY
  viewSubStory(data:any) {
    this.subQuotesData= data;
    console.log(this.subQuotesData, 'ssjfgjldfkg;dkg;kf;gdflkg')
  }

   // LONG STORY FOR SUBSUBCATEGORY
   viewSubSubStory(data:any) {
    this.SubSubQuotesData= data;
    console.log(this.SubSubQuotesData, 'ssjfgjldfkg;dkg;kf;gdflkg')
  }
}
