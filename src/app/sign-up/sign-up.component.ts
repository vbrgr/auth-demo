import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from '../services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  invalidSignUp: boolean;
  public result: any;
  public dat: any = [ {'name' : '', 'email' : '', 'password' : ''} ];
  constructor(
    private router: Router,
    private _signUpService: SignUpService) { }

    signUp(signupform) {
    this._signUpService.signUp(JSON.stringify(signupform))
      .subscribe(res => {
        if (res) {
          this.dat = [ {'name' : '', 'email' : '', 'password' : ''} ];
          this.result = res;
        } else {
          this.invalidSignUp = true;
        }
      });
  }
  ngOnInit() {

  }

}
