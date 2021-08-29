import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthentificationService } from 'src/app/services/user/user-authentification.service';

@Component({
  selector: 'app-logout-user',
  templateUrl: './logout-user.component.html',
  styleUrls: ['./logout-user.component.scss']
})
export class LogoutUserComponent implements OnInit {

  constructor(private authService:UserAuthentificationService,private route:Router) { }

  ngOnInit(): void {
    this.authService.logOut();
    this.route.navigate(['signInUser']);
  }

}
