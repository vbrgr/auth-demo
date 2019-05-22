import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private auth:AuthService, private user: UserService){

  }
  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
      if(this.auth.isLoggedIn){
       return true;
      }
      /* return this.user.isLoggedIn().pipe(map(res=>{
        if(res.status){
          return res.status;
        }
      })) */
    }

  
}
