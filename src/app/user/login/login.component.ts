import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router
  ) { }

  login(formValues): void {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }

  cancelLogin() {
    this.router.navigate(['events']);
  }
  ngOnInit() {
  }

}
