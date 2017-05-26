import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';

import { EventService } from '../events/shared/event.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventService,
              private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if(!eventExists){
      this.router.navigate(['/404'])
    }
    return eventExists;
  }

}
