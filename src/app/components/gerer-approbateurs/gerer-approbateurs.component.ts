import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Approbateur } from 'src/app/models/approbateur/approbateur.model';
import { ApprobateurService } from 'src/app/services/approbateur/approbateur.service';

@Component({
  selector: 'app-gerer-approbateurs',
  templateUrl: './gerer-approbateurs.component.html',
  styleUrls: ['./gerer-approbateurs.component.scss']
})
export class GererApprobateursComponent implements OnInit {

  approbateurs:any;
  constructor(private service:ApprobateurService,private router:Router) { }

  ngOnInit(): void {
    this.service.listUsers().subscribe(
      response=>{
        this.approbateurs=response;
      }
    )

  }
  deleteApprobateur(myObj: any) {
    this.service.deleteUser(myObj).subscribe(response => {
      console.log(response);
      this.refreshListApprobateurs();
    })
  }
  refreshListApprobateurs() {
    this.service.listUsers().subscribe(
      response => {
        this.approbateurs = response;
      }
    );
  }
  updateApprobateur(myObj:Approbateur) {
    this.router.navigate(['updateApprobateur' + '/' + myObj['id']]);
  }
  AddApprobateur() {
    this.router.navigate(['newApprobateur']);
  }

}
