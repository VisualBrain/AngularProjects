import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `
  //   <div>
  //       <h1>{{title}}</h1>
  //       <app-products></app-products>
  //   </div>
  // `
  templateUrl: './app.component.html'
})
export class AppComponent {
  pageTitle: string = 'Angular Getting Started';
}
