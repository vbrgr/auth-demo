import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class TransferService {

  constructor(
    private router: Router,
  ) { }

  private data;

  setData(data) {
    this.data = data;
  }

  getData() {
    const temp = this.data;
    this.clearData();
    return temp;
  }

  clearData() {
    this.data = undefined;
  }

}
