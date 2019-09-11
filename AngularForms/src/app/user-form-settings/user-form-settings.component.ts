import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-form-settings',
  templateUrl: './user-form-settings.component.html',
  styleUrls: ['./user-form-settings.component.css']
})
export class UserFormSettingsComponent implements OnInit {

  /* by name */
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };
  // preserving the original Settings, we make a copy of original
  userSettings: UserSettings = { ...this.originalUserSettings }; // using spread operators//copy the originalUserSettings into userSettings
  postError = false;
  postErrorMessage = '';
  // subscriptionTypes: string[] = ['Monthly', 'Annual', 'LifeTime'];
  subscriptionTypes: Observable<string[]>;
  singleModel: string = 'On';
  constructor(private dataService: DataService) { }
  startDate:Date;
  rangeDate:Date;
  startTime:Date;
  userRating = 0;
  maxRating = 10;
  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    this.startDate = new Date();
    this.startTime = new Date();
  }

  /*
  onSubmit = (form: NgForm) => {
    console.log('In Submit:', form.valid);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => { console.log('Success:', result) },
      error => { console.log('Error :', error) }
      );
  }
  */
  /* // putsReq-05
   onSubmit = (form: NgForm) => {
     console.log('In Submit:', form.valid);
     this.dataService.postUserSettingsForm(this.userSettings).subscribe(
       result => { console.log('Success:', result) },
       error => { console.log('Error :', error) }
       );
   }
   */
  /*
  onSubmit = (form: NgForm) => {
    console.log('In Submit:', form.valid);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => { console.log('Success:', result) },
      error => { this.onHttpError(error) }
    );
  }
  */
  // refer image: changes-034
  /*
  onSubmit = (form: NgForm) => {
    console.log('In Submit:', form.valid);
    if (form.valid) {
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => { console.log('Success:', result); localStorage.setItem('result',JSON.stringify(result));document.cookie = "username=Angular Forms; expires=Monday,12 September 2019 12:00:00 UTC; path=/";
        sessionStorage.setItem('result',result.subscriptionType);},
        error => { this.onHttpError(error); }
      );
    } else {
      this.postError = true;
      this.postErrorMessage = 'Please Fix The above Error';
    }
  }
  onHttpError = (errorResponse: any) => {
    console.log('Error : ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }
   */
  onBlur = (nameField: NgModel) => {
    console.log('In Blur:', nameField.valid);
    console.log(localStorage.getItem('result'));
    console.log(sessionStorage.getItem('result'));
  }
 
  onSubmit = (form: NgForm) => {
    console.log('In Submit:', form.value);
  }
}
