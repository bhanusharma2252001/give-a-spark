import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-story-dashboard',
  templateUrl: './story-dashboard.component.html',
  styleUrls: ['./story-dashboard.component.scss']
})
export class StoryDashboardComponent implements OnInit {

  category:any;
  subCategory:any;
  subSubCategory:any
  showStoriesForm:FormGroup;

  storyList:any;
  catStory: any;
  subStory: any;
  storyData: any;
  substoryData: any;
  SubSubstoryData: any;
  SubSubStoryList: any;
  constructor( private api:SparkService, private fb:FormBuilder) {
    this.showStoriesForm=this.fb.group({
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
    let data = this.showStoriesForm.value;
    console.log(data);
    this.api.getSubCategoryList(data.categoriesId).subscribe((res) => {
      this.subCategory = res;
      console.log(this.subCategory);
    });
  }

  getSubsubCategory(){

    let data= this.showStoriesForm.value;
    console.log(data);
    this.api.getSubSubCat(data.subCategoriesId).subscribe((res=>{
      this.subSubCategory = res;
      console.log(this.subSubCategory)
    }))
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
  close() {
    let audio:any=document.getElementById('audio')
    if(audio){
      audio.pause()
  
    }
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