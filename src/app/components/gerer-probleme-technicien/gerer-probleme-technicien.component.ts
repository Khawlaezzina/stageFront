import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gerer-probleme-technicien',
  templateUrl: './gerer-probleme-technicien.component.html',
  styleUrls: ['./gerer-probleme-technicien.component.scss']
})
export class GererProblemeTechnicienComponent implements OnInit {
  tickets: any[] = [];
  ticketsEnCours:any[]=[];
  ticketsResolu:any[]=[];
  objet:any;
  technicien:any;
  updateIncident:any;
  updateProblem:any;
  incidents:any[]=[];
  constructor(private httpClient: HttpClient,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/probleme/listProblemesByDepartement/"+sessionStorage.getItem("departement")+"/"+"En attente")
    .subscribe(
      (response) => {
        this.tickets=response;
      },
      (error) => { console.log("Erreur dans l'affichage des incidents");}
      );
      this.httpClient
      .get<any[]>("http://127.0.0.1:8443/problemeTechnicien/getAllProblemesByTechnicien/"+sessionStorage.getItem("id"))
      .subscribe(
        (response) => {
          this.ticketsEnCours=response;
        },
        (error) => { console.log("Erreur dans l'affichage des incidents");}
        );
        this.httpClient
        .get<any[]>("http://127.0.0.1:8443/probleme/listProblemesByDepartement/"+sessionStorage.getItem("departement")+"/"+"Resolu")
        .subscribe(
          (response) => {
            this.ticketsResolu=response;
          },
          (error) => { console.log("Erreur dans l'affichage des incidents");}
          );
  }

  addSolution(ticket:any)
  {
    sessionStorage.setItem("ticketId",ticket['id']);
    this.router.navigate(['gererProblemeTechnicien/addSolutionProblemTechnicien']);
  }

  updateSolution(ticket:any)
  {
    sessionStorage.setItem("ticketId",ticket['id']);
    this.router.navigate(['gererProblemeTechnicien/updateSolutionForProblemTechnicien']);
  }
 
  listIncidents(ticket:any)
  {
    sessionStorage.setItem("ticketId",ticket['id']);
    this.router.navigate(['gererProblemeTechnicien/listIncidentsByProblemTechnicien']);
  }
  affecter(ticket:any)
  {
    this.httpClient
      .get<any[]>("http://127.0.0.1:8443/technicien/"+sessionStorage.getItem("id"))
      .subscribe(
        response=>{
          console.log(response);
          this.technicien=response;
          console.log(this.technicien);
        }
      );
      this.httpClient
      .get<any[]>("http://127.0.0.1:8443/incident/listIncidentByProbleme/"+sessionStorage.getItem("ticketId"))
      .subscribe(
        response=>{
          this.incidents=response;
          console.log(response);
        }
      );
     
      for(let element in this.incidents)
      {
        this.objet={
          'id':{
            'idIncident':this.incidents[element]["id"],
            'idTechnicien':this.technicien['id']
          },
          'incident':this.incidents[element],
          'technicien':this.technicien
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
          .put("http://127.0.0.1:8443/incident/"+ticket['id'],this.updateIncident)
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
            
          }
        );
        this.httpClient
        .get<any[]>("http://127.0.0.1:8443/incident/listIncidentByDepartementAndStatut/"+sessionStorage.getItem("departement")+"/"+"En attente")
        .subscribe(
          (response) => {
            this.tickets=response;
          },
          (error) => { console.log("Erreur dans l'affichage des incidents");}
          );
      }
      this.objet={
        'id':{
          'idProbleme':ticket["id"],
          'idTechnicien':this.technicien['id']
        },
        'probleme':ticket,
        'technicien':this.technicien
      };
      console.log(this.objet);
        this.updateProblem={
          'id':ticket['id'],
           'sujet':ticket['sujet'],
            'description':ticket['description'],
           'motCle':ticket['motCle'],
           'impact':ticket['impact'],
           'urgence':ticket['urgence'],
           'idUtilisateur':ticket['idUtilisateur'],
           'dateOuverture':ticket['dateOuverture'],
           'idApprobateur':ticket['idApprobateur'],
           'priorite':ticket['priorite'],
           'ticketStatut':"En cours",
           'solution':null,
           'typeDeSolution':null,
           'cause':ticket['cause'],
           
          };
        this.httpClient
        .put("http://127.0.0.1:8443/probleme/"+ticket['id'],this.updateProblem)
        .subscribe(
          Response=>{
            console.log(Response);
            console.log(this.updateProblem);
            
          }
        );
        console.log(this.objet);
      this.httpClient
      .post("http://127.0.0.1:8443/problemeTechnicien/add",this.objet)
      .subscribe(
        response=>{
          console.log(response);
          console.log(this.objet);
          
        }
      );
      this.httpClient
      .get<any[]>("http://127.0.0.1:8443/probleme/listProblemesByDepartement/"+sessionStorage.getItem("departement")+"/"+"En attente")
      .subscribe(
        (response) => {
          this.tickets=response;
        },
      );
  }
}
