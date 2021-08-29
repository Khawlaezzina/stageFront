import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gerer-probleme-admin',
  templateUrl: './gerer-probleme-admin.component.html',
  styleUrls: ['./gerer-probleme-admin.component.scss']
})
export class GererProblemeAdminComponent implements OnInit {

  tickets: any[] = [];
  ticketsEnCours:any[]=[];
  ticketsResolu:any[]=[];
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
      .get<any[]>("http://127.0.0.1:8443/probleme/listProblemesByDepartement/"+sessionStorage.getItem("departement")+"/"+"En cours")
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
    this.router.navigate(['gererProblemeAdmin/addSolutionProblemAdmin']);
  }
  listTechnicien(ticket:any)
  {
    sessionStorage.setItem("ticketId",ticket['id']);
    this.router.navigate(['gererProblemeAdmin/listTechniciensByDepartementForProblem']);
  }
  updateSolution(ticket:any)
  {
    sessionStorage.setItem("ticketId",ticket['id']);
    this.router.navigate(['gererProblemeAdmin/updateSolutionForProblemAdmin']);
  }
  listeTechnicien(ticket: any)
  {
    sessionStorage.setItem("ticketId",ticket['id']);
    this.router.navigate(['gererProblemeAdmin/listTechniciensByProblem']);
  }
  listIncidents(ticket:any)
  {
    sessionStorage.setItem("ticketId",ticket['id']);
    this.router.navigate(['gererProblemeAdmin/listIncidentsByProblem']);
  }
}
