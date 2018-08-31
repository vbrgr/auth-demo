import { Http, Response } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
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
  constructor(private _http: Http, private router: Router) {
   }
   public login(credentials) {
     const email = credentials['email'];
     const password = credentials['password'];
     return this._http.get('http://192.168.1.37:8080/login/' + email + '/' + password)
     .map((res: Response) => {
       if (res['token']) {
        this.saveToken(res['token']);
      }
      return res.json();
    }).catch(this._handleError);
  }

   public signUp(formfeilds: any): any {
    return this._http.post('http://192.168.1.37:8080/signup/', formfeilds)
    .map((res: Response) => {
     return res.json();
   }).catch(this._handleError);
   }
   public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }
  public isLoggedIn(): boolean {
/*     const jwtHelper = new JwtHelper();
    const token = localStorage.getItem('mean-token');
    const expirationDate = jwtHelper.getTokenExpirationDate(token);
    const isExpired = jwtHelper.isTokenExpired(token);

    console.log('Expiration', expirationDate);
    console.log('isExpired', isExpired); */
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
   private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
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

export interface TokenPayload {
  email: string;
  password: string;
  name: string;
}
