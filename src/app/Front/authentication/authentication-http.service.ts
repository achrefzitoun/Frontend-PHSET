import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const backUrl: string ='Rev/api/auth/signin';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationHttpService {

  constructor(public http: HttpClient) { }

  signIn(username:string, userPassword:string): Observable<any>{
      let params = new HttpParams().set('username', username).set('userPassword', userPassword);
      return this.http.post<any>('http://localhost:8081/Rev/api/auth/signin', username, {headers: new HttpHeaders(), params: params});
   

  }
}
