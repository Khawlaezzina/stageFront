import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gerer-changement-technicien',
  templateUrl: './gerer-changement-technicien.component.html',
  styleUrls: ['./gerer-changement-technicien.component.scss']
})
export class GererChangementTechnicienComponent implements OnInit {

  tickets:any[]=[];
  ticketsEnCours:any[]=[];
  ticketsResolu:any[]=[];
  objet:any;
  technicien:any;
  updateIncident:any;
  taches:any[]=[];
  updatedTache:any;
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
  Affecter(ticket:any)
  {
      
    this.httpClient
      .get<any[]>("http://127.0.0.1:8443/technicien/"+ sessionStorage.getItem("id"))
      .subscribe(
        response=>{
          this.technicien=response;
        }
      );

      this.objet={
        'id':{
          'idChangement':ticket['id'],
          'idTechnicien':sessionStorage.getItem("id")
        },
        'changement':ticket,
        'technicien':this.technicien
      };
      console.log(this.objet);
        this.updateIncident={
          'id':ticket['id'],
           
            'description':ticket['description'],
           'dateOuverture':ticket['dateOuverture'],
           'dateFin':ticket['dateFin'],
          'type':ticket['type'],
           'statut':"En cours",
         
          };
        this.httpClient
        .put("http://127.0.0.1:8443/changement/"+ticket['id'],this.updateIncident)
        .subscribe(
          Response=>{
            console.log(Response);
            console.log(this.updateIncident);
            
          }
        );
        console.log(this.objet);
        this.httpClient
        .get<any[]>("http://127.0.0.1:8443/tache/findTacheByChangement/"+ticket['id'])
        .subscribe(
          Response=>{
            this.taches=Response;
          }
        );
        for(let element in this.taches)
        {
          this.updatedTache={
            'id':this.taches[element]['id'],
            'numero':this.taches[element]['numero'],
            'details':this.taches[element]['details'],
            'idChangement':this.updateIncident,
            'statut':'En cours'
          };
          this.httpClient
          .put("http://127.0.0.1:8443/tache/"+this.taches[element]['id'],this.updatedTache)
          .subscribe(
            Response=>{
              console.log(Response);
              console.log(this.updatedTache);
              
            }
          );
        }
      this.httpClient
      .post("http://127.0.0.1:8443/changementTechnicien/add",this.objet)
      .subscribe(
        response=>{
          console.log(response);
          console.log(this.objet);
         
          this.router.navigate(['gererchangementTechnicien']);
        }
      );
  }

}
