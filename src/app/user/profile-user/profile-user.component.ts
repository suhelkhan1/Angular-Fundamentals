import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../login/auth.service';
import {  TOASTR_TOKEN,IToastr } from '../../common/toastr.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  profileForm:FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;  

  constructor(private router: Router,
              private authService: AuthService,
              @Inject(TOASTR_TOKEN) private toastr: IToastr 
  ){}

  ngOnInit() {
    this.firstName = new FormControl(
      this.authService.currentUser.firstName , 
      [Validators.required, Validators.pattern('[A-Za-z]+') ]
      );
    this.lastName = new FormControl(
      this.authService.currentUser.lastName, 
      [Validators.required, Validators.pattern('[A-Za-z]+') ]
      );
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }
  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched;
  }
  validateLastName(){
    return this.lastName.valid || this.lastName.untouched;
  }
  submitProfileForm(formValues){
    if(this.profileForm.valid){
      this.authService.updateProfile(formValues.firstName, formValues.lastName);
      this.toastr.success('Profile saved');   
    }
  }
  cancel(){
    this.router.navigate(['events']);
  }
}
