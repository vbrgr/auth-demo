import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) {
   }
   login(credentials) {
     return this.http.post('http://localhost:8080/login/',
     JSON.stringify(credentials))
     .map(response => {
       console.log(response.json());
    });
  }
   logout() {

   }
   isLoggedIn() {
     return false;
   }
}
