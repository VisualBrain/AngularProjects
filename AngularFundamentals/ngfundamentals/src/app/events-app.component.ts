import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'events-app',
  template: `
    <div>
      <events-list></events-list>
    </div>
  `
})
export class EventsAppComponent {
  title = 'ngfundamentals';
}
