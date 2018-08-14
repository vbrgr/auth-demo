import { FetchService } from '../services/fetch.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { DeleteService } from '../services/delete.service';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-mongo',
  templateUrl: './mongo.component.html',
  styleUrls: ['./mongo.component.css']
})
export class MongoComponent implements OnInit {
    data = this.transferService.getData();
    sucresult: any;
    public result: any;
    public delresult: any;
    constructor(private _router: Router, private _service: FetchService, private _delservice: DeleteService,
       private transferService: TransferService) {
      if (this.data) {
        this.sucresult = this.data;
      }
    }
    ngOnInit() {
        this.getProductsData();
    }
    public getProductsData() {
      this._service.getProducts().subscribe(res => {
        this.result = res;
      }, (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client side Error !');
        } else {
          console.log('server side Error !');
        }
      });
    }
    public deleteProduct(id) {
        this._delservice.deleteProduct(id).subscribe(res => {
        this.getProductsData();
        this.delresult = res;
      }, (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client side Error !');
        } else {
          console.log('Server side Error !');
        }
      });
    }
    editProduct(id) {
      this._router.navigate(['/update', id]);
    }
  }
