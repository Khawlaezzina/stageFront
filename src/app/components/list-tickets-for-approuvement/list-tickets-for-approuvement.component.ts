import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Incident } from 'src/app/models/incident';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-list-tickets-for-approuvement',
  templateUrl: './list-tickets-for-approuvement.component.html',
  styleUrls: ['./list-tickets-for-approuvement.component.scss']
})
export class ListTicketsForApprouvementComponent implements OnInit {

  tickets: any[] = [];
    services: any[] = [];
    problemes:any[]=[];
    probleme:any={};
    incident:any={};
    service:any={};
    priorite:number=0;
    incidents:any[]=[];
  constructor(private httpClient: HttpClient,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/incident/listIncidentByDepartementAndStatut/"+sessionStorage.getItem("departement")+"/"+"Nouveau")
    .subscribe(
      (response) => {
        this.tickets=response;
      },
      (error) => { console.log("Erreur dans l'affichage des incidents");}
      );

      this.httpClient
      .get<any[]>("http://127.0.0.1:8443/service/listServicesByDepartement/"+sessionStorage.getItem("departement")+"/"+"Nouveau")
      .subscribe(
        (response) => {
          this.services=response;
        },
        (error) => { console.log("Erreur dans l'affichage des services");}
        );
        
      this.httpClient
      .get<any[]>("http://127.0.0.1:8443/probleme/listProblemesByDepartement/"+sessionStorage.getItem("departement")+"/"+"Nouveau")
      .subscribe(
        (response) => {
          this.problemes=response;
        },
        (error) => { console.log("Erreur dans l'affichage des problèmes");}
        );
      
  }
  updateTicket(ticket:any)
  {
      this.router.navigate(['listTicketsForApprouvement/updateIncidentBeforeApprouvement'+'/'+ticket['id']]);
  }
  updateService(ticket:any)
  {
    this.router.navigate(['listTicketsForApprouvement/updateServiceBeforeApprouvement'+'/'+ticket['id']]);
  }
  approuverTicket(ticket:any)
  {
    if(ticket["impact"]==="Fort")
    {
      if(ticket["urgence"]==="Fort")
        this.priorite=2;
      else if(ticket["urgence"]==="Moyen")
        this.priorite=2;
      else
        this.priorite=1;
    }
    if(ticket["impact"]==="Moyen")
    {
      if(ticket["urgence"]==="Fort")
        this.priorite=2;
      else if(ticket["urgence"]==="Moyen")
        this.priorite=1;
      else
        this.priorite=0;
    }
    if(ticket["impact"]==="Faible")
    {
      if(ticket["urgence"]==="Fort")
        this.priorite=1;
      else if(ticket["urgence"]==="Moyen")
        this.priorite=0;
      else
        this.priorite=0;
    }
    if(ticket['idProbleme']==null)
    {
      this.incident={
        'sujet':ticket['sujet'],
        'description':ticket['description'],
        'motCle':ticket['motCle'],
        'impact':ticket['impact'],
        'urgence':ticket['urgence'],
        'dateOuverture':ticket['dateOuverture'],
        'ticketStatut':'En attente',
        'cause':ticket['cause'],
        'idApprobateur':{
          'id':sessionStorage.getItem('id')
        },
        'solution':null,
        'typeDeSolution':null,
        'idUtilisateur':ticket['idUtilisateur'],
        'priorite':this.priorite,
        'idProbleme':ticket['idProbleme']
      };
      this.httpClient
      .put("http://127.0.0.1:8443/incident/"+ticket['id'],this.incident)
      .subscribe(
        response=>{
          console.log(response);
          console.log(this.incident);
          this.refreshListIncidents();
        }
      );
    }
  }
  refreshListIncidents()
  {
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/incident/listIncidentByDepartementAndStatut/"+sessionStorage.getItem("departement")+"/"+"Nouveau")
    .subscribe(
      (response) => {
        this.tickets=response;
      },
      (error) => { console.log("Erreur dans le mise à jour de liste des incidents");}
      );
  }
  approuverService(ticket:any)
  {
    if(ticket["impact"]==="Fort")
    {
      if(ticket["urgence"]==="Fort")
        this.priorite=2;
      else if(ticket["urgence"]==="Moyen")
        this.priorite=2;
      else
        this.priorite=1;
    }
    if(ticket["impact"]==="Moyen")
    {
      if(ticket["urgence"]==="Fort")
        this.priorite=2;
      else if(ticket["urgence"]==="Moyen")
        this.priorite=1;
      else
        this.priorite=0;
    }
    if(ticket["impact"]==="Faible")
    {
      if(ticket["urgence"]==="Fort")
        this.priorite=1;
      else if(ticket["urgence"]==="Moyen")
        this.priorite=0;
      else
        this.priorite=0;
    }
    this.service={
      'sujet':ticket['sujet'],
      'description':ticket['description'],
     
      'impact':ticket['impact'],
      'urgence':ticket['urgence'],
      'dateOuverture':ticket['dateOuverture'],
      'ticketStatut':'En attente',
     
      'idApprobateur':{
        'id':sessionStorage.getItem('id')
      },
      'idUtilisateur':ticket['idUtilisateur'],
      'priorite':this.priorite
     
    };
    this.httpClient
    .put("http://127.0.0.1:8443/service/"+ticket['id'],this.service)
    .subscribe(
      response=>{
        console.log(response);
        console.log(this.service);
        this.refreshListServices();
      }
    );
  }
  refreshListServices()
  {
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/service/listServicesByDepartement/"+sessionStorage.getItem("departement")+"/"+"Nouveau")
    .subscribe(
      (response) => {
        this.services=response;
      },
      (error) => { console.log("Erreur dans l'affichage de liste des services mis à jour");}
      );
  }
  updateProbleme(ticket:any)
  {
    this.router.navigate(['updateProblemeBeforeApprouvement'+'/'+ticket['id']],{ relativeTo: this.route });
  }
  approuverProbleme(ticket:any)
  {
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/incident/listIncidentByProbleme/"+ticket['id'])
    .subscribe(
      response=>{
        this.incidents=response;
      }
    );
    for(let element in this.incidents)
    {
      if(this.incidents[element]["impact"]==="Fort")
      {
        if(this.incidents[element]["urgence"]==="Fort")
          this.priorite=2;
        else if(this.incidents[element]["urgence"]==="Moyen")
          this.priorite=2;
        else
          this.priorite=1;
      };
      if(this.incidents[element]["impact"]==="Moyen")
      {
        if(this.incidents[element]["urgence"]==="Fort")
          this.priorite=2;
        else if(this.incidents[element]["urgence"]==="Moyen")
          this.priorite=1;
        else
          this.priorite=0;
      };
      if(this.incidents[element]["impact"]==="Faible")
      {
        if(this.incidents[element]["urgence"]==="Fort")
          this.priorite=1;
        else if(this.incidents[element]["urgence"]==="Moyen")
          this.priorite=0;
        else
          this.priorite=0;
      }
      this.incident={
        'sujet':this.incidents[element]['sujet'],
        'description':this.incidents[element]['description'],
        'motCle':this.incidents[element]['motCle'],
        'impact':this.incidents[element]['impact'],
        'urgence':this.incidents[element]['urgence'],
        'dateOuverture':this.incidents[element]['dateOuverture'],
        'ticketStatut':'En attente',
        'cause':this.incidents[element]['cause'],
        'idApprobateur':{
          'id':sessionStorage.getItem('id')
        },
        'solution':null,
        'typeDeSolution':null,
        'idUtilisateur':this.incidents[element]['idUtilisateur'],
        'priorite':this.priorite,
        'idProbleme':ticket['idProbleme']
      };
      console.log(this.incident);
      this.httpClient
      .put("http://127.0.0.1:8443/incident/"+this.incidents[element]['id'],this.incident)
      .subscribe(
        response=>{
          console.log(response);
          console.log(this.incident);
          this.refreshListIncidents();
        }
      );

    }
    if(ticket["impact"]==="Fort")
    {
      if(ticket["urgence"]==="Fort")
        this.priorite=2;
      else if(ticket["urgence"]==="Moyen")
        this.priorite=2;
      else
        this.priorite=1;
    }
    if(ticket["impact"]==="Moyen")
    {
      if(ticket["urgence"]==="Fort")
        this.priorite=2;
      else if(ticket["urgence"]==="Moyen")
        this.priorite=1;
      else
        this.priorite=0;
    }
    if(ticket["impact"]==="Faible")
    {
      if(ticket["urgence"]==="Fort")
        this.priorite=1;
      else if(ticket["urgence"]==="Moyen")
        this.priorite=0;
      else
        this.priorite=0;
    }
    this.probleme={
      'sujet':ticket['sujet'],
      'description':ticket['description'],
      'motCle':ticket['motCle'],
      'impact':ticket['impact'],
      'urgence':ticket['urgence'],
      'dateOuverture':ticket['dateOuverture'],
      'ticketStatut':'En attente',
      'cause':ticket['cause'],
      'idApprobateur':{
        'id':sessionStorage.getItem('id')
      },
      'solution':null,
      'typeDeSolution':null,
      'idUtilisateur':ticket['idUtilisateur'],
      'priorite':this.priorite
     
    };
    this.httpClient
    .put("http://127.0.0.1:8443/probleme/"+ticket['id'],this.probleme)
    .subscribe(
      response=>{
        console.log(response);
        console.log(this.probleme);
        this.refreshListProblemes();
      }
    );

  }
  refreshListProblemes()
  {
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/probleme/listProblemesByDepartement/"+sessionStorage.getItem("departement")+"/"+"Nouveau")
    .subscribe(
      (response) => {
        this.problemes=response;
      },
      (error) => { console.log("Erreur dans l'affichage des problèmes");}
      );
  }
}
