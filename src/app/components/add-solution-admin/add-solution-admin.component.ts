import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-solution-admin',
  templateUrl: './add-solution-admin.component.html',
  styleUrls: ['./add-solution-admin.component.scss']
})
export class AddSolutionAdminComponent implements OnInit {

  incident:any;
  incidentUpdated:any;
  updateTicketForm!:FormGroup;
  constructor( private router: Router, private route: ActivatedRoute,private httpClient: HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/incident/"+sessionStorage.getItem("ticketId")) 
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
      'idProbleme':this.incident['idProbleme']
    }
    this.httpClient
    .put("http://127.0.0.1:8443/incident/"+sessionStorage.getItem("ticketId"),this.incidentUpdated)
    .subscribe(
      Response=>{
        console.log(Response);
        console.log(this.incidentUpdated);
        sessionStorage.removeItem("ticketId");
        this.router.navigate(['gererIncidentAdmin']);
      }
    );
  }

}
