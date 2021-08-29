import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-techniciens-by-departement-for-problem',
  templateUrl: './list-techniciens-by-departement-for-problem.component.html',
  styleUrls: ['./list-techniciens-by-departement-for-problem.component.scss']
})
export class ListTechniciensByDepartementForProblemComponent implements OnInit {

  techniciens:any[]=[];
  incident!:any;
  incidents:any[]=[];
  id:any;
  objet:any;
  updateIncident:any;
  updateProbleme:any;
  probleme!: any;
  constructor(private httpClient: HttpClient,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/technicien/listTechniciensByDepartement/"+sessionStorage.getItem("departement"))
    .subscribe(
      response=>{
        this.techniciens=response;
      }
    )
  }
  Affecter(technicien:any)
  {
      console.log(technicien);
      this.httpClient
      .get<any[]>("http://127.0.0.1:8443/probleme/"+sessionStorage.getItem("ticketId"))
      .subscribe(
        response=>{
          console.log(response);
          this.probleme=response;
          console.log(this.incident);
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
      this.objet={
        'id':{
          'idIncident':this.incidents[element]['id'],
          'idTechnicien':technicien['id']
        },
        'incident':this.incident,
        'technicien':technicien
      };
      console.log(this.objet);
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
           'ticketStatut':"En cours",
           'solution':null,
           'typeDeSolution':null,
           'cause':this.incidents[element]['cause'],
           'idProbleme':this.incidents[element]['idProbleme']
          };
        this.httpClient
        .put("http://127.0.0.1:8443/incident/"+this.incidents[element]['id'],this.updateIncident)
        .subscribe(
          Response=>{
            console.log(Response);
            console.log(this.updateIncident);
            
          }
        );
        console.log(this.objet);
      this.httpClient
      .post("http://127.0.0.1:8443/incidentTechnicien/add",this.objet)
      .subscribe(
        response=>{
          console.log(response);
          console.log(this.objet);
          sessionStorage.removeItem("ticketId");
         
        }
      );
    }
    this.objet={
      'id':{
        'idProbleme':sessionStorage.getItem("ticketId"),
        'idTechnicien':technicien['id']
      },
      'probleme':this.probleme,
      'technicien':technicien
    };
    console.log(this.objet);
      this.updateProbleme={
        'id':sessionStorage.getItem("ticketId"),
         'sujet':this.probleme['sujet'],
          'description':this.probleme['description'],
         'motCle':this.probleme['motCle'],
         'impact':this.probleme['impact'],
         'urgence':this.probleme['urgence'],
         'idUtilisateur':this.probleme['idUtilisateur'],
         'dateOuverture':this.probleme['dateOuverture'],
         'idApprobateur':this.probleme['idApprobateur'],
         'priorite':this.probleme['priorite'],
         'ticketStatut':"En cours",
         'solution':null,
         'typeDeSolution':null,
         'cause':this.probleme['cause'],
        
        };
      this.httpClient
      .put("http://127.0.0.1:8443/probleme/"+sessionStorage.getItem("ticketId"),this.updateProbleme)
      .subscribe(
        Response=>{
          console.log(Response);
          console.log(this.updateProbleme);
          
        }
      );
      console.log(this.objet);
    this.httpClient
    .post("http://127.0.0.1:8443/problemeTechnicien/add",this.objet)
    .subscribe(
      response=>{
        console.log(response);
        console.log(this.objet);
        sessionStorage.removeItem("ticketId");
        this.router.navigate(['gererProblemeAdmin']);
      }
    );
  }
}
