import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  isLoggedIn = false;
  constructor() {}
  isAuthenticated() {
    return (
      localStorage.getItem('isLoggedIn') == 'true'
      //sessionStorage.getItem('isLoggedIn') == 'true'
    );
  }
}
