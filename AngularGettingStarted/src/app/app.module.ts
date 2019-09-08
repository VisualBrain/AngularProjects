import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {FormsModule} from '@angular/forms';
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import { StarsComponent } from './shared/stars/stars.component';
import {WelcomeComponent} from './home/welcome.component';
import {ProductService} from './shared/services/product.service';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './products/product-details.component';
import {RouterModule} from '@angular/router';
import {ProductDetailsGuard} from './products/product-details.guard';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarsComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component : ProductListComponent},
      {path: 'products/:id' , component : ProductDetailsComponent, canActivate : [ProductDetailsGuard] },
      {path: 'welcome', component : WelcomeComponent},
      {path: '', redirectTo : 'welcome', pathMatch : 'full' },
      {path: '**' , redirectTo : 'welcome' , pathMatch : 'full' }
    ], { useHash: true})
    // Register the router service and declares the router directives - router-link and router-outlet
    // also exposes the configured routes
  ],
  providers: [ProductService],
  bootstrap: [AppComponent] // starting point of application
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
