import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApprobateurAuthentificationService } from 'src/app/services/approbateur/approbateur-authentification.service';

@Component({
  selector: 'app-sign-in-approbateur',
  templateUrl: './sign-in-approbateur.component.html',
  styleUrls: ['./sign-in-approbateur.component.scss']
})
export class SignInApprobateurComponent implements OnInit {

  form!: NgForm;
  user: any;
  username: string="";
  password: string="";
  invalidLogin = false;
  successMessage = "Authentication success";
  errorMessage = "Invalide username or password";
  constructor(private router: Router,
    private service: ApprobateurAuthentificationService) { }

  ngOnInit(): void {
  }
  checkLogin(form : NgForm) {
    console.log(form.value.username);
    this.username=form.value['username'];
    this.password=form.value['password'];
    return this.service.authenticate(this.username,this.password);

      }

}
