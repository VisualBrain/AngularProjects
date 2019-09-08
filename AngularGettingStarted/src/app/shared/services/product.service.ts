import {Injectable} from '@angular/core';
import {IProduct} from '../../products/iproduct';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {stringify} from 'querystring';
import {error} from 'util';

@Injectable({
  providedIn: 'root' // we can access its service from any component or application
})
export class ProductService {
  private productsUrl: string = 'api/products/products.json';
  constructor(private httpClient: HttpClient) {}
  /* Since http.get is asynchronous call it return output as Observable*/
  getProducts = (): Observable<IProduct[]> => {
    return this.httpClient.get<IProduct[]>(this.productsUrl).pipe(
      tap(data => console.log('All : ' + JSON.stringify(data))), // tap logs the current data to console
      catchError(this.handleError)
    );
  }
  private handleError = (err: HttpErrorResponse) => {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An Error Occured : ${err.error.message}`;
    } else {
      errorMessage = `Server returned code :${err.status},Error Message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
