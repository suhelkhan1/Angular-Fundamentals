import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from './shared/event.model';

@Component({
    selector: 'event-thumbnail',
    templateUrl:`./event-thumbnail.component.html`,
    styles:[`
      .thumbnail { min-height: 210px; }
      .green { color: green !important;}
      .red { color: red !important;}
      .orange { color: orange !important;}
      .bold { font-weight: bold;}
  `]
})

export class EventThumbnailComponent implements OnInit {
    
    @Input() event:IEvent

    getStartTimeClass(){
        if(this.event && this.event.time == '8:00 am'){
            return ['green','bold']
        } else if(this.event && this.event.time == '10:00 am'){
            return ['red','bold']
        } else {
            return ['orange','bold']
        }
    }

    ngOnInit() { }
}