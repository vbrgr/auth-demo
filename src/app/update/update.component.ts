import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../services/update.service';
import { FetchOneService } from '../services/fetch-one.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public params: any;
  public updateresult: any;
  public result: any = [{
    'id' : '',
    'name' : '',
    'cost' : ''
  }];
  constructor(private _router: Router, private _route: ActivatedRoute,
    private _service: UpdateService, private _fservice: FetchOneService) {
  }
  public updateData(obj: any): any {
    this._service.updateProduct(obj).subscribe(res => {
      this.updateresult = res;
    }, (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client side Error !');
        } else {
          console.log('Server side Error !');
        }
      });
  }
  ngOnInit() {
    this._route.paramMap.subscribe(params => {
     const id: any =  params.get('id');
    this._fservice.getOneProduct(id).subscribe(res => {
      this.result = res;
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client side Error !');
      } else {
        console.log('Server side Error !');
      }
    });
  });
  }
  products() {
    this._router.navigate(['/products']);
  }


}
