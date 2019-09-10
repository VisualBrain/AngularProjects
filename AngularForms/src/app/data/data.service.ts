import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //image: putsReq-01
  url:string = 'https://putsreq.com/iNsSsxsOsBV3x1u0yRRg';
  constructor(private http:HttpClient) { }
  postUserSettingsForm = (userSettings:UserSettings):Observable<any> => {
   // return of(userSettings);
   //using httpVariable
   return this.http.post(this.url,userSettings);
  }
}
