import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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
  templateId:any
  showStoriesForm:FormGroup;

  storyList:any;
  catStory: any;
  subStory: any;
  storyData: any;
  substoryData: any;
  SubSubstoryData: any;
  SubSubStoryList: any;
  templatesId: number;
  @Output() quotesSelect = new EventEmitter() 
  constructor(private api: SparkService,private spinner:NgxSpinnerService, private fb: FormBuilder, private router: Router,private route : ActivatedRoute) {
    this.showQuotesForm = this.fb.group({
      categoriesId: [''],
      subCategoriesId: [''],
      subSubCategoriesId: [''],
    })
    this.getTemplateId()
    this.showStoriesForm=this.fb.group({
      categoriesId:[''],
      subCategoriesId:[''],
      subSubCategoriesId:[''],
    })
  }
  getQuoteEvent(event: any, data: any) {
    this.quotedata = data;
    this.quoteId = this.quotedata._id;
    console.log(this.quoteId, 'id of quote id')
    this.LongQuotes = data?.quotesName
    console.log(this.templateId,this.templatesId,'SAQ');
    
    //  if(this.templatesId != 0) {
    //   localStorage.setItem('templatequoteId', this.quoteId)
    //   localStorage.setItem('templateLongQuotes', this.LongQuotes)      
    //   this.router.navigate(['home-dashboard/templates/edit-save'], { queryParams: { templateId: this.templateId } })
    // }

    if(this.templateId == 0 ) {
      // this.router.navigate(['/home-dashboard/basic-template'])
      localStorage.setItem('quoteId', this.quoteId)  
      localStorage.setItem('LongQuotes', this.LongQuotes)
      this.quotesSelect.emit('getQuotes');
    }  else {
      localStorage.setItem('templatequoteId', this.quoteId)
      localStorage.setItem('templateLongQuotes', this.LongQuotes)  
      this.quotesSelect.emit('getQuotes');    
      // this.router.navigate(['home-dashboard/templates/edit-template'], { queryParams: { templateId: this.templateId } })
    }
  }
 




  ngOnInit(): void {
    this.getCategory();
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  getTemplateId() {
    this.route.queryParamMap.subscribe((params: any) => {
      // this.templatesId = params.params['templatesId'] || 0
     this.templateId = params.params['templateId'] || 0;
    //  if(this.templatesId != 0) {
    //   this.templateId = Number(this.templatesId)
    //  } 
    //  if(this.templateId !=0) {
    //   this.templateId = Number(this.templateId)
    //  }
    //  if (this.templateId == 0) {
    //   //  this.router.navigate(['home-dashboard/basic-template'])
    //  }
   });
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






// LONG quote FOR CATEGORY
viewQuotes(data:any) {
    this.catQuoteData = data;
  }
  close() {
    let audio:any=document.getElementById('audio')
    if(audio){
      audio.pause()
  
    }
  }


  // LONG quote FOR SUBCATEGORY
  viewSubquotes(data:any) {
    this.subQuotesData= data;
    console.log(this.subQuotesData, 'ssjfgjldfkg;dkg;kf;gdflkg')
  }

   // LONG quote FOR SUBSUBCATEGORY
   viewSubSubQuotes(data:any) {
    this.SubSubQuotesData= data;
    console.log(this.SubSubQuotesData, 'ssjfgjldfkg;dkg;kf;gdflkg')
  }
  
  showStory(data:any) {

    let body:any = {
    filters:
      {
      categoriesId:data.categoriesId,
      subCategoriesId:data.subCategoriesId,
      subSubCategoriesId:data.subSubCategoriesId
 
    }}
    console.log(body, 'body')


    this.api.motivaionalStorybyFilter(body).subscribe((res: any) => {
      this.SubSubStoryList=res?.result;
      this.catStory = '';
      this.subStory = '';
      console.log(res);
      // this.toast.success('Added  Successfully');
console.log(body)
console.log(this.SubSubStoryList, "qqqq")


    },
      (error) => {
        // this.toast.error('please try again');
      })
  }



    // category quote
  showStoryCat(data:any) {

    let body:any = {
    filters:
      {
      categoriesId:data.categoriesId,
      
 
    }}
    console.log(body, 'body')


    this.api.motivaionalStorybyFilter(body).subscribe((res: any) => {
      this.catStory=res?.result;
      this.subStory= '';
      this.SubSubStoryList = '';
      console.log(res);
      // this.toast.success('Added  Successfully');
console.log(body)
console.log(this.catStory, "qqqq")


    },
      (error) => {
        // this.toast.error('please try again');
      })
  }

// Sub cat Quote
  showStorySubCat(data:any) {

    let body:any = {
    filters:
      {
        categoriesId:data.categoriesId,
        subCategoriesId:data.subCategoriesId,      
 
    }}
    console.log(body, 'body')


    this.api.motivaionalStorybyFilter(body).subscribe((res: any) => {
      this.subStory=res?.result;
      this.catStory = '';
      this.SubSubStoryList = '';
      console.log(res);
      // this.toast.success('Added  Successfully');
console.log(body)
console.log(this.storyList, "qqqq")


    },
      (error) => {
        // this.toast.error('please try again');
      })
  }






// LONG STORY FOR CATEGORY
  viewStory(data:any) {
    this.storyData = data;
  }



  // LONG STORY FOR SUBCATEGORY
  viewSubStory(data:any) {
    this.substoryData= data;
    console.log(this.substoryData, 'ssjfgjldfkg;dkg;kf;gdflkg')
  }

   // LONG STORY FOR SUBSUBCATEGORY
   viewSubSubStory(data:any) {
    this.SubSubstoryData = data;
    console.log(this.SubSubstoryData, 'ssjfgjldfkg;dkg;kf;gdflkg')
  }
}
