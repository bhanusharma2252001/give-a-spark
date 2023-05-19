import { Component, OnInit, ViewChild, ElementRef,Output,EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-myquote-dashboard',
  templateUrl: './quote-dashboard.component.html',
  styleUrls: ['./quote-dashboard.component.scss']
})
export class QuoteDashboardComponent implements OnInit {
  quotesList:any;
  storyMation=false;
  showAnimation= false
  storyList:any;
  hidebutton:any;
  @Input() hideElement: boolean = false;
  @ViewChild('textElement') textElement: ElementRef;
  @ViewChild('storyElement') storyElement: ElementRef;
  @Output() myquotesSelect = new EventEmitter() 

  text =`You Haven't Created any Quote Yet `;
  storyText=`You Haven't Created any Story Yet `
  currentIndex = 0;
storyIndex =0;
  intervalId: any;
  interVal:any;
  tab=true;
  isChecked: boolean=true;
  constructor(private api:SparkService,private router:Router, private spinner:NgxSpinnerService ) {
    this.resetQuotes()
   }

  ngOnInit(): void {
    this.getmyQuote();
    this.getMyStories();
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);


this.intervalId = setInterval(() => {
      this.updateText();
    }, 300);
  this.interVal= setInterval(() => {
      this.updateStory();
    }, 300);
    
  }

  resetQuotes() {
    this.api.closeMyQuotes.subscribe((res:any)=>{
      if(res) {
        this.isChecked = false
      }
    })
  }

  updateText(): void {
    if (this.currentIndex >= this.text.length) {
      this.currentIndex = 0;
    }
    const currentText = this.text.substring(0, this.currentIndex);
    this.currentIndex++;
    if(this.textElement){


    this.textElement.nativeElement.textContent = currentText;

    }
  }
 
updateStory(){
  
  if (this.storyIndex >= this.storyText.length) {
    this.storyIndex = 0;
  }
  const sText = this.storyText.substring(0, this.storyIndex);
  this.storyIndex++;
  if(this.storyElement){
  this.storyElement.nativeElement.textContent = sText;}

}



ngOnDestroy(){
  clearInterval(this.intervalId);
  clearInterval(this.interVal);

}
getmyQuote(){
  this.api.getMyQuotes().subscribe((res:any)=>{
    this.quotesList=res?.result
    console.log(this.quotesList.length, 'lenght')
    if(this.quotesList?.length == 0){
      this.showAnimation = true
      }
      
    console.log(this.quotesList, 'listkkk;lk')
      })
}

navigate(){
  this.router.navigate(['myquote/add-quote'])
}
getMyStories(){
  this.api.getMyStory().subscribe((res:any)=>{
  this.storyList = res?.result
  if(this.storyList?.length == 0){
    this.storyMation = true

  }
  })
}
navigate1(){
  this.router.navigate(['myquote/add-story'])
}


ShowTab(val:any){
  this.hidebutton=val
  this.tab = false;
}
showQButton(){
  this.tab = true;
}



delQuote(id:any){
 const quoteId = id
 console.log(quoteId,'id')
this.api.delMyQuote(quoteId).subscribe((res:any)=>{
  console.log(res,'del quote ')
  this.getmyQuote()
})
}


  editQuote(val:any) {
  
    let id :number = val;
    console.log(id,'qupte')
  
  
    this.router.navigate(['home-dashboard/myquote/add-quote'], { queryParams: { quoteId: id } })
  }

 



delStory(id:any){
  const storyId= id
  this.api.delMyStory(storyId).subscribe((res:any)=>{
  this.getMyStories();
  })
}


editStory(val:any){
  let id :number = val;
  console.log(id,'story')


  this.router.navigate(['home-dashboard/myquote/add-story'], { queryParams: { storyId: id } })
}

selectQuotes(data:any) {
  console.log(data,'xabkjdbxaskj');
  
  let getQuotes = {
    isQuoteId :null,
    isStoryId:null,
    myQuoteId:data._id,
    myStoryId:null,
    name : data?.enterQuotes
  }
  this.emitData(getQuotes)
}
selectStory(data:any) {
  console.log(data,'xabkjdbxaskj');
  
  let getQuotes = {
    isQuoteId :null,
    isStoryId:null,
    myQuoteId:null,
    myStoryId:data._id,
    name : data?.enterStories
  }
  
  this.emitData(getQuotes)
}
emitData(data:any) {
  this.myquotesSelect.emit(data);
}

}
