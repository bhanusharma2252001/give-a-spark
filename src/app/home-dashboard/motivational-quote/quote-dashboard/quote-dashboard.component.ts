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
  checkedItem:boolean = false
  @Output() quotesSelect = new EventEmitter() 
  storydata: any;
  storyName: any;
  storyId: any;
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

    this.resetQuotes()
  }
  getQuoteEvent(event: any, data: any,type:any) {
    this.quotedata = data;
    this.quoteId = this.quotedata._id;
    this.LongQuotes = data?.quotesName
    if(type == 'category') {
      this.catQuotes.map((item:any)=>{
        if(data?._id == item?._id) {
          item.isChecked = true
        } else {
          item.isChecked = false
        }
      })
    }
    if(type == 'subcat') {
      this.subCatQuotes.map((item:any)=>{
        if(data?._id == item?._id) {
          item.isChecked = true
        } else {
          item.isChecked = false
        }
      })
    }
    if(type == 'subsub') {
      this.quoteList.map((item:any)=>{
        if(data?._id == item?._id) {
          item.isChecked = true
        } else {
          item.isChecked = false
        }
      })
    }
       
    //  if(this.templatesId != 0) {
    //   localStorage.setItem('templatequoteId', this.quoteId)
    //   localStorage.setItem('templateLongQuotes', this.LongQuotes)      
    //   this.router.navigate(['home-dashboard/templates/edit-save'], { queryParams: { templateId: this.templateId } })
    // }

    // if(this.templateId == 0 ) {
    //   // this.router.navigate(['/home-dashboard/basic-template'])
    //   localStorage.setItem('quoteId', this.quoteId)  
    //   localStorage.setItem('LongQuotes', this.LongQuotes)
    //   this.quotesSelect.emit('getQuotes');
    // }  else {
    //   localStorage.setItem('templatequoteId', this.quoteId)
    //   localStorage.setItem('templateLongQuotes', this.LongQuotes)  
    //   this.quotesSelect.emit('getQuotes');    
    //   // this.router.navigate(['home-dashboard/templates/edit-template'], { queryParams: { templateId: this.templateId } })
    // }
    let getQuotes = {
      isQuoteId :this.quotedata._id,
      isStoryId:null,
      myQuoteId:null,
      myStoryId:null,
      name : data?.quotesName
    }
    this.emitData(getQuotes)
  }
 
  emitData(data:any) {
    this.quotesSelect.emit(data);
  }


  ngOnInit(): void {
    this.getCategory();
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  resetQuotes() {
    this.api.closeQuotes.subscribe((res:any)=>{
      console.log(res,'ssss');
      if(res) {
       this.resetQuotesForm()
       this.resetStoryForm()
       this.catQuotes = null
       this.subCatQuotes = null
       this.quoteList = null
      }
    })
  }

  resetQuotesForm() {
    this.showQuotesForm.controls['categoriesId'].setValue('')
    this.showQuotesForm.controls['subCategoriesId'].setValue('')
    this.showQuotesForm.controls['subSubCategoriesId'].setValue('')
  }

  resetStoryForm() {
    this.showStoriesForm.controls['categoriesId'].setValue('')
    this.showStoriesForm.controls['subCategoriesId'].setValue('')
    this.showStoriesForm.controls['subSubCategoriesId'].setValue('')

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
    console.log(data?.categoriesId, 'idid')
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

 


  getStorySubCategory() {
    let data = this.showStoriesForm.value;
    console.log(data);
    console.log(data?.categoriesId, 'idid')
    this.api.getSubCategoryList(data.categoriesId).subscribe((res) => {
      this.subCategory = res;
      console.log(this.subCategory);
    });
  }

  getStorySubsubCategory(){

    let data= this.showStoriesForm.value;
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
      if(this.quoteList) {
        this.quoteList.map((item:any)=>{return item['isChecked'] = false})
      }
      this.catQuotes = '';
      this.subCatQuotes = '';
      console.log(res);
      
console.log(body)
console.log(this.quoteList, "qqqq")


    },
      (error) => {
        
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
      if(this.catQuotes) {
        this.catQuotes.map((item:any)=>{return item['isChecked'] = false})
      }
      this.subCatQuotes= '';
      this.quoteList = '';
      console.log(res);
      
console.log(body)
console.log(this.catQuotes, "qqqq")


    },
      (error) => {
        
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
      if(this.subCatQuotes) {
        this.subCatQuotes.map((item:any)=>{return item['isChecked'] = false})
      }
      this.catQuotes = '';
      this.quoteList = '';
      console.log(res);
      
console.log(body)
console.log(this.quoteList, "qqqq")


    },
      (error) => {
        
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
  




    // category story
  showStoryCat(data:any) {

    let body:any = {
    filters:
      {
      categoriesId:data.categoriesId,
      
 
    }}
    console.log(body, 'body')


    this.api.motivaionalStorybyFilter(body).subscribe((res: any) => {
      this.catStory=res?.result;
      if(this.catStory) {
        this.catStory.map((item:any)=>{return item['isChecked'] = false})
      }
      this.subStory= '';
      this.SubSubStoryList = '';
      console.log(res);
      
console.log(body)
console.log(this.catStory, "qqqq")


    },
      (error) => {
        
      })
  }

// Sub cat story
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
      if(this.subStory) {
        this.subStory.map((item:any)=>{return item['isChecked'] = false})
      }
      this.catStory = '';
      this.SubSubStoryList = '';
      console.log(res);
      // this.toast.success('Added  Successfully');
console.log(body)
console.log(this.storyList, "qqqq")


    },
      (error) => {
        
      })
  }


// ------subsubstory-

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
    if(this.SubSubStoryList) {
      this.SubSubStoryList.map((item:any)=>{return item['isChecked'] = false})
    }
    this.catStory = '';
    this.subStory = '';
    console.log(res);
    
console.log(body)
console.log(this.SubSubStoryList, "qqqq")


  },
    (error) => {
      
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





  getStoyEvent(event: any, data: any,type:any) {
    console.log(data);
    
    this.storydata = data;
    this.storyId = this.storydata._id;
    this.storyName = data?.storiesName
    if(type == 'scat') {
      this.catStory.map((item:any)=>{
        if(data?._id == item?._id) {
          item.isChecked = true
        } else {
          item.isChecked = false
        }
      })
    }
    if(type == 'ssubcat') {
      this.subStory.map((item:any)=>{
        if(data?._id == item?._id) {
          item.isChecked = true
        } else {
          item.isChecked = false
        }
      })
    }
    if(type == 'ssubsub') {
      this.SubSubStoryList.map((item:any)=>{
        if(data?._id == item?._id) {
          item.isChecked = true
        } else {
          item.isChecked = false
        }
      })
    }
           
    let getStory = {
      isQuoteId:null,
      isStoryId :this.storydata._id,
      myQuoteId:null,
      myStoryId:null,
      name : data?.storiesName
    }
    this.emitData(getStory)
  }








}
