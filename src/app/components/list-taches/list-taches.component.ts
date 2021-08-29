import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-taches',
  templateUrl: './list-taches.component.html',
  styleUrls: ['./list-taches.component.scss']
})
export class ListTachesComponent implements OnInit {
  taches:any[]=[];
  idChangement!:string|null;
  changement:any;
  resolu:boolean=false;
  updatedTache:any;
  numeroTache!:number;
  constructor(private httpClient:HttpClient,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
       
          this.idChangement =params.get('id');
        
      }
    );
      this.httpClient
      .get<any[]>("http://127.0.0.1:8443/changement/"+this.idChangement)
      .subscribe(
        response=>{
          this.changement=response;
        }
      );
      this.httpClient
      .get<any[]>("http://127.0.0.1:8443/tache/findTacheByChangement/"+this.idChangement)
      .subscribe(
        Response=>{
          this.taches=Response;
        }
      )
  }
  estResolu(ticket:any)
  {
    if(ticket['statut']==="Resolu")
    {
      this.resolu=true;
    }
    else
    {
      this.resolu=false;
    }
    return this.resolu;
  }
  Resolu(tache:any)
  {
    this.updatedTache={
      'id':tache['id'],
      'numero':tache['numero'],
      'details':tache['details'],
      'idChangement':this.changement,
      'statut':'Resolu'
    };
    this.httpClient
    .put("http://127.0.0.1:8443/tache/"+tache['id'],this.updatedTache)
    .subscribe(
      Response=>{
        console.log(Response);
        console.log(this.updatedTache);
        
      }
    );
  }
}
