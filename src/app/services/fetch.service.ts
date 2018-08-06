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
    return this._http.get('http://localhost:8080/fetch')
    .map((res: Response) => {
      return res.json();
    }).catch(this._handleError);
  }
  public _handleError(err) {
    console.error('Error Raised....' + err);
    return Observable.throw(err || 'Internal Server Error');
  }

}
