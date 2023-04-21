import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.scss']
})
export class AddQuoteComponent implements OnInit {


  addQuoteForm:FormGroup;
  imageData = [] as any;
  Submitted = false;
  imageFile: any = '';

  url: string | ArrayBuffer | null | undefined;
  isImage = true;
  uploadImage:any;


  imageData1:any;
  imageData2:any;
  constructor( private api:SparkService, private fb:FormBuilder,private spinner:NgxSpinnerService ,private router:Router, private toast:ToastrService) { 
    this.addQuoteForm=this.fb.group({

      writerName:['',Validators.required],
      writerProfile:['',Validators.required],
      enterQuotes:['',Validators.required],

    })
  }

  ngOnInit(): void {
    this.spinner.show();

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
        console.log(this.imageData1[0].key, "image key ")
       console.log(this.imageData2) 
      },
      (err: any) => {
    
        console.log(err);
        
      }
    )

  }




  saveQuote(data:any) {

    let body = {
 
      writerName:data.writerName,
      writerProfile:this.imageData2,
      enterQuotes:data.enterQuotes
    }



    this.api.addQuote(body).subscribe((res: any) => {
      console.log(res);
      this.toast.success('Added  Successfully');
      this.router.navigate(["home-dashboard/myquote/quote-dashboard"])


    },
      (error) => {
        this.toast.error('please try again');
      })
  }
}
