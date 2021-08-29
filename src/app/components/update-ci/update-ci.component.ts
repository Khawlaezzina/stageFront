import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-ci',
  templateUrl: './update-ci.component.html',
  styleUrls: ['./update-ci.component.scss']
})
export class UpdateCIComponent implements OnInit {

  updateCIForm!:FormGroup;
  _id!:string |null;
  _ciToUpdate:any;
  _nom!:string;
  _description!:string;
  _emplacement!:string;
  _organisation!:string;
  _criticite!:string;
  constructor(private router: Router, private route: ActivatedRoute,private httpClient: HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
       
          this._id =params.get('id');
        
      }
    );
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/CI/"+this._id)
    .subscribe(
      response=>{
        this._ciToUpdate=response;
        this._description=this._ciToUpdate['description'];
        this._emplacement=this._ciToUpdate['emplacement'];
        this._organisation=this._ciToUpdate['organisation'];
        this._criticite=this._ciToUpdate['criticite'];
        this._nom=this._ciToUpdate['nom'];
      }

    );
    this.initForm();  
  };
  initForm()
  {
    this.updateCIForm=this.formBuilder.group(
      {
        nom: [this._nom,Validators.required],
        description: [this._description,Validators.required],
        organisation:[this._organisation,Validators.required],
        criticite:[this._criticite,Validators.required],
        emplacement:[this._emplacement,Validators.required]
      

      }
    )
  };
  onSubmitForm()
  {
    this._ciToUpdate={
      'id':this._id,
      'emplacement':this._emplacement,
      'organisation':this._organisation,
      'criticite':this._criticite,
      'description':this._description,
      'nom':this._nom
    }
    this.httpClient
    .put("http://127.0.0.1:8443/CI/"+this._id,this._ciToUpdate)
    .subscribe(
      response=>{
        console.log(this._ciToUpdate);
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
