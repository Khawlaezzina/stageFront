import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApprobateurAuthentificationService } from 'src/app/services/approbateur/approbateur-authentification.service';

@Component({
  selector: 'app-logout-approbateur',
  templateUrl: './logout-approbateur.component.html',
  styleUrls: ['./logout-approbateur.component.scss']
})
export class LogoutApprobateurComponent implements OnInit {

  constructor(private authService:ApprobateurAuthentificationService,private route:Router) { }

  ngOnInit(): void {
    this.authService.logOut();
    this.route.navigate(['signInApprobateur']);
  }

}
