import { Component, OnInit } from '@angular/core';
import {tour} from './tour-model';

@Component({
  selector: 'app-tour-list',
  templateUrl: './templates/tour-list.component.html',
  styleUrls: ['./styles/tour-list.component.css']
})
export class TourListComponent implements OnInit {

  tours: tour[] = [
    new tour('Kazbegi', 'ძაან სირიოზულია ყაზბეგში!', 'https://live.staticflickr.com/5068/5689601475_9072114075_b.jpg', 120, 2)
  ];

  constructor() { }

  ngOnInit() {
  }

}
 