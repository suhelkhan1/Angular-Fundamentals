import { Component, OnInit } from '@angular/core';

import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {

  events: any;
  constructor(private eventService: EventService,
              private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events
    });
  }

  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }

}
