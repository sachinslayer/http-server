import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
 
  
  
  
  constructor (private http: HttpClient){}
  getData():Observable<any>{
    const url="https://api.github.com/users"
    return this.http.get<any>(url)
                       .pipe(catchError(this.handleError))
  }
  handleError(error:any) {
    return throwError(error.message || "server Error")
  }
  

}
