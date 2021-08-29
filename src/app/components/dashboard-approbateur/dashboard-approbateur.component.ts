import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-approbateur',
  templateUrl: './dashboard-approbateur.component.html',
  styleUrls: ['./dashboard-approbateur.component.scss']
})
export class DashboardApprobateurComponent implements OnInit {

  tickets: any[] = [];
  services: any[] = [];
  constructor(private httpClient: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/incident/listIncidentsByApprobateur/"+sessionStorage.getItem("id"))
    .subscribe(
      (response) => {
        this.tickets=response;
      },
      (error) => { console.log("Erreur dans l'affichage des incidents");}
      );

      this.httpClient
      .get<any[]>("http://127.0.0.1:8443/service/listServicesByApprobateur/"+sessionStorage.getItem("id"))
      .subscribe(
        (response) => {
          this.services=response;
        },
        (error) => { console.log("Erreur dans l'affichage des services");}
        )
        
      
  }
  onClickIncident()
  {
    console.log("Hello");
      this.router.navigate(['newTicketUser']);
  }

}
