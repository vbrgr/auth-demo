import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface isLoggedIn {
  status: boolean
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(
    private auth:AuthService,
    private http:HttpClient) {}
  
  /*  isLoggedIn(): Observable<isLoggedIn> {
   return this.http.get<isloggedin>('/api/isloggedin.php');
  } */
}

