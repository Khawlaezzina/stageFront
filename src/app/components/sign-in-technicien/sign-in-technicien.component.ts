import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TechnicienAuthentificationService } from 'src/app/services/technicien/technicien-authentification.service';

@Component({
  selector: 'app-sign-in-technicien',
  templateUrl: './sign-in-technicien.component.html',
  styleUrls: ['./sign-in-technicien.component.scss']
})
export class SignInTechnicienComponent implements OnInit {
  form!: NgForm;
  user: any;
  username: string="";
  password: string="";
  invalidLogin = false;
  successMessage = "Authentication success";
  errorMessage = "Invalide username or password";
  constructor(private router: Router,
    private service: TechnicienAuthentificationService) { }

  ngOnInit(): void {
  }
  checkLogin(form : NgForm) {
    console.log(form.value.username);
    this.username=form.value['username'];
    this.password=form.value['password'];
    return this.service.authenticate(this.username,this.password);

      }

}
