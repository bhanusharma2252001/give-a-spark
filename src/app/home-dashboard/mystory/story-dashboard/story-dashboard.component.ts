import { Component, OnInit } from '@angular/core';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-story-dashboard',
  templateUrl: './story-dashboard.component.html',
  styleUrls: ['./story-dashboard.component.scss']
})
export class StoryDashboardComponent implements OnInit {
  storyList:any;
  constructor(private api:SparkService) { }

  ngOnInit(): void {
    this.getMyStories()
  }



getMyStories(){
  this.api.getMyStory().subscribe((res:any)=>{
  this.storyList = res?.result
  })
}


}