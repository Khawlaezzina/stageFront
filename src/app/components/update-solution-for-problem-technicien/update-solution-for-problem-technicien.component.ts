import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-solution-for-problem-technicien',
  templateUrl: './update-solution-for-problem-technicien.component.html',
  styleUrls: ['./update-solution-for-problem-technicien.component.scss']
})
export class UpdateSolutionForProblemTechnicienComponent implements OnInit {

  incident:any;
  incidentUpdated:any;
  incidents:any[]=[];
  updateTicketForm!:FormGroup;
  _solution!:string;
  _typeDeSolution!:string;
  updateIncident:any;
  constructor( private router: Router, private route: ActivatedRoute,private httpClient: HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/probleme/"+sessionStorage.getItem("ticketId")) 
    .subscribe(
      response=>{
     
          this.incident=response;
          this._solution=this.incident['solution'];
          this._typeDeSolution=this.incident['typeDeSolution'];
          console.log(this.incident);
     }
    );
    this.initForm();
  };
  initForm()
  {
    this.updateTicketForm=this.formBuilder.group(
      {
   
        solution: [this._solution,Validators.required],
        typeDeSolution: [ this._typeDeSolution,Validators.required]

      }
    )
  };
  onUpdateIncident()
  {
    const formValue=this.updateTicketForm.value;
    this.incidentUpdated={
      'id':this.incident['id'],
      'sujet':this.incident['sujet'],
      'description':this.incident['description'],
      'motCle':this.incident['motCle'],
      'impact':this.incident['impact'],
      'urgence':this.incident['urgence'],
      'idUtilisateur':this.incident['idUtilisateur'],
      'dateOuverture':this.incident['dateOuverture'],
      'idApprobateur':this.incident['idApprobateur'],
      'priorite':this.incident['priorite'],
      'ticketStatut':"Resolu",
      'solution':this._solution,
      'typeDeSolution':this._typeDeSolution,
      'cause':this.incident['cause'],
     
    }
    this.httpClient
    .put("http://127.0.0.1:8443/probleme/"+sessionStorage.getItem("ticketId"),this.incidentUpdated)
    .subscribe(
      Response=>{
        console.log(Response);
        console.log(this.incidentUpdated);
        sessionStorage.removeItem("ticketId");
        
      }
    );
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/incident/listIncidentByProbleme/"+sessionStorage.getItem("ticketId"))
    .subscribe(
      response=>{
        this.incidents=response;
      }
    );
    for(let element in this.incidents)
    {
      this.updateIncident={
        'id':this.incidents[element]['id'],
         'sujet':this.incidents[element]['sujet'],
          'description':this.incidents[element]['description'],
         'motCle':this.incidents[element]['motCle'],
         'impact':this.incidents[element]['impact'],
         'urgence':this.incidents[element]['urgence'],
         'idUtilisateur':this.incidents[element]['idUtilisateur'],
         'dateOuverture':this.incidents[element]['dateOuverture'],
         'idApprobateur':this.incidents[element]['idApprobateur'],
         'priorite':this.incidents[element]['priorite'],
         'ticketStatut':"Resolu",
         'solution':this._solution,
         'typeDeSolution':this._typeDeSolution,
         'cause':this.incidents[element]['cause'],
         'idProbleme':this.incidents[element]['idProbleme']
        };
      this.httpClient
      .put("http://127.0.0.1:8443/incident/"+this.incidents[element]['id'],this.updateIncident)
      .subscribe(
        Response=>{
          console.log(Response);
          console.log(this.updateIncident);
          this.router.navigate(['gererProblemeTechnicien']);
        }
      );
    }
  }

}
