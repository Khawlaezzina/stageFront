import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthentificationService } from 'src/app/services/admin/admin-authentification.service';

@Component({
  selector: 'app-logout-admin',
  templateUrl: './logout-admin.component.html',
  styleUrls: ['./logout-admin.component.scss']
})
export class LogoutAdminComponent implements OnInit {

  constructor(private authService:AdminAuthentificationService,private route:Router) { }

  ngOnInit(): void {
    this.authService.logOut();
    this.route.navigate(['']);
  }

}
