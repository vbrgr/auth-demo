import { Component, OnInit, Injector } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AlertComponent } from '../alert/alert.component';
@Component({
  selector: 'app-custom-element',
  templateUrl: './custom-element.component.html',
  styleUrls: ['./custom-element.component.css']
})
export class CustomElementComponent implements OnInit {
  content = null;
  constructor(private injector: Injector, domsanitizer: DomSanitizer) {
    const MyElem = createCustomElement(AlertComponent, {injector: this.injector});
    customElements.define('my-elem', MyElem);
    this.content = domsanitizer.bypassSecurityTrustHtml('<my-elem name="said"></my-elem>');
   }

  ngOnInit() {
  }

}
