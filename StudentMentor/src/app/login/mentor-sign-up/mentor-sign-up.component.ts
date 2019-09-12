import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mentor-sign-up',
  templateUrl: './mentor-sign-up.component.html',
  styleUrls: ['./mentor-sign-up.component.css']
})
export class MentorSignUpComponent implements OnInit {
  title: string = 'Mentor SignUp';
  name: string;
  skills: string[] = ['Spring', 'Hibernate', 'Bootstrap', 'ASP.Net', 'Javascript', 'Typescript', 'Go', 'Django', 'Python'];
  timeZones: string[] = ['UTC', 'AWST', 'BIT'];
  timeSlots: string[] = ['10am-12pm', '12pm-2pm', '2pm-4pm', '4pm-6pm', '6pm-8pm'];
  facilities: string[] = ['Material', 'LAB', 'Example'];
  constructor() { }
  ngOnInit() {
    console.log('Name:', this.name);
  }

}
