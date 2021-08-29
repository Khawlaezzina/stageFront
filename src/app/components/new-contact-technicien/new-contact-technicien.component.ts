import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-contact-technicien',
  templateUrl: './new-contact-technicien.component.html',
  styleUrls: ['./new-contact-technicien.component.scss']
})
export class NewContactTechnicienComponent implements OnInit {

  newContactForm!:FormGroup;
  contact!:any;
  constructor(private router : Router, private route: ActivatedRoute,private formBuilder:FormBuilder,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm()
  {
    this.newContactForm=this.formBuilder.group(
      {
        nom: ['',Validators.required],
        
        organisation:['',Validators.required],
        statut:['',Validators.required],
        
        prenom:['',Validators.required],
       
       
        email:['',[Validators.required,Validators.email]],
        adresse:['',Validators.required],
        numeroTelephone:['',[Validators.required,Validators.pattern(/[0-9]{8}/)]],
        fonction:['',Validators.required]

      }
    )
  };
  onSubmitForm()
  {
    const formValue=this.newContactForm.value;
    this.contact={
      'nom':formValue['nom'],
      'prenom':formValue['prenom'],
      'organisation':formValue['organisation'],
      'statut':formValue['statut'],
        'email':formValue['email'],
        'adresse':formValue['adresse'],
        'numeroTelephone':formValue['numeroTelephone'],
        'fonction':formValue['fonction']
    };
    this.httpClient
    .post("http://127.0.0.1:8443/contact/add",this.contact)
    .subscribe(
      Response=>{
        console.log(Response)
        console.log(this.contact);
        if(sessionStorage.getItem("role")=="admin")
        {
          this.router.navigate(['gererConfigurationAdmin']);
        }
        else if(sessionStorage.getItem("role")=="technicien")
        {
          this.router.navigate(['gererConfigurationTechnicien']);
        }
      }
    )
  }

}
