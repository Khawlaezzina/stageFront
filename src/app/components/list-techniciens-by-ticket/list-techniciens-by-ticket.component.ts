import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-techniciens-by-ticket',
  templateUrl: './list-techniciens-by-ticket.component.html',
  styleUrls: ['./list-techniciens-by-ticket.component.scss']
})
export class ListTechniciensByTicketComponent implements OnInit {

  techniciens:any[]=[];
  constructor(private httpClient: HttpClient,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/incidentTechnicien/getAllTechniciensByIncident/"+sessionStorage.getItem("ticketId"))
    .subscribe(
      response=>{
        this.techniciens=response;
        console.log(response);
      }
    )
    }

}
