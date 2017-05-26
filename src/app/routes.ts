import { Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './events/event-list.component';
import { CreateEventComponent } from './events/shared/create-event.component';
import { ErrorComponent } from './error/error.component';

import { EventRouteActivatorService } from './event-details/event-route-activator.service';

export const appRoutes: Routes = [
    {path:'events/new', component: CreateEventComponent},
    {path:'events', component: EventListComponent},
    {path:'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
    {path:'404', component: ErrorComponent},
    {path:'', redirectTo:'events', pathMatch:'full'},
    {path:'user', loadChildren:'app/user/user.module#UserModule' },    
] 