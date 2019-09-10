import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-user-form-settings',
  templateUrl: './user-form-settings.component.html',
  styleUrls: ['./user-form-settings.component.css']
})
export class UserFormSettingsComponent implements OnInit {

  /**by name */
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };
  //preserving the original Settings, we make a copy of original
  userSettings: UserSettings = { ...this.originalUserSettings }; //using spread operators//copy the originalUserSettings into userSettings
  postError:boolean = false;
  postErrorMessage:string = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
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
 //refer image: changes-034
 onSubmit = (form: NgForm) => {
  console.log('In Submit:', form.valid);
  if(form.valid){
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => { console.log('Success:', result) },
      error => { this.onHttpError(error) }
    );
  }else{
    this.postError = true;
    this.postErrorMessage = 'Please Fix The above Error';
  }
  
}
  onHttpError = (errorResponse: any) => {
    console.log('Error : ',errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }
  onBlur = (nameField: NgModel) => {
    console.log('In Blur:', nameField.valid);
  }
}
