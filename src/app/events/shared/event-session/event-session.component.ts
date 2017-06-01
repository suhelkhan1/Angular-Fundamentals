import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

import { ISession } from '../event.model'; 
@Component({
  selector: 'app-event-session',
  templateUrl: './event-session.component.html',
  styleUrls: ['./event-session.component.css']
})
export class EventSessionComponent implements OnInit {

  constructor(private router: Router) { }
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)]);

    this.newSessionForm = new FormGroup ({
      name: this.name,
      presenter: this.presenter,
      duration : this.duration,
      level : this.level,
      abstract: this.abstract,
    })
  }

  saveSession(formValues) {
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: []
    }
    this.saveNewSession.emit(session);
  }

  cancel(){
    this.cancelAddSession.emit();
  }
}
