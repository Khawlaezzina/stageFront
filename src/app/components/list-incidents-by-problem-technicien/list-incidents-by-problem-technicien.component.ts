import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-incidents-by-problem-technicien',
  templateUrl: './list-incidents-by-problem-technicien.component.html',
  styleUrls: ['./list-incidents-by-problem-technicien.component.scss']
})
export class ListIncidentsByProblemTechnicienComponent implements OnInit {

  incidents:any[]=[];
  constructor(private httpClient: HttpClient,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/incident/listIncidentByProbleme/"+sessionStorage.getItem("ticketId"))
    .subscribe(
      response=>{
        this.incidents=response;
        console.log(response);
      }
    )
    }

}
