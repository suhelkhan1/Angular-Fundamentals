import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/login/auth.service';
import { EventService } from '../events/shared/event.service';
import { ISession } from '../events/shared/event.model';

@Component({
  selector: 'app-navabr',
  templateUrl: './navabr.component.html',
  styles:[`li > a.active {color: orange;}`]
})
export class NavabrComponent implements OnInit {
  searchTerm: string="";
  foundSession: ISession[];
  constructor(private authService: AuthService,
              private eventService: EventService
  ) { }

  ngOnInit() {
  }

  searchSessions(searchTerm){
    this.eventService.searchSessions(searchTerm).subscribe( session => {
      this.foundSession = session;
    })
  }

}
