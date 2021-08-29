import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceServiceService } from 'src/app/services/service/service-service.service';

@Component({
  selector: 'app-new-service-demand-user',
  templateUrl: './new-service-demand-user.component.html',
  styleUrls: ['./new-service-demand-user.component.scss']
})
export class NewServiceDemandUserComponent implements OnInit {
  user:any={};
  date:Date | undefined;
  service:any={};
  newServiceForm!:FormGroup;
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
  newService(form:any)
  {
    this.date=new Date();
    this.user={
      'id':parseInt(this.route.snapshot.params.idUser)
    }
    this.service={
      'id':null,
      'sujet':form.value.sujet,
      'dateOuverture':this.date,
      'ticketStatut':'Nouveau',
      'description':form.value.description,
      'impact':form.value.impact,
      'urgence':form.value.urgence,
      'idUtilisateur':this.user,
      'idApprobateur':null

    }
    this.serviceService.createService(this.service).subscribe(
      result => {
        console.log("service ajouté avec succès");
      }
    )
  }
  onSubmitForm()
  {
    this.date=new Date();
    const formValue=this.newServiceForm.value;
    this.service={
      'sujet':formValue['sujet'],
      'description':formValue['description'],
      'impact':formValue['impact'],
      'urgence':formValue['urgence'],
      'dateOuverture':this.date,
      'ticketStatut':'Nouveau',
      'idApprobateur':null,
      'idUtilisateur':{
        'id':sessionStorage.getItem('id')
      },
      'priorite':null
    };
    console.log(this.service);
      this.serviceService.createService(this.service).subscribe(
        response=>{
          console.log(response);
          this.router.navigate(['newServiceUser']);
        }
      )
  }
}
