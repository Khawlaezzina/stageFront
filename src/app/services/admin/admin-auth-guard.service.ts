import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminAuthentificationService } from './admin-authentification.service';
import { ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private router:Router,private authService:AdminAuthentificationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn())
    return true;
    this.router.navigate(['home']);
    return false;
    }
}
