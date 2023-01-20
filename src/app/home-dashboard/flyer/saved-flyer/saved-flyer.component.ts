import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-flyer',
  templateUrl: './saved-flyer.component.html',
  styleUrls: ['./saved-flyer.component.scss']
})
export class SavedFlyerComponent implements OnInit {
  entities = [
    { id: 1, name: 'Netanel Basal', isAdmin: true },
    { id: 2, name: 'John Due', isAdmin: false },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
