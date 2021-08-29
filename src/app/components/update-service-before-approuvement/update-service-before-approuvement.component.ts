import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-service-before-approuvement',
  templateUrl: './update-service-before-approuvement.component.html',
  styleUrls: ['./update-service-before-approuvement.component.scss']
})
export class UpdateServiceBeforeApprouvementComponent implements OnInit {

  updateServiceForm!:FormGroup;
  _id!:string |null;
  _sujet!:string;
  _description!:string;
  _serviceToUpdate:any;
  _impact!:string;
  _urgence!:string;
  _idUtilisateur:any;
  _dateOuverture!:string;
  _priorite!:number;
  constructor(private router: Router, private route: ActivatedRoute,private httpClient: HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
       
          this._id =params.get('id');
        
      }
    );
     this.httpClient
     .get<any[]>("http://127.0.0.1:8443/service/"+this._id) 
     .subscribe(
       response=>{
         this._serviceToUpdate=response;
         this._sujet=this._serviceToUpdate["sujet"];
        this._description= this._serviceToUpdate["description"];      
       
        this._impact= this._serviceToUpdate["impact"];  
        this._urgence= this._serviceToUpdate["urgence"];  
        this._idUtilisateur=this._serviceToUpdate["idUtilisateur"];
        this._dateOuverture=this._serviceToUpdate["dateOuverture"];
        

      }
     );
     this.initForm();

  }
  initForm()
  {
    this.updateServiceForm=this.formBuilder.group(
      {
        sujet: [this._sujet,Validators.required],
        description: [this._description,Validators.required],
       
        impact:[this._impact,Validators.required],
        urgence:[this._urgence,Validators.required],
        

      }
    )
  }
  onSubmitForm()
  {
    if(this._impact==="Fort")
    {
      if(this._urgence==="Fort")
        this._priorite=2;
      else if(this._urgence==="Moyen")
        this._priorite=2;
      else
        this._priorite=1;
    };
    if(this._impact==="Moyen")
    {
      if(this._urgence==="Fort")
        this._priorite=2;
      else if(this._urgence==="Moyen")
        this._priorite=1;
      else
        this._priorite=0;
    };
    if(this._impact==="Faible")
    {
      if(this._urgence==="Fort")
        this._priorite=1;
      else if(this._urgence==="Moyen")
        this._priorite=0;
      else
        this._priorite=0;
    };
    this._serviceToUpdate={
      'id':this._id,
      'sujet':this._sujet,
      'description':this._description,
      'impact':this._impact,
      'urgence':this._urgence,
      'idUtilisateur':this._idUtilisateur,
      'dateOuverture':this._dateOuverture,
      'idApprobateur':
      {
        'id':sessionStorage.getItem('id')
      },
      'priorite':this._priorite,
      'ticketStatut':"En attente",
      
    };
    this.httpClient
    .put("http://127.0.0.1:8443/service/"+this._id,this._serviceToUpdate)
    .subscribe(
      Response=>{
        console.log(Response);
        console.log(this._serviceToUpdate);
        this.router.navigate(['listTicketsForApprouvement']);
      }
    )
  }
  }

