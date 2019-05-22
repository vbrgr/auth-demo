import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private token: string;
private loggedInStatus = false;
  constructor(private _http: Http, private router: Router) {
   }
    login(credentials) {
     const email = credentials['email'];
     const password = credentials['password'];
<<<<<<< HEAD
     return this._http.get('http://localhost:8080/login/' + email + '/' + password)
=======
     return this._http.post('http://192.168.1.37:8080/login/', credentials)
>>>>>>> b736bf61afb21a7405dc3fa0e792a6942714e898
     .map((res: Response) => {
      return res.json();
    }).catch(this._handleError);
  }

    signUp(formfeilds: any): any {
    return this._http.post('http://localhost:8080/signup/', formfeilds)
    .map((res: Response) => {
     return res.json();
   }).catch(this._handleError);
   }
    getUserDetails() {
      return this._http.get('http://192.168.1.37:8080/data')
    .map((res: Response) => {
     return res.json();
   }).catch(this._handleError);

  }
   public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    return true;
  }
  setLoggedIn(value: boolean){
    this.loggedInStatus = value;
  }

  currentUser(): any {
  }
   saveToken(token: string): any {
    const body =  { 'token': token };
    // this.token = token;
  }

   getToken(): string {
    return this.token;
  }

   logout(): void {
    this.token = '';
    // window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }


   public _handleError(err) {
    console.error('Error Raised....' + err);
    return Observable.throw(err || 'Internal Server Error');
  }
}
export interface UserDetails {
  _id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}
interface isLoggedIn{
  status:boolean;
}
export interface TokenPayload {
  email: string;
  password: string;
  name: string;
}
