import { Component } from '@angular/core';
import { InsertService } from '../services/insert.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransferService } from '../services/transfer.service';
@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent {
  form = new FormGroup({
    account : new FormGroup({
      username : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      password : new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ])
    })
  });
  public result: any;
  public dat: any = [ {'id' : '', 'name' : '', 'cost' : ''} ];
   constructor(private _router: Router, private _service: InsertService, private transferService: TransferService) {
  }
  public insertData(obj: any): any {
    this._service.insertProduct(obj).subscribe(res => {
      this.dat = [ {'id' : '', 'name' : '', 'cost' : ''} ];
      this.result = res;
      this.transferService.setData(this.result);
        this._router.navigateByUrl('/products');
    }, (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Server side Error !');
        } else {
          console.log('server side Error !');
        }
      });
  }
  products() {
    this._router.navigate(['/products']);
  }


}
