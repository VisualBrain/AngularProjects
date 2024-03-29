import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'events-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{ event.name }}</h2>
      <div>Date: {{ event.date }}</div>
      <div>Time: {{ event.time }}</div>
      <div>Price: {{ event.price }}</div>
      <div><img src="{{ event.imageUrl }}" /></div>
      <div>
        <span>Location: {{ event.location.address }}</span>
        <span>&nbsp;</span>
        <span>{{ event.location.city }},{{ event.location.country }}</span>
      </div>
    </div>
  `
})
export class EventsThumbnailComponent {
  @Input() event;
}
