import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent implements OnInit {

  constructor() { }
  visible:boolean = true;

  ngOnInit() {
  }
  toggleContent(){
    this.visible = !this.visible;
  }

}
