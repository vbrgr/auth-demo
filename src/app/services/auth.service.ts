import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: Http) {
   }
   login(credentials) {
    const option = JSON.stringify(credentials);
     return this._http.get('http://192.168.1.37:8080/login', option)
     .map((res: Response) => {
      return res.json();
    }).catch(this._handleError);
  }
   logout() {

   }
   signUp(formfeilds: any): any {
    return this._http.post('http://localhost:8080/signup/', formfeilds)
    .map((res: Response) => {
     return res.json();
   }).catch(this._handleError);
   }
   isLoggedIn() {
     return false;
   }
   public _handleError(err) {
    console.error('Error Raised....' + err);
    return Observable.throw(err || 'Internal Server Error');
  }
}
