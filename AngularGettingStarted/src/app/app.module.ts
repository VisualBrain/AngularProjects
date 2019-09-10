import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import {ProductService} from './shared/services/product.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component : WelcomeComponent},
      {path: '', redirectTo : 'welcome', pathMatch : 'full' },
      {path: '**' , redirectTo : 'welcome' , pathMatch : 'full' }
    ], { useHash: true}),
    ProductModule
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
