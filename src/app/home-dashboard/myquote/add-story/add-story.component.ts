import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';
@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss']
})
export class AddStoryComponent implements OnInit {

  addStoryForm:FormGroup;
  imageData = [] as any;
  Submitted = false;
  imageFile: any = '';

  url: string | ArrayBuffer | null | undefined;
  isImage = true;
  uploadImage:any;


  imageData1:any;
  imageData2:any;
  storyName: any;
  storyWriterImage: any;
  storyWriterName: any;
  storyList: any;
  storyId: number;
  constructor( private api:SparkService, private route: ActivatedRoute,private fb:FormBuilder, private router:Router, private toast:ToastrService, private spinner:NgxSpinnerService) { 
    this.addStoryForm=this.fb.group({

      writerName:['',Validators.required],
      writerProfile:['',Validators.required],
      enterStories:['',Validators.required],

    })
  }

  ngOnInit(): void {
    this.spinner.show();
    this.getstoryId();
    this.getmyStory();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }



  onSelectImage(event: any) {
    let files = event.target.files;
    this.imageFile= event.target.files[0].name;
    if (files) {
      this.uploadImage = files[0]
      this.subImageSubmit()
      for (let file of files) {
        if (!file.type.includes('image')) {
          this.isImage = false;this.uploadImage
          return;
        }
        this.imageData.push(file);
      }
    }
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.url = event.target?.result;
      };
    }
  }

  subImageSubmit(){
    // this.Submitted = true;
    let formData = new FormData();    
    formData.append('attachment', this.uploadImage);
    // formData.append('audioFileForTheStory',this.uploadAudio);

    this.api.addAttachments(formData).subscribe(
      (res: any) => {
        console.log(res);
        this.imageData1 = res;
        this.imageData2 = this.imageData1[0].key;
        this.toast.success('Image Uploaded Successfully')
      },
      (err: any) => {
    
        console.log(err);
        
      }
    )

  }

  get f(){
    return this.addStoryForm.controls;
  }


  saveStory(data:any) {

    let body = {
 
      writerName:data.writerName,
      writerProfile:this.imageData2,
      enterStories:data.enterStories
    }



    this.api.addMyStory(body).subscribe((res: any) => {
      console.log(res);
      this.toast.success('Added  Successfully');
      this.router.navigate(["home-dashboard/myquote/quote-dashboard"])


    },
      (error) => {
        this.toast.error('please try again');
      })
  }


  getstoryId(){
    
    this.route.queryParamMap.subscribe((params: any) => {
     let storyId = params.params['storyId'] || 0;
     this.storyId = Number(storyId)
     console.log(this.storyId, 'iddd')
     if (this.storyId == 0) {
   
       this.getmyStory();

     }
   });
 }
 getmyStory(){
  this.api.getMyStory().subscribe((res:any)=>{
    this.storyList = res?.result
    this.storyList.filter((item:any)=>{
      if(item?._id == this.storyId) {
     
        this.getBindData(item)
       
      }
  
    })
   
      })
}
getBindData(data:any){
  console.log(data, 'story llist')
  this.storyName= data?.enterStories
 this.storyWriterImage = data?.writerProfile
 this.storyWriterName= data?.writerName
}


updateStory(id:any, ){
let sId=id
console.log(sId, 'idiiid')
  let body={
    writerName: this.storyWriterName,
      writerProfile:this.imageData2?this.imageData2:this.storyWriterImage,
      enterStories:this.storyName  
  }
  this.api.updateStory(sId,body).subscribe((res:any)=>{
    console.log(res,'update story')
    this.toast.success('Updated Successfully')
    this.router.navigate(["home-dashboard/myquote/quote-dashboard"])
  }
  )
}











}
