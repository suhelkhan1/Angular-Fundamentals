//Inbuilt Modules 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

//Custom Components
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { LoginComponent } from './login/login.component';

//Custom Routes
import { userRoutes } from './user.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProfileUserComponent,
    LoginComponent
  ]
})
export class UserModule { }
