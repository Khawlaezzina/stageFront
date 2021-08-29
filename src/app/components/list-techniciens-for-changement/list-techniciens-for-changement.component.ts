import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-techniciens-for-changement',
  templateUrl: './list-techniciens-for-changement.component.html',
  styleUrls: ['./list-techniciens-for-changement.component.scss']
})
export class ListTechniciensForChangementComponent implements OnInit {

  techniciens:any[]=[];
  incident!:any;
  id:any;
  objet:any;
  updateIncident:any;
  taches:any[]=[];
  updatedTache:any;

  constructor(private httpClient: HttpClient,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
       
          this.id =params.get('id');
        
      }
    );
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/technicien/list")
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
      .get<any[]>("http://127.0.0.1:8443/changement/"+this.id)
      .subscribe(
        response=>{
          console.log(response);
          this.incident=response;
          console.log(this.incident);
        }
      );
    

      this.objet={
        'id':{
          'idChangement':this.id,
          'idTechnicien':technicien['id']
        },
        'changement':this.incident,
        'technicien':technicien
      };
      console.log(this.objet);
        this.updateIncident={
          'id':this.incident['id'],
           
            'description':this.incident['description'],
           'dateOuverture':this.incident['dateOuverture'],
           'dateFin':this.incident['dateFin'],
          'type':this.incident['type'],
           'statut':"En cours",
         
          };
        this.httpClient
        .put("http://127.0.0.1:8443/changement/"+this.incident['id'],this.updateIncident)
        .subscribe(
          Response=>{
            console.log(Response);
            console.log(this.updateIncident);
            
          }
        );
        console.log(this.objet);
        this.httpClient
        .get<any[]>("http://127.0.0.1:8443/tache/findTacheByChangement/"+this.id)
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
         
          this.router.navigate(['gererChangementAdmin']);
        }
      );
  }

}
