import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin/admin.model';
import { AdminService } from 'src/app/services/admin/admin.service';


@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.scss']
})
export class NewAdminComponent implements OnInit {

  adminForm!: FormGroup;
  admin:any;
  constructor(private formBuilder:FormBuilder,private service:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm()
  {
    this.adminForm=this.formBuilder.group(
      {
        prenom:['',Validators.required],
        nom:['',Validators.required],
        password:['',[Validators.required,Validators.pattern(/[0-9a-zA-Z]{7,}/)]],
        email:['',[Validators.required,Validators.email]],
        adresse:['',Validators.required],
        numeroTelephone:['',[Validators.required,Validators.pattern(/[0-9]{8}/)]],
        departement:['',Validators.required]
      }
    )
  }
  onSubmitForm()
  {
    const formValue=this.adminForm.value;
    console.log(formValue['prenom']);
    this.admin = {
      'prenom': formValue['prenom'],
      'nom': formValue['nom'],
      'password' : formValue['password'],
      'email': formValue['email'],
      'adresse': formValue['adresse'],
      'numeroTelephone':formValue['numeroTelephone'],
      'departement' :formValue['departement']

    };
    console.log(this.admin);
    this.service.createUser(this.admin).subscribe(
      response=>{
        console.log(response);
        this.router.navigate(['gererProfilAdmin']);
      }
    )

  }

}
