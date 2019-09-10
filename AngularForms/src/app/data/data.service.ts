import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // image: putsReq-01
  url = 'https://putsreq.com/t1xP1DOA0Yr1HwqWgzZP';
  constructor(private http: HttpClient) { }
  postUserSettingsForm = (userSettings: UserSettings): Observable<any> => {
   // return of(userSettings);
   // using httpVariable
   return this.http.post(this.url, userSettings);
  }

  getSubscriptionTypes(): Observable<string[]> {
    return  of(['Monthly', 'Annual', 'Lifetime']);
  }
}
