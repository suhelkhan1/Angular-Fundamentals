//In-built and third party modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//Custom Components
//Root directory components
import { AppComponent } from './app.component';

//Navbar and Footer components
import { NavabrComponent } from './navabr/navabr.component';
import { FootbarComponent } from './footbar/footbar.component';

//Event Details directory components
import { EventDetailsComponent } from './event-details/event-details.component'
import { SessionListComponent } from './event-details/session-list/session-list.component';
import { UpvoteComponent } from './event-details/upvote/upvote.component';

//Event directory components
import { EventListComponent } from './events/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { CreateEventComponent } from './events/shared/create-event.component';
import { EventSessionComponent } from './events/shared/event-session/event-session.component';

//Common components
import { CollapsibleComponent } from './common/collapsible/collapsible.component';
import { SimpleModelComponent } from './common/simple-model/simple-model.component';

//Error Page components
import { ErrorComponent } from './error/error.component'

//Custom Directives
import { ModelTriggerDirective } from './common/model-trigger.directive';
import { LocationValidatorDirective } from './events/location-validator.directive';

//Custom Services
import { EventService } from './events/shared/event.service'
import { EventListResolverService } from './events/event-list-resolver.service'
import { TOASTR_TOKEN, IToastr } from './common/toastr.service';
import { JQ_TOKEN } from './common/j-query.service';
import { EventRouteActivatorService } from './event-details/event-route-activator.service';
import { AuthService } from './user/login/auth.service';
import { VoterService } from './event-details/voter.service';

//Custom Routes
import { appRoutes } from './routes';
import { DurationPipe } from './events/shared/duration.pipe';

declare let toastr: IToastr;
declare let jQuery: Object;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavabrComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorComponent,
    EventSessionComponent,
    SessionListComponent,
    FootbarComponent,
    CollapsibleComponent,
    DurationPipe,
    SimpleModelComponent,
    ModelTriggerDirective,
    UpvoteComponent,
    LocationValidatorDirective
  ],
  providers: [
      EventService,
      EventListResolverService,
      EventRouteActivatorService,
      AuthService,
      VoterService,
      { provide: TOASTR_TOKEN , useValue: toastr},
      { provide: JQ_TOKEN , useValue: jQuery}
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
