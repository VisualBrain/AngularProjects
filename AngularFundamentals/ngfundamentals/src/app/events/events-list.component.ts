import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'events-list',
  template: `<div>
  <h1>Upcoming Angular Events</h1>
  <hr />
  <hr />
  <events-thumbnail [event]='event1'></events-thumbnail>
  </div>`
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Component',
    date: '4/5/3421',
    time: '10.00am',
    price: 433.4,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '4323 PlaceMall',
      city: 'Chengdou',
      country: 'Republic of China'
    }
  };
}
