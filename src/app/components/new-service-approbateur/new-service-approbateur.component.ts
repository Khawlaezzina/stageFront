import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceServiceService } from 'src/app/services/service/service-service.service';

@Component({
  selector: 'app-new-service-approbateur',
  templateUrl: './new-service-approbateur.component.html',
  styleUrls: ['./new-service-approbateur.component.scss']
})
export class NewServiceApprobateurComponent implements OnInit {

  user:any={};
  date:Date | undefined;
  service:any={};
  newServiceForm!:FormGroup;
  priorite:number=0;
  ListSujet:any[]=[];
  constructor(private router : Router, private route: ActivatedRoute,private serviceService: ServiceServiceService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.ListSujet=this.serviceService.getSujets();
    this.initForm();
 
  }
  initForm()
  {
    this.newServiceForm=this.formBuilder.group(
      {
        sujet: ['',Validators.required],
        description: ['',Validators.required],
        impact:['',Validators.required],
        urgence:['',Validators.required]
     

      }
    )
  }
  onSubmitForm()
  {
    this.date=new Date();
    const formValue=this.newServiceForm.value;
    if(formValue["impact"]==="Fort")
    {
      if(formValue["urgence"]==="Fort")
        this.priorite=2;
      else if(formValue["urgence"]==="Moyen")
        this.priorite=2;
      else
        this.priorite=1;
    }
    if(formValue["impact"]==="Moyen")
    {
      if(formValue["urgence"]==="Fort")
        this.priorite=2;
      else if(formValue["urgence"]==="Moyen")
        this.priorite=1;
      else
        this.priorite=0;
    }
    if(formValue["impact"]==="Faible")
    {
      if(formValue["urgence"]==="Fort")
        this.priorite=1;
      else if(formValue["urgence"]==="Moyen")
        this.priorite=0;
      else
        this.priorite=0;
    }
    this.service={
      'sujet':formValue['sujet'],
      'description':formValue['description'],
      'impact':formValue['impact'],
      'urgence':formValue['urgence'],
      'dateOuverture':this.date,
      'ticketStatut':'En attente',
      'idApprobateur':{
        'id':sessionStorage.getItem('id')
      },
      'idUtilisateur':null,
      'priorite':this.priorite
    };
    console.log(this.service);
      this.serviceService.createService(this.service).subscribe(
        response=>{
          console.log(response);
          this.router.navigate(['newServiceApprobateur']);
        }
      )
  }
     

}
