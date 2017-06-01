import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { EventService } from '../events/shared/event.service'
import { ISession } from '../events/shared/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html'
})
export class EventDetailsComponent implements OnInit {

  event:any;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';
  constructor(private eventService: EventService,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) =>{
      this.event = this.eventService.getEvent(+params['id']);
      this.addMode=false;
    })
  }
  addSession(){
    this.addMode=true;
  }
  saveNewSession(session:ISession){
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode=false;
  }
  cancelAddSession(){
    this.addMode=false;
    }
}
