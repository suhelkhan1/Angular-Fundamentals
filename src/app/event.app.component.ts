import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'event-app',
    template:`
        <app-navabr></app-navabr>
        <router-outlet></router-outlet>
        `
})
export class EventComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}