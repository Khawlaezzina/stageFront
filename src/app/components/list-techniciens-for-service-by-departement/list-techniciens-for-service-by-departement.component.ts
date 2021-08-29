import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-techniciens-for-service-by-departement',
  templateUrl: './list-techniciens-for-service-by-departement.component.html',
  styleUrls: ['./list-techniciens-for-service-by-departement.component.scss']
})
export class ListTechniciensForServiceByDepartementComponent implements OnInit {

  techniciens:any[]=[];
  incident!:any;
  id:any;
  objet:any;
  updateIncident:any;
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
      .get<any[]>("http://127.0.0.1:8443/service/"+sessionStorage.getItem("ticketId"))
      .subscribe(
        response=>{
          console.log(response);
          this.incident=response;
          console.log(this.incident);
        }
      );
    
     
      this.objet={
        'id':{
          'idService':sessionStorage.getItem("ticketId"),
          'idTechnicien':technicien['id']
        },
        'service':this.incident,
        'technicien':technicien
      };
      console.log(this.objet);
        this.updateIncident={
          'id':this.incident['id'],
           'sujet':this.incident['sujet'],
            'description':this.incident['description'],
          
           'impact':this.incident['impact'],
           'urgence':this.incident['urgence'],
           'idUtilisateur':this.incident['idUtilisateur'],
           'dateOuverture':this.incident['dateOuverture'],
           'idApprobateur':this.incident['idApprobateur'],
           'priorite':this.incident['priorite'],
           'ticketStatut':"En cours",
        
          };
        this.httpClient
        .put("http://127.0.0.1:8443/service/"+this.incident['id'],this.updateIncident)
        .subscribe(
          Response=>{
            console.log(Response);
            console.log(this.updateIncident);
            
          }
        );
        console.log(this.objet);
      this.httpClient
      .post("http://127.0.0.1:8443/serviceTechnicien/add",this.objet)
      .subscribe(
        response=>{
          console.log(response);
          console.log(this.objet);
          sessionStorage.removeItem("ticketId");
          this.router.navigate(['gererServiceAdmin']);
        }
      );
  }

}
