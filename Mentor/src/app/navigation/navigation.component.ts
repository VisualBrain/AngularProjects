import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import courses from './search_items';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  applicationTitle: string;
  allcourses: string[];
  @Output() messageEvent = new EventEmitter<string>();
  message = '';
  searchStatus = false;
  blur = true;
  constructor() {
    this.applicationTitle = 'MentorApp';
    this.allcourses = courses;
  }
  ngOnInit() {
  }
  onSearchClick = (input: HTMLInputElement) => {
    this.message = input.value;
    if (courses.getProperty('courseName')) {
      this.searchStatus = true;
    }
    this.searchStatus = !this.searchStatus;
    this.blur = false; }
  onCloseClick = () => {
    this.searchStatus = false;
    this.blur = false;
  }
}
