import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import {catchError } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService { 
  
  constructor (private http: HttpClient){}
  getConfig():Observable<any> {
    return this.http.get<any>("https://api.publicapis.org/entriesd")
      .pipe(
        catchError(this.handleError)
      )
  }
  handleError(error:HttpErrorResponse){
    return throwError(error.message || "server Error")
  }

}
