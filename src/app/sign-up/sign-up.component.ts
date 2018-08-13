import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from '../services/sign-up.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signForm;
  invalidSignUp: boolean;
  public result: any;
  public dat: any = [ {'name' : '', 'email' : '', 'password' : ''} ];
  constructor(
    private router: Router,
    private transferService: TransferService,
    private _signUpService: SignUpService) {
    }

    public onSignUp(obj) {
    this._signUpService.signUpForm(obj)
      .subscribe(res => {
        if (res) {
          this.dat = [ {'name' : '', 'email' : '', 'password' : ''} ];
          this.result = res;
          this.transferService.setData(this.result);
          this.router.navigateByUrl('/login');
        } else {
          this.invalidSignUp = true;
        }
      });
  }
  ngOnInit() {
    this.signForm = new FormGroup({
        name : new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ]),
        email : new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ]),
        password : new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
        ])
    });

  }

}
