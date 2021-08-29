import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gerer-incident-admin',
  templateUrl: './gerer-incident-admin.component.html',
  styleUrls: ['./gerer-incident-admin.component.scss']
})
export class GererIncidentAdminComponent implements OnInit {

  tickets: any[] = [];
  ticketsEnCours:any[]=[];
  ticketsResolu:any[]=[];
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
      .get<any[]>("http://127.0.0.1:8443/incident/listIncidentByDepartementAndStatut/"+sessionStorage.getItem("departement")+"/"+"En cours")
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
    this.router.navigate(['gererIncidentAdmin/addSolutionAdmin']);
  }
  listTechnicien(ticket:any)
  {
    sessionStorage.setItem("ticketId",ticket['id']);
    this.router.navigate(['gererIncidentAdmin/listTechniciensByDepartement']);
  }
  updateSolution(ticket:any)
  {
    sessionStorage.setItem("ticketId",ticket['id']);
    this.router.navigate(['gererIncidentAdmin/updateSolutionAdmin']);
  }
  listeTechnicien(ticket: any)
  {
    sessionStorage.setItem("ticketId",ticket['id']);
    this.router.navigate(['gererIncidentAdmin/listTechniciensByTicket']);
  }
}
