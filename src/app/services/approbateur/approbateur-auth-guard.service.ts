import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { ApprobateurAuthentificationService } from './approbateur-authentification.service';
@Injectable({
  providedIn: 'root'
})
export class ApprobateurAuthGuardService implements CanActivate{

  constructor(private router: Router,private authService:ApprobateurAuthentificationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn())
    return true;
    this.router.navigate(['home']);
    return false;
    }
}
