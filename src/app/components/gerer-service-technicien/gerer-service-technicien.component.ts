import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceServiceService } from 'src/app/services/service/service-service.service';

@Component({
  selector: 'app-gerer-service-technicien',
  templateUrl: './gerer-service-technicien.component.html',
  styleUrls: ['./gerer-service-technicien.component.scss']
})
export class GererServiceTechnicienComponent implements OnInit {

  tickets:any[]=[];
  ticketsEnCours:any[]=[];
  ticketsResolu:any[]=[];
  service:any;
  serviceUpdated:any;
  technicien:any;
  objet:any;
  updateIncident:any;
  newTicketForm!:FormGroup;
  constructor(private httpClient: HttpClient,private router:Router,private route:ActivatedRoute,private formBuilder:FormBuilder,private Serviceservice:ServiceServiceService) { }

  ngOnInit(): void {
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/service/listServicesByDepartement/"+sessionStorage.getItem("departement")+"/"+"En attente")
    .subscribe(
      (response) => {
        this.tickets=response;
      },
      (error) => { console.log("Erreur dans l'affichage des incidents");}
      );
      this.httpClient
      .get<any[]>("http://127.0.0.1:8443/serviceTechnicien/getAllServicesByTechnicien/"+sessionStorage.getItem("id"))
      .subscribe(
        (response) => {
          this.ticketsEnCours=response;
        },
        (error) => { console.log("Erreur dans l'affichage des incidents");}
        );
        this.httpClient
        .get<any[]>("http://127.0.0.1:8443/service/listServicesByDepartement/"+sessionStorage.getItem("departement")+"/"+"Resolu")
        .subscribe(
          (response) => {
            this.ticketsResolu=response;
          },
          (error) => { console.log("Erreur dans l'affichage des incidents");}
          );
          this.initForm();
  }
  initForm()
  {
    this.newTicketForm=this.formBuilder.group(
      {
        sujet: ['',Validators.required]
       

      }
    )
  }

  MarquerResolu(ticket:any)
  {
      this.httpClient
      .get<any[]>("http://127.0.0.1:8443/service/"+ticket["id"])
      .subscribe(
        response=>{
          this.service=response;
          console.log(this.service);
        }
      );
      this.serviceUpdated={
        'id':this.service['id'],
        'sujet':this.service['sujet'],
        'dateOuverture':this.service['dateOuverture'],
        'ticketStatut':'Resolu',
        'description':this.service['description'],
        'impact':this.service['impact'],
        'urgence':this.service['urgence'],
        'idUtilisateur':this.service['idUtilisateur'],
        'idApprobateur':this.service['idApprobateur']
      };
      this.httpClient
      .put("http://127.0.0.1:8443/service/"+ticket["id"],this.serviceUpdated)
      .subscribe(
        response=>{
          console.log(response);
        }
      );
      this.httpClient
      .get<any[]>("http://127.0.0.1:8443/service/listServicesByDepartement/"+sessionStorage.getItem("departement")+"/"+"En cours")
      .subscribe(
        (response) => {
          this.ticketsEnCours=response;
        },
        (error) => { console.log("Erreur dans l'affichage des incidents");}
        );
        this.httpClient
        .get<any[]>("http://127.0.0.1:8443/service/listServicesByDepartement/"+sessionStorage.getItem("departement")+"/"+"Resolu")
        .subscribe(
          (response) => {
            this.ticketsResolu=response;
          },
          (error) => { console.log("Erreur dans l'affichage des incidents");}
          );
  }
  affecter(ticket: any)
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
        'idService':ticket["id"],
        'idTechnicien':this.technicien['id']
      },
      'service':ticket,
      'technicien':this.technicien
    };
    console.log(this.objet);
      this.updateIncident={
        'id':ticket['id'],
         'sujet':ticket['sujet'],
          'description':ticket['description'],
        
         'impact':ticket['impact'],
         'urgence':ticket['urgence'],
         'idUtilisateur':ticket['idUtilisateur'],
         'dateOuverture':ticket['dateOuverture'],
         'idApprobateur':ticket['idApprobateur'],
         'priorite':ticket['priorite'],
         'ticketStatut':"En cours"
      
        };
      this.httpClient
      .put("http://127.0.0.1:8443/service/"+ticket['id'],this.updateIncident)
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
        
      }
    );
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/service/listServicesByDepartement/"+sessionStorage.getItem("departement")+"/"+"En attente")
    .subscribe(
      (response) => {
        this.tickets=response;
      },
      (error) => { console.log("Erreur dans l'affichage des incidents");}
      );
  }
  onSubmitForm()
  {
    const formValue=this.newTicketForm.value;
    this.Serviceservice.addSujet(formValue['sujet']);
    this.router.navigate(['gererServiceTechnicien']);
  }
}
