import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnicienService } from 'src/app/services/technicien/technicien.service';

@Component({
  selector: 'app-update-technicien',
  templateUrl: './update-technicien.component.html',
  styleUrls: ['./update-technicien.component.scss']
})
export class UpdateTechnicienComponent implements OnInit {

  _adminToUpdate:any;
  _id!:string|null;
  _prenom!:string;
  _nom!:string;
  _adresse!:string;
  _numeroTelephone!:string;
  _departement!:string;
  adminForm!:FormGroup;
  _password!:string;
  _email!:string;
  constructor( private router: Router, private route: ActivatedRoute,private httpClient: HttpClient,private formBuilder:FormBuilder,private service:TechnicienService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
       
          this._id =params.get('id');
        
      }
    );
    this.service.getUsers(this._id)
    .subscribe(
        Response=>{
          this._adminToUpdate=Response;
          this._prenom=this._adminToUpdate['prenom'];
          this._nom=this._adminToUpdate['nom'];
          this._adresse=this._adminToUpdate['adresse'];
          this._numeroTelephone=this._adminToUpdate['numeroTelephone'];
          this._departement=this._adminToUpdate['departement'];
          this._password=this._adminToUpdate['password'];
          this._email=this._adminToUpdate['email'];
          console.log(this._adminToUpdate);
        }
    ) ;
    this.initForm();
   }
   initForm()
   {
     this.adminForm=this.formBuilder.group(
       {
         prenom:[this._prenom,Validators.required],
         nom:[this._nom,Validators.required],
         adresse:[this._adresse,Validators.required],
         numeroTelephone:[this._numeroTelephone,[Validators.required,Validators.pattern(/[0-9]{8}/)]],
         departement:[this._departement,Validators.required]
       }
     )
   }
   onSubmitForm()
   {
     const formValue=this.adminForm.value;
     console.log(formValue['prenom']);
     this._adminToUpdate = {
       'id':this._id,
       'prenom': formValue['prenom'],
       'nom': formValue['nom'],
       'password' : this._password,
       'email': this._email,
       'adresse': formValue['adresse'],
       'numeroTelephone':formValue['numeroTelephone'],
       'departement' :formValue['departement']
 
     };
     console.log(this._adminToUpdate);
     this.service.updateUser(this._adminToUpdate)
     .subscribe(
       Response=>{
         console.log(Response);
         this.router.navigate(['gererProfilAdmin']);
       }
     )
 
   }

}
