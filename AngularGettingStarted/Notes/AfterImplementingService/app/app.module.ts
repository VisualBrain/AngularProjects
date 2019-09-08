import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {FormsModule} from '@angular/forms';
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import { StarsComponent } from './shared/stars/stars.component';
import {WelcomeComponent} from './home/welcome.component';
import {ProductService} from './shared/services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
Ng Module-->
* import - external modules that we want to use and makes it available to all of the components that belong to this angular module
* export
* bootstrap - array defines the startup component of the application
* providers
* declarations - declarations arrays which defines which of our components belong to this module
* */

/*
* BrowserModule register important application service providers like error handling
* */
