import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TechnicienService } from 'src/app/services/technicien/technicien.service';

@Component({
  selector: 'app-new-technicien',
  templateUrl: './new-technicien.component.html',
  styleUrls: ['./new-technicien.component.scss']
})
export class NewTechnicienComponent implements OnInit {
  technicienForm!: FormGroup;
  technicien:any;
  constructor(private formBuilder:FormBuilder,private service:TechnicienService,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm()
  {
    this.technicienForm=this.formBuilder.group(
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
    const formValue=this.technicienForm.value;
    console.log(formValue['prenom']);
    this.technicien = {
      'prenom': formValue['prenom'],
      'nom': formValue['nom'],
      'password' : formValue['password'],
      'email': formValue['email'],
      'adresse': formValue['adresse'],
      'numeroTelephone':formValue['numeroTelephone'],
      'departement' :formValue['departement']

    };
    console.log(this.technicien);
    this.service.createUser(this.technicien).subscribe(
      response=>{
        console.log(response);
        this.router.navigate(['gererProfilAdmin']);
      }
    )

  }

}
