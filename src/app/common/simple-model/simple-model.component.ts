import { Component, OnInit, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { JQ_TOKEN } from '../j-query.service'

@Component({
  selector: 'app-simple-model',
  templateUrl: './simple-model.component.html',
  styleUrls: ['./simple-model.component.css']
})
export class SimpleModelComponent implements OnInit {

  @Input() title: string;
  @Input() elementId: string;
  @ViewChild('modalcontainer') containerElement: ElementRef;
  
  constructor(
    @Inject(JQ_TOKEN) private $: any
  ) { }

  ngOnInit() {
  }

  closeModal(){
    this.$(this.containerElement.nativeElement).modal('hide');
  }

}
