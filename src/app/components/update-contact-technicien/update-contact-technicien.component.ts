import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-contact-technicien',
  templateUrl: './update-contact-technicien.component.html',
  styleUrls: ['./update-contact-technicien.component.scss']
})
export class UpdateContactTechnicienComponent implements OnInit {

  updateContactForm!:FormGroup;
  contact!:any;
  contactUpdated!:any;
  _id!:string|null;
  _nom!:string;
  _prenom!:string;
  _organisation!:string;
  _fonction!:string;
  _statut!:string;
  _email!:string;
  _numeroTelephone!:string;
  _adresse!:string;
  constructor(private router : Router, private route: ActivatedRoute,private formBuilder:FormBuilder,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
       
          this._id =params.get('id');
        
      }
    );
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/contact/"+this._id)
    .subscribe(
      Response=>{
        this.contact=Response;
        this._nom=this.contact['nom'];
        this._prenom=this.contact['prenom'];
        this._organisation=this.contact['organisation'];
        this._fonction=this.contact['fonction'];
        this._statut=this.contact['statut'];
        this._email=this.contact['email'];
        this._numeroTelephone=this.contact['numeroTelephone'];
        this._adresse=this.contact['adresse'];
      }
    );
    this.initForm();
  }
  initForm()
  {
 
    this.updateContactForm=this.formBuilder.group(
      {
        nom: [this._nom,Validators.required],
        
        organisation:[this._prenom,Validators.required],
        statut:[this._statut,Validators.required],
        
        prenom:[this._prenom,Validators.required],
       
       
        email:[this._email,[Validators.required,Validators.email]],
        adresse:[this._adresse,Validators.required],
        numeroTelephone:[this._numeroTelephone,[Validators.required,Validators.pattern(/[0-9]{8}/)]],
        fonction:[this._fonction,Validators.required]

      }
    )
  };
  onSubmitForm()
  {
    const formValue=this.updateContactForm.value;
    this.contactUpdated={
      'nom':this._nom,
      'prenom':this._prenom,
      'organisation':this._organisation,
      'statut':this._statut,
        'email':this._email,
        'adresse': this._adresse,
        'numeroTelephone':this._numeroTelephone,
        'fonction':this._fonction
    };
    this.httpClient
    .put("http://127.0.0.1:8443/contact/"+this._id,this.contactUpdated)
    .subscribe
    (
      response=>{
            console.log(response);
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
