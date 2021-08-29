import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { TechnicienAuthentificationService } from './technicien-authentification.service';
@Injectable({
  providedIn: 'root'
})
export class TechnicienAuthGuardService implements CanActivate{

  constructor(private router: Router,private authService:TechnicienAuthentificationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn())
    return true;
    this.router.navigate(['home']);
    return false;
    }
}
