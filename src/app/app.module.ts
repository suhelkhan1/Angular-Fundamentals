//In-built and third party modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//Created components
import { AppComponent } from './app.component';
import { NavabrComponent } from './navabr/navabr.component';
import { EventComponent } from './event.app.component';
import { EventListComponent } from './events/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './event-details/event-details.component'
import { CreateEventComponent } from './events/shared/create-event.component';
import { ErrorComponent } from './error/error.component'

//Created services
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service';
import { EventRouteActivatorService } from './event-details/event-route-activator.service';

//created routes
import { appRoutes } from './routes';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    EventComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavabrComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorComponent
  ],
  providers: [
      EventService,
      ToastrService,
      EventRouteActivatorService
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
