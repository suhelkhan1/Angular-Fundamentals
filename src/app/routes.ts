import { Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './events/event-list.component';
import { CreateEventComponent } from './events/shared/create-event.component';
import { ErrorComponent } from './error/error.component';
import { EventSessionComponent } from './events/shared/event-session/event-session.component';

import { EventRouteActivatorService } from './event-details/event-route-activator.service';
import { EventListResolverService } from './events/event-list-resolver.service'

export const appRoutes: Routes = [
    {path:'events/new', component: CreateEventComponent},
    {path:'events', component: EventListComponent, resolve: {events: EventListResolverService}},
    {path:'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
    {path:'events/sessions/new', component: EventSessionComponent},
    {path:'404', component: ErrorComponent},
    {path:'', redirectTo:'events', pathMatch:'full'},
    {path:'user', loadChildren:'app/user/user.module#UserModule' },    
] 