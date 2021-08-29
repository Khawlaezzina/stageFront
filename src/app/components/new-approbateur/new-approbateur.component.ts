import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApprobateurService } from 'src/app/services/approbateur/approbateur.service';

@Component({
  selector: 'app-new-approbateur',
  templateUrl: './new-approbateur.component.html',
  styleUrls: ['./new-approbateur.component.scss']
})
export class NewApprobateurComponent implements OnInit {

  approbateurForm!: FormGroup;
  approbateur:any;
  constructor(private formBuilder:FormBuilder,private service:ApprobateurService,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm()
  {
    this.approbateurForm=this.formBuilder.group(
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
    const formValue=this.approbateurForm.value;
    console.log(formValue['prenom']);
    this.approbateur = {
      'prenom': formValue['prenom'],
      'nom': formValue['nom'],
      'password' : formValue['password'],
      'email': formValue['email'],
      'adresse': formValue['adresse'],
      'numeroTelephone':formValue['numeroTelephone'],
      'departement' :formValue['departement']

    };
    console.log(this.approbateur);
    this.service.createUser(this.approbateur).subscribe(
      response=>{
        console.log(response);
        this.router.navigate(['gererProfilAdmin']);
      }
    )

  }

}
