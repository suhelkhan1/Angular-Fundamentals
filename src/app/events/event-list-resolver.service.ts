import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable()
export class EventListResolverService {

  constructor(private eventService: EventService) { }

  resolve(){
    //return this.eventService.getEvents().map(events => events);
    return this.eventService.getEvents();
  }
}
