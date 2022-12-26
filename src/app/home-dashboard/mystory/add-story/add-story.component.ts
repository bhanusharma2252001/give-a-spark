import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor( private api:SparkService, private fb:FormBuilder, private router:Router, private toast:ToastrService) { 
    this.addStoryForm=this.fb.group({

      writerName:['',Validators.required],
      writerProfile:[''],
      enterStories:[''],

    })
  }

  ngOnInit(): void {
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
        console.log(this.imageData1[0].key, "image key ")
       console.log(this.imageData2) 
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
      this.router.navigate(["home-dashboard/mystory/story-dashboard"])


    },
      (error) => {
        this.toast.error('please try again');
      })
  }
}
