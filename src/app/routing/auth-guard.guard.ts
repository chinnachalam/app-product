import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router){};


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let isLoggedIn = this.authService.isAuthenticated();
    if (isLoggedIn){
      return true
    } else {
      this.router.navigate(['/login']);
    }
    return true;
  }
}
