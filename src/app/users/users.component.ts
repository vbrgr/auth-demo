import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FetchService } from '../services/fetch.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public result: any;
  constructor(private _service: FetchService) { }

  public getUsersData() {
    this._service.getUsers().subscribe(res => {
      this.result = res;
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client side Error !');
      } else {
        console.log('server side Error !');
      }
    });
  }
  ngOnInit() {
    this.getUsersData();
  }

}
