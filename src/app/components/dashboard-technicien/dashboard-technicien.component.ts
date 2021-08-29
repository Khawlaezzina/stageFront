import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { ApprobateurService } from 'src/app/services/approbateur/approbateur.service';
import { IncidentServiceService } from 'src/app/services/incident/incident-service.service';
import { ProblemeServiceService } from 'src/app/services/probleme/probleme-service.service';
import { ServiceServiceService } from 'src/app/services/service/service-service.service';
import { TechnicienService } from 'src/app/services/technicien/technicien.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-dashboard-technicien',
  templateUrl: './dashboard-technicien.component.html',
  styleUrls: ['./dashboard-technicien.component.scss']
})
export class DashboardTechnicienComponent implements OnInit {
  nombreIncidents!:number;
  incidents!:any;
  nombreServices!:number;
  services!:any;
  nombreProblemes!:number;
  problemes!:any;
  nombreUtilisateurs!:number;
  utilisateurs!:any;
  nombreAdmins!:number;
  admins!:any;
  techniciens!:any;
  nombreTechniciens!:number;
  approbateurs!:any;
  nombreApprobateurs!:number;
  constructor(private ticketService:IncidentServiceService,private serviceService:ServiceServiceService,private problemeService:ProblemeServiceService,private userService:UserService,private approbateurService:ApprobateurService,private technicienService:TechnicienService,private adminService:AdminService) { }

  ngOnInit(): void {
      this.ticketService
      .getAllIncidents()
      .subscribe(
        Response=>{
          this.incidents=Response;
          this.nombreIncidents=this.incidents.length;
        }
      );
      this.serviceService
      .getAllServices()
      .subscribe(
        Response=>{
          this.services=Response;
          this.nombreServices=this.services.length;
        }
      );
      this.problemeService
      .getAllProblemes()
      .subscribe(
        Response=>{
          this.problemes=Response;
          this.nombreProblemes=this.problemes.length;
        }
      );
      this.userService
        .listUsers()
      .subscribe(
        Response=>{
       
          this.utilisateurs=Response;
          this.nombreUtilisateurs=this.utilisateurs.length;
        }
      );
      this.adminService
      .listUsers()
    .subscribe(
      Response=>{
     
        this.admins=Response;
        this.nombreAdmins=this.admins.length;
      }
    );
    this.technicienService
    .listUsers()
  .subscribe(
    Response=>{
   
      this.techniciens=Response;
      this.nombreTechniciens=this.techniciens.length;
    }
  );
  this.approbateurService
  .listUsers()
.subscribe(
  Response=>{
 
    this.approbateurs=Response;
    this.nombreApprobateurs=this.approbateurs.length;
  }
);
  }
}
