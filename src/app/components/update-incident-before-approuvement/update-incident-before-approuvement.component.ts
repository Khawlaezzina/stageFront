import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-incident-before-approuvement',
  templateUrl: './update-incident-before-approuvement.component.html',
  styleUrls: ['./update-incident-before-approuvement.component.scss']
})
export class UpdateIncidentBeforeApprouvementComponent implements OnInit {

  _id!:string |null;
  _sujet!:string;
  _description!:string;
  _incidentToUpdate:any;
  _cause!:string;
  _motCle!:string;
  _urgence!:string;
  _impact!:string;
  _idUtilisateur!:any;
  _priorite!:number;
  _solution!:string;
  _typeDeSolution!:string;
  updateTicketForm!:FormGroup;
  _dateOuverture!:string;
  _idProbleme!:any;
  constructor( private router: Router, private route: ActivatedRoute,private httpClient: HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
       
          this._id =params.get('id');
        
      }
    );
     this.httpClient
     .get<any[]>("http://127.0.0.1:8443/incident/"+this._id) 
     .subscribe(
       response=>{
         this._incidentToUpdate=response;
         this._sujet=this._incidentToUpdate["sujet"];
        this._description= this._incidentToUpdate["description"];      
        this._motCle= this._incidentToUpdate["motCle"];
        this._impact= this._incidentToUpdate["impact"];  
        this._urgence= this._incidentToUpdate["urgence"];  
        this._idUtilisateur=this._incidentToUpdate["idUtilisateur"];
        this._dateOuverture=this._incidentToUpdate["dateOuverture"];
        this._cause=this._incidentToUpdate["cause"];
        this._idProbleme=this._incidentToUpdate["idProbleme"];

      }
     );
     this.initForm();

  }
  initForm()
  {
    this.updateTicketForm=this.formBuilder.group(
      {
        sujet: [this._sujet,Validators.required],
        description: [this._description,Validators.required],
        motCle:[this._motCle,Validators.required],
        impact:[this._impact,Validators.required],
        urgence:[this._urgence,Validators.required],
        cause:[this._cause,Validators.required]

      }
    )
  }
  onUpdateIncident()
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
    this._incidentToUpdate={
      'id':this._id,
      'sujet':this._sujet,
      'description':this._description,
      'motCle':this._motCle,
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
      'solution':this._solution,
      'typeDeSolution':this._typeDeSolution,
      'cause':this._cause,
      'idProbleme':this._idProbleme
    };
    this.httpClient
    .put("http://127.0.0.1:8443/incident/"+this._id,this._incidentToUpdate)
    .subscribe(
      Response=>{
        console.log(Response);
        console.log(this._incidentToUpdate);
        this.router.navigate(['listTicketsForApprouvement']);
      }
    );
  }

}
