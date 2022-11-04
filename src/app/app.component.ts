import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  orderno: any = {};
  result: any = {};

  setDataB() {
    this.orderno = 'A111-989';
  }

  ShowNumBerChange(e: any) {
    //alert(e);
    console.log('On App Component ', JSON.stringify(e));
    this.orderno = e;
  }

  BShowNumBerChange(e: any) {
    this.result = e;

    console.log('On App Component  99999', JSON.stringify(e));
    this.orderno = e;
  }

  B2ShowNumBerChange(e: any) {
    this.result = e;

    this.orderno = e;
  }
}
