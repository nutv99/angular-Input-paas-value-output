import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  orderno: any = {};
  orderno2: any = {};
  result: any = {};
  resultDirective: any = {};

  setDataB() {
    this.orderno = 'A111-989';
  }

  ShowNumBerChange(e: any) {
    //alert(e);
    // console.log('On App Component ', JSON.stringify(e));
    this.orderno = e;
  }

  BShowNumBerChange(e: any) {
    this.result = e;

    console.log('On App Component  B1', JSON.stringify(e));
    this.orderno = e;
  }

  B2ShowNumBerChange(e: any) {
    console.log('On App Component  B2', JSON.stringify(e));
    //this.result = e;

    this.orderno = e;
  }
  B3ShowNumBerChange(e: any) {
    console.log('On App Component  B3', JSON.stringify(e));
    //this.result = e;

    this.orderno2 = e;
  }

  setResultDirective(e: any) {
    console.log('On App Component  Directive', JSON.stringify(e));
    this.resultDirective = e;
  }
}
