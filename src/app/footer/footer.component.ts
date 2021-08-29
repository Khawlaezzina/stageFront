import { Component, OnInit } from '@angular/core';
import { AdminAuthentificationService } from '../services/admin/admin-authentification.service';
import { ApprobateurAuthentificationService } from '../services/approbateur/approbateur-authentification.service';
import { TechnicienAuthentificationService } from '../services/technicien/technicien-authentification.service';
import { UserAuthentificationService } from '../services/user/user-authentification.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public loginService: UserAuthentificationService,
    public loginServiceTechnicien : TechnicienAuthentificationService,
    public loginServiceAdmin : AdminAuthentificationService,
    public loginServiceApprobateur : ApprobateurAuthentificationService) { }

  ngOnInit(): void {
  }

}
