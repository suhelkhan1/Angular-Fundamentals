import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from './event.service';
@Component({
    templateUrl: './create-event.component.html'
})
export class CreateEventComponent implements OnInit {
    constructor(private router: Router,
                private eventService: EventService
    ) { }

    saveEvent(formValues){
        this.eventService.saveEvent(formValues);
        this.router.navigate(['/events']);
    }
    cancel(): void{
        this.router.navigate(['/events']);
    }
    ngOnInit() { }

}