import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { UserAuthentificationService } from './user-authentification.service';


@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardService implements CanActivate{


  constructor(private router: Router,
    private authService:UserAuthentificationService) { }
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
if (this.authService.isUserLoggedIn())
return true;
this.router.navigate(['home']);
return false;
}
}
