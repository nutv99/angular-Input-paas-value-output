import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-coma',
  templateUrl: './coma.component.html',
  styleUrls: ['./coma.component.css'],
})
export class ComaComponent implements OnInit {
  @Output() myListChange: EventEmitter<string> = new EventEmitter();
  sData: any = [{}];
  results: any = [{ id: '2', sname: 'CCCCCCC' }];

  constructor() {}

  ngOnInit() {}

  setComAData() {
    this.sData = this.results;
    this.myListChange.emit(this.sData);
  }
}
