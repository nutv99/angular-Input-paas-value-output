import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Directive({
  selector: '[appPhttp]',
})
export class PhttpDirective {
  // @Output() appHttpOut = new EventEmitter();
  @Output() appHttpOut: EventEmitter<any> = new EventEmitter();
  myurl = 'th/category/All/1';
  apiPathInput = 'th/category/All/1';
  results: any = {};

  constructor(private http: HttpClient) {}
  @HostListener('input', ['$event']) LoadDataFromBackEnd(event: any) {
    this.myurl =
      'https://lovetoshopmall.com/swagger/marlinshopWork2/' + this.apiPathInput;

    this.http.get<any>(this.myurl).subscribe((data) => {
      // อ่านค่า result จาก JSON response ที่ส่งออกมา
      console.table('Data For Directive', data);

      // this.results = data;
      this.appHttpOut.emit(data);

      //this.myListChange.emit(this.sData);
      //this.AllRec = data.totalRec;
      // this.results = data;
    });
  }
}
