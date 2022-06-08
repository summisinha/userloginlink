import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userlog } from './userlog';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private baseUrl="";

  constructor(private httpClient: HttpClient ) { }

  loginuser(userlog: Userlog): Observable<object>{
    console.log(userlog)
    return this.httpClient.post(`$(this.baseUrl)`,userlog);
  }
}
