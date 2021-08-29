import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthentificationService } from 'src/app/services/user/user-authentification.service';

@Component({
  selector: 'app-sign-in-user',
  templateUrl: './sign-in-user.component.html',
  styleUrls: ['./sign-in-user.component.scss']
})
export class SignInUserComponent implements OnInit {

  form!: NgForm;
  user: any;
  username: string="";
  password: string="";
  invalidLogin = false;
  successMessage = "Authentication success";
  errorMessage = "Invalide username or password";
  constructor(private router: Router,
    private service: UserAuthentificationService) { }

  ngOnInit(): void {
  }
  checkLogin(form : NgForm) {
    console.log(form.value.username);
    this.username=form.value['username'];
    this.password=form.value['password'];
    return this.service.authenticate(this.username,this.password);

      }
}
