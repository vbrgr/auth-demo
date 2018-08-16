import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private _http: Http) { }
  public signUpForm(obj: any): any {
    return this._http.post('http://192.168.1.37:8080/signup/', obj)
    .map((res: Response) => {
     return res.json();
   }).catch(this._handleError);
   }
   public _handleError(err) {
    console.error('Error Raised....' + err);
    return Observable.throw(err || 'Internal Server Error');
  }
}
