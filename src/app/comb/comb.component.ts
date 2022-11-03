import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comb',
  templateUrl: './comb.component.html',
  styleUrls: ['./comb.component.css'],
})
export class CombComponent implements OnInit {
  @Input() DataB: string = '';
  @Input() results: any = [{ id: '1', sname: 'AAAAA' }];

  constructor() {}

  ngOnInit() {}
}
