import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gerer-incident-technicien',
  templateUrl: './gerer-incident-technicien.component.html',
  styleUrls: ['./gerer-incident-technicien.component.scss']
})
export class GererIncidentTechnicienComponent implements OnInit {

 
    tickets: any[] = [];
    ticketsEnCours:any[]=[];
    ticketsResolu:any[]=[];
    technicien:any;
    objet:any;
    updateIncident:any;
    constructor(private httpClient: HttpClient,private router:Router,private route:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.httpClient
      .get<any[]>("http://127.0.0.1:8443/incident/listIncidentByDepartementAndStatut/"+sessionStorage.getItem("departement")+"/"+"En attente")
      .subscribe(
        (response) => {
          this.tickets=response;
        },
        (error) => { console.log("Erreur dans l'affichage des incidents");}
        );
        this.httpClient
        .get<any[]>("http://127.0.0.1:8443/incidentTechnicien/getAllIncidentsByTechnicien/"+sessionStorage.getItem("id"))
        .subscribe(
          (response) => {
            this.ticketsEnCours=response;
          },
          (error) => { console.log("Erreur dans l'affichage des incidents");}
          );
          this.httpClient
          .get<any[]>("http://127.0.0.1:8443/incident/listIncidentByDepartementAndStatut/"+sessionStorage.getItem("departement")+"/"+"Resolu")
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
      this.router.navigate(['gererIncidentTechnicien/addSolutionTechnicien']);
    }

    updateSolution(ticket:any)
    {
      sessionStorage.setItem("ticketId",ticket['id']);
      this.router.navigate(['gererIncidentTechnicien/updateSolutionTechnicien']);
    }
    Affecter(ticket: any)
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
    
     
      this.objet={
        'id':{
          'idIncident':ticket["id"],
          'idTechnicien':this.technicien['id']
        },
        'incident':ticket,
        'technicien':this.technicien
      };
      console.log(this.objet);
        this.updateIncident={
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
           'idProbleme':ticket['idProbleme']
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
  }


