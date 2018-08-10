import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `<div>
  <h2>Hello {{name}} !</h2>
  </div>`,
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
@Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
