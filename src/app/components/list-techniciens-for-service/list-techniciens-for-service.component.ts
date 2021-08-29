import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-techniciens-for-service',
  templateUrl: './list-techniciens-for-service.component.html',
  styleUrls: ['./list-techniciens-for-service.component.scss']
})
export class ListTechniciensForServiceComponent implements OnInit {

  techniciens:any[]=[];
  constructor(private httpClient: HttpClient,private router:Router,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/serviceTechnicien/getAllTechniciensByService/"+sessionStorage.getItem("ticketId"))
    .subscribe(
      response=>{
        this.techniciens=response;
        console.log(response);
      }
    )
  }

}
