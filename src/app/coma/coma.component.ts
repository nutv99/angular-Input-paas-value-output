import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-coma',
  templateUrl: './coma.component.html',
  styleUrls: ['./coma.component.css'],
})
export class ComaComponent implements OnInit {
  @Output() myListChange: EventEmitter<string> = new EventEmitter();
  sData: any = [{}];
  results: any = [{ ID: '2', departmentDesc: 'CCCCCCC' }];
  myurl: string = '';
  apiPath = '/th/department/All/1';

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  async setComAData() {
    //this.results = '';
    this.myurl =
      'https://lovetoshopmall.com/swagger/marlinshopWork2' + this.apiPath;
    //console.log('aa', this.myurl);
    await this.http.get<any>(this.myurl).subscribe((data) => {
      // อ่านค่า result จาก JSON response ที่ส่งออกมา
      console.table('Data For Select List', data);
      this.sData = data;
      this.myListChange.emit(this.sData);
      //this.AllRec = data.totalRec;
      // this.results = data;
    });
  }
}
