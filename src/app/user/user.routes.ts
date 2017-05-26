import { Routes } from '@angular/router';

import { ProfileUserComponent } from './profile-user/profile-user.component';
import { LoginComponent } from './login/login.component'

export const userRoutes: Routes = [
    { path: 'profile', component: ProfileUserComponent },
    { path: 'login', component: LoginComponent }
    
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

