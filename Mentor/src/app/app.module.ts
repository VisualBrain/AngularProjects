import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MentorComponent } from './mentor/mentor.component';
import { UserComponent } from './user/user.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminSignUpComponent } from './Admin/admin-sign-up/admin-sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSignUpComponent } from './user/user-sign-up/user-sign-up.component';
import {MatIconModule, MatMenuModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MentorComponent,
    UserComponent,
    NavigationComponent,
    LoginComponent,
    FooterComponent,
    AdminLoginComponent,
    AdminSignUpComponent,
    AdminComponent,
    UserLoginComponent,
    UserSignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
