import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm!: FormGroup;
  user:any;
  constructor(private formBuilder:FormBuilder,private service:UserService,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm()
  {
    this.userForm=this.formBuilder.group(
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
    const formValue=this.userForm.value;
    console.log(formValue['prenom']);
    this.user = {
      'prenom': formValue['prenom'],
      'nom': formValue['nom'],
      'password' : formValue['password'],
      'email': formValue['email'],
      'adresse': formValue['adresse'],
      'numeroTelephone':formValue['numeroTelephone'],
      'departement' :formValue['departement']

    };
    console.log(this.user);
    this.service.createUser(this.user).subscribe(
      response=>{
        console.log(response);
        this.router.navigate(['gererProfilAdmin']);
      }
    )

  }

}
