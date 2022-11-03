import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  orderno: string = '0000';
  result: any = {};

  setDataB() {
    this.orderno = 'A111-989';
  }

  ShowNumBerChange(e: any) {
    //alert(e);
    this.orderno = e;
  }
}
