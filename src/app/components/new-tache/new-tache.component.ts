import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-tache',
  templateUrl: './new-tache.component.html',
  styleUrls: ['./new-tache.component.scss']
})
export class NewTacheComponent implements OnInit {

  newTicketForm!:FormGroup;
  numero:number=0;
  tache:any;
  changement:any;
  constructor(private router : Router, private route: ActivatedRoute,private formBuilder:FormBuilder,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm()
  {
    this.newTicketForm=this.formBuilder.group(
      {
        details: ['',Validators.required],
       

      }
    )
  }
  onSubmitForm()
  {
    const formValue=this.newTicketForm.value;
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/changement/"+sessionStorage.getItem("changementId"))
    .subscribe(
      response=>{
        this.changement=response;
      }
    );
    console.log(this.numero);
    console.log(typeof(this.numero));
    this.tache={
      'numero':+this.numero,
      'details':formValue['details'],
      'statut':'En attente',
      'idChangement':this.changement
    };
    console.log(this.tache);
    this.httpClient
    .post("http://127.0.0.1:8443/tache/add",this.tache)
    .subscribe(
      Response=>{
        this.numero++;
        this.router.navigate(['newChangement/newTache']);
      }
    );
    
  }
  terminer()
  {
    this.numero=0;
    sessionStorage.removeItem("changementId");
    this.router.navigate(['gererChangementAdmin']);
  }
}
