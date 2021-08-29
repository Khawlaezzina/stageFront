import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-changement',
  templateUrl: './new-changement.component.html',
  styleUrls: ['./new-changement.component.scss']
})
export class NewChangementComponent implements OnInit {

  newTicketForm!:FormGroup;
  date:any;
  changement:any;
  newChangement:any;
  constructor(private router : Router, private route: ActivatedRoute,private formBuilder:FormBuilder,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm()
  {
    this.newTicketForm=this.formBuilder.group(
      {
        type: ['',Validators.required],
        description: ['',Validators.required],
      

      }
    )
  }
  onSubmitForm()
  {
    this.date=new Date();
    const formValue=this.newTicketForm.value;
    this.changement={
      'description':formValue['description'],
      'type':formValue['type'],
      'dateOuverture':this.date,
      'dateFin':null,
      'statut':'En attente'
    }
    this.httpClient
    .post("http://127.0.0.1:8443/changement/add",this.changement)
    .subscribe(
      response=>{
        this.newChangement=response;
        sessionStorage.setItem("changementId",this.newChangement['id']);
        this.router.navigate(['newChangement/newTache']);
      }
    )

  }

}
