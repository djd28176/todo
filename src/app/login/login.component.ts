import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = 'jeffrey'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  //Router

  constructor(private router: Router,
    private hardcodedAuthenticationSerivce: HardcodedAuthenticationService) { }
  handleLogin() {
    if (this.hardcodedAuthenticationSerivce.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
