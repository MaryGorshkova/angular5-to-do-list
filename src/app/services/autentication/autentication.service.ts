import { Injectable } from '@angular/core';
import {UserName} from '../../components/login/types';

const USER_KEY = 'userName';
const TOKEN_KEY = 'token';

@Injectable()
export class AutenticationService {
  token: string;
  userName: UserName;
  protected readonly storage = localStorage;

  private getItem(key: string): string {
    return JSON.parse(this.storage.getItem(key));
  }

  private setItem(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  private removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  login(user: UserName) {
    this.setItem(USER_KEY, user);
    this.setItem(TOKEN_KEY, 'anyToken');
  }

  logout() {
    this.removeItem(USER_KEY);
    this.removeItem(TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getItem(TOKEN_KEY);
  }

  getUserInfo(): UserName {
    return this.getItem(USER_KEY);
  }

}
