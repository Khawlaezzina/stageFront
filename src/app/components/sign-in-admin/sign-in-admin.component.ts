import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { NgForm } from '@angular/forms';
import { AdminAuthentificationService } from 'src/app/services/admin/admin-authentification.service';
@Component({
  selector: 'app-sign-in-admin',
  templateUrl: './sign-in-admin.component.html',
  styleUrls: ['./sign-in-admin.component.scss']
})
export class SignInAdminComponent implements OnInit {

  form!: NgForm;
  admin: any;
  username: string="";
  password: string="";
  id!: string;
  password_verification!: string;
  invalidLogin = false;
  successMessage = "Authentication success";
  errorMessage = "Invalide username or password";
  default_password="02101998"
  default_email="admin.default@cni.com"

  constructor(private router: Router,
              private service: AdminAuthentificationService) {
  }

  ngOnInit() {
  }

  checkLogin(form : NgForm) {
    console.log(form.value.username);
    this.username=form.value['username'];
    this.password=form.value['password'];
    return this.service.authenticate(this.username,this.password);

      }
    


}
