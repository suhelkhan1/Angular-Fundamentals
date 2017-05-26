import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navabr',
  templateUrl: './navabr.component.html',
  styles:[`li > a.active {color: orange;}`]
})
export class NavabrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
