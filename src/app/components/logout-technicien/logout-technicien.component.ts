import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TechnicienAuthentificationService } from 'src/app/services/technicien/technicien-authentification.service';

@Component({
  selector: 'app-logout-technicien',
  templateUrl: './logout-technicien.component.html',
  styleUrls: ['./logout-technicien.component.scss']
})
export class LogoutTechnicienComponent implements OnInit {

  constructor(private authService:TechnicienAuthentificationService,private route:Router) { }

  ngOnInit(): void {
    this.authService.logOut();
    this.route.navigate(['signInTech']);
  }

}
