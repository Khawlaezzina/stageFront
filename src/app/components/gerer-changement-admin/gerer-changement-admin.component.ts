import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gerer-changement-admin',
  templateUrl: './gerer-changement-admin.component.html',
  styleUrls: ['./gerer-changement-admin.component.scss']
})
export class GererChangementAdminComponent implements OnInit {
  tickets:any[]=[];
  ticketsEnCours:any[]=[];
  ticketsResolu:any[]=[];
  constructor(private httpClient: HttpClient,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/changement/listByStatut/"+"En attente")
    .subscribe(
      (response) => {
        this.tickets=response;
      },
      (error) => { console.log("Erreur dans l'affichage des incidents");}
      );
      this.httpClient
      .get<any[]>("http://127.0.0.1:8443/changement/listByStatut/"+"En cours")
      .subscribe(
        (response) => {
          this.ticketsEnCours=response;
        },
        (error) => { console.log("Erreur dans l'affichage des incidents");}
        );
        this.httpClient
        .get<any[]>("http://127.0.0.1:8443/changement/listByStatut/"+"Resolu")
        .subscribe(
          (response) => {
            this.ticketsResolu=response;
          },
          (error) => { console.log("Erreur dans l'affichage des incidents");}
          );
  }
  ListTaches(ticket:any)
  {
      this.router.navigate(["listTaches/"+ticket['id']]);
  }
  listTechnicien(ticket:any)
  {
    this.router.navigate(["gererChangementAdmin/listTechniciensForChangement/"+ticket['id']]);
  }
}
