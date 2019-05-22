import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
 login;
  constructor(private authService: AuthService) {
    }
  ngOnInit() {
    this.login = this.authService.isLoggedIn();

  }

}
