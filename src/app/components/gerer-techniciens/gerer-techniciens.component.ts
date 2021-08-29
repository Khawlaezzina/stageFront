import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Technicien } from 'src/app/models/technicien/technicien.model';
import { TechnicienService } from 'src/app/services/technicien/technicien.service';

@Component({
  selector: 'app-gerer-techniciens',
  templateUrl: './gerer-techniciens.component.html',
  styleUrls: ['./gerer-techniciens.component.scss']
})
export class GererTechniciensComponent implements OnInit {

  techniciens:any;
  constructor(private service: TechnicienService,private router:Router) { }

  ngOnInit(): void {
    this.service.listUsers().subscribe(
      response=>{
        this.techniciens=response;
      }
    );
  }
  deleteTechniciens(myObj: any) {
    this.service.deleteUser(myObj).subscribe(response => {
      console.log(response);
      this.refreshListTechniciens();
    })
  }
  refreshListTechniciens() {
    this.service.listUsers().subscribe(
      response => {
        this.techniciens = response;
      }
    );
  }
  updateTechnicien(myObj:Technicien) {
    this.router.navigate(['updateTechnicien' + '/' + myObj['id']]);
  }
  AddTechnicien() {
    this.router.navigate(['newTechnicien']);
  }

}
