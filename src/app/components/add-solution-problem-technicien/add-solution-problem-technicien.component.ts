import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-solution-problem-technicien',
  templateUrl: './add-solution-problem-technicien.component.html',
  styleUrls: ['./add-solution-problem-technicien.component.scss']
})
export class AddSolutionProblemTechnicienComponent implements OnInit {

  incident:any;
  incidentUpdated:any;
  updateTicketForm!:FormGroup;
  incidents:any[]=[];
  incidentI:any;
  constructor( private router: Router, private route: ActivatedRoute,private httpClient: HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/probleme/"+sessionStorage.getItem("ticketId")) 
    .subscribe(
      response=>{
     
          this.incident=response;
          console.log(this.incident);
     }
    );
    this.initForm();
  };
  initForm()
  {
    this.updateTicketForm=this.formBuilder.group(
      {
   
        solution: ['',Validators.required],
        typeDeSolution: ['',Validators.required]

      }
    )
  };
  onUpdateIncident()
  {
    const formValue=this.updateTicketForm.value;
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/incident/listIncidentByProbleme/"+sessionStorage.getItem("ticketId"))
    .subscribe(
      response=>{
        this.incidents=response;
      }
    );
    for(let element in this.incidents)
    {
      this.incidentI={
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
        'solution':formValue['solution'],
        'typeDeSolution':formValue['typeDeSolution'],
        'cause':this.incidents[element]['cause'],
       
      };
      this.httpClient
      .get<any[]>("http://127.0.0.1:8443/incident/"+this.incidents[element]['id'],this.incidentI)
      .subscribe(
        response=>{
          console.log("incident updated");
        }
      )
    };
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
      'solution':formValue['solution'],
      'typeDeSolution':formValue['typeDeSolution'],
      'cause':this.incident['cause'],
     
    }
    this.httpClient
    .put("http://127.0.0.1:8443/probleme/"+sessionStorage.getItem("ticketId"),this.incidentUpdated)
    .subscribe(
      Response=>{
        console.log(Response);
        console.log(this.incidentUpdated);
        sessionStorage.removeItem("ticketId");
        this.router.navigate(['gererProblemeTechnicien']);
      }
    );
  }

}
