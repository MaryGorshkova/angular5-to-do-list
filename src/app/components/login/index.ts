import {Component, OnInit} from '@angular/core';
import {AutenticationService} from '../../services/autentication/autentication.service';
import {UserName} from './types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AutenticationService) {
  }

  ngOnInit() {
  }

  get currentUser(): UserName {
    return this.auth.getUserInfo();
  }

  get isAutenticated(): boolean {
    return this.auth.isAuthenticated();
  }

  onLogin() {
    this.auth.login('anyName');
  }

  onLogout() {
    this.auth.logout();
  }

}
