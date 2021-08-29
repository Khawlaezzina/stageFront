
import { Component, OnInit } from '@angular/core';
import { AdminAuthentificationService } from 'src/app/services/admin/admin-authentification.service';
import { UserAuthentificationService } from 'src/app/services/user/user-authentification.service';
import { ApprobateurAuthentificationService } from 'src/app/services/approbateur/approbateur-authentification.service';
import { TechnicienAuthentificationService } from 'src/app/services/technicien/technicien-authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

   firstName=sessionStorage.getItem("fistName");
   lastName=sessionStorage.getItem("lastName");
  constructor(public loginService: UserAuthentificationService,
    public loginServiceTechnicien : TechnicienAuthentificationService,
    public loginServiceAdmin : AdminAuthentificationService,
    public loginServiceApprobateur : ApprobateurAuthentificationService) { }

  ngOnInit(): void {
  }
  onOpen()
  {

  }

}
