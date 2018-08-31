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
export class FetchService {
  constructor(private _http: Http) {
  }
  public getProducts(): any {
    return this._http.get('http://192.168.1.37:8080/fetch/products')
    .map((res: Response) => {
      return res.json();
    }).catch(this._handleError);
  }
  public getUsers(): any {
    return this._http.get('http://192.168.1.37:8080/fetch/users')
    .map((res: Response) => {
      return res.json();
    }).catch(this._handleError);
  }
  public getUsersByEmail(email, password): any {
    return this._http.get('http://192.168.1.37:8080/fetch-users/' + email + '/' + password)
    .map((res: Response) => {
      return res.json();
    }).catch(this._handleError);
  }
  public _handleError(err) {
    console.error('Error Raised....' + err);
    return Observable.throw(err || 'Internal Server Error');
  }

}
