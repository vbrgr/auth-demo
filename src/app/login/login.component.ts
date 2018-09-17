import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;
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
