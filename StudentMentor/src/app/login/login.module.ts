import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { MentorSignUpComponent } from './mentor-sign-up/mentor-sign-up.component';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  declarations: [
    LoginComponent,
    UserSignUpComponent,
    MentorSignUpComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: 'signup', component: SignUpComponent },
    { path: 'user-signup', component: UserSignUpComponent },
    { path: 'mentor-signup', component: MentorSignUpComponent },
    { path: 'login', component: LoginComponent }
    ])
  ]
})
export class LoginModule { }
