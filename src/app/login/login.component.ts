import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  invalidLogin: boolean;
  submitted: boolean;
  data = this.transferService.getData();
  result;
  constructor(
    private router: Router,
    private transferService: TransferService,
    private authService: AuthService) {
      if (this.data) {
        this.result = this.data;
      }
    }
    ngOnInit() {
      this.submitted = false;
      this.loginForm = new FormGroup({
          email : new FormControl('', [
            Validators.required
          ]),
          password : new FormControl('', [
            Validators.required
          ])
      });

    }
  public signIn(credentials) {
      this.authService.login(credentials)
        .subscribe(result => {
          if (result) {
            this.router.navigate(['/']);
          } else {
            this.invalidLogin = true;
          }
        });
  }
}
