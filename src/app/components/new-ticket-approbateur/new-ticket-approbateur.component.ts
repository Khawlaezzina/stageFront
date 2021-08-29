import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprobateurService } from 'src/app/services/approbateur/approbateur.service';
import { IncidentServiceService } from 'src/app/services/incident/incident-service.service';
import { ProblemeServiceService } from 'src/app/services/probleme/probleme-service.service';
import { TicketServiceService } from 'src/app/services/ticket/ticket-service.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-new-ticket-approbateur',
  templateUrl: './new-ticket-approbateur.component.html',
  styleUrls: ['./new-ticket-approbateur.component.scss']
})
export class NewTicketApprobateurComponent implements OnInit {

  ticket:any={};
  incident:any={};
  probleme:any={};
  user:any={};
  user1:any={};
  approbateur:any={};
  date:Date | undefined;
  idTicket:number=0;
  idIncident:number=0;
  idProblem:number=0;
  newTicketForm!:FormGroup;
  listIncidents:any=[];
  listIncidents1:any=[];
  instance:any;
  instance1:any;
  motCles:any=[];
  listIdProblemes:any=[];
  listIdIncidents:any=[];
  idProblemeCreated!:number ;
  problemeCree:any;
  incident1:any={};
  priorite:number=0;
  constructor(private router : Router, private route: ActivatedRoute,private userService:ApprobateurService,private ticketService: TicketServiceService,private incidentService:IncidentServiceService, private problemService:ProblemeServiceService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm()
  {
    this.newTicketForm=this.formBuilder.group(
      {
        sujet: ['',Validators.required],
        description: ['',Validators.required],
        motCle:['',Validators.required],
        impact:['',Validators.required],
        urgence:['',Validators.required],
        cause:['',Validators.required]

      }
    )
  }
  onSubmitForm()
  {
    this.date=new Date();
   
    const formValue=this.newTicketForm.value;
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
    console.log(this.probleme);
    if(formValue['cause']==="")
    {
      console.log("Hellooo");
      this.probleme={
        'sujet':formValue['sujet'],
        'description':formValue['description'],
        'motCle':formValue['motCle'],
        'impact':formValue['impact'],
        'urgence':formValue['urgence'],
        'dateOuverture':this.date,
        'ticketStatut':'En attente',
        'cause':formValue['cause'],
        'idApprobateur':{
          'id':sessionStorage.getItem('id')
        },
        'solution':null,
        'typeDeSolution':null,
        'idUtilisateur':null,
        'priorite':this.priorite
      }
       
        this.problemService.createProbleme(this.probleme).subscribe(
          response=>{
            console.log(response);
            this.router.navigate(['newTicketApprobateur']);
          }
        );

    }
    else
    {
      this.incidentService.getIncidentByCause(formValue['cause'],"En attente").subscribe(
        response =>{
            console.log("getIncidentByCause");
              this.instance=response;
              console.log(this.instance);
              //this.listIncidents=this.instance;
              for(let element in this.instance)
              {
                console.log(this.instance[element]);
              this.listIncidents.push(this.instance[element]);
              }
        }
      );
      console.log(this.listIncidents);
      this.motCles=formValue['motCle'].split('/');
      console.log(this.motCles);
      for(let element in this.motCles){
        console.log(this.motCles[element]);
        this.incidentService.getIncidentByMotCle(this.motCles[element],"En attente").subscribe(
          response=>{
            console.log("getIncidentByMotCle");
            this.instance1=response;
            console.log(this.instance1);
            for(let element in this.instance1)
            {
              console.log(this.instance1[element]);
            this.listIncidents1.push(this.instance1[element]);
            }
          }
        )
        
      };
      console.log("List incidents1");
      console.log(this.listIncidents1);
      if((this.listIncidents==[])&&(this.listIncidents1==[]))
      {
        console.log("Hellooo");
       
        
        this.incident={
          'sujet':formValue['sujet'],
          'description':formValue['description'],
          'motCle':formValue['motCle'],
          'impact':formValue['impact'],
          'urgence':formValue['urgence'],
          'dateOuverture':this.date,
          'ticketStatut':'En attente',
          'cause':formValue['cause'],
          'idApprobateur':{
            'id':sessionStorage.getItem('id')
          },
          'solution':null,
          'typeDeSolution':null,
          'idUtilisateur':null,
          'priorite':this.priorite,
          'idProbleme':null
        }
        console.log(this.incident);
        this.incidentService.createIncident(this.incident).subscribe(
          response=>{
            console.log(response);
            this.router.navigate(['newTicketApprobateur']);
          },
          error=>{
            console.log("Error on creating an incident");
          }
        )
      }
      else
      {
        console.log("else");

        for(let element in this.listIncidents)  {

            console.log(this.listIncidents[element]);
           
            this.listIdIncidents.push(this.listIncidents[element]['id']);
            if(this.listIncidents[element]['idProbleme'] != null)
            {
              this.listIdProblemes.push(this.listIncidents[element]['idProbleme']);
            }
            
           
          
        };
        for(let element in this.listIncidents1)  {

          console.log(this.listIncidents1[element]);
         if(!this.listIncidents.includes(this.listIncidents1[element]))
         {
          this.listIdIncidents.push(this.listIncidents1[element]['id']);
          if(this.listIncidents1[element]['idProbleme'] != null)
          {
            this.listIdProblemes.push(this.listIncidents[element]['idProbleme']);
          }
        }
         
        
      };
        console.log("listIdProblemes");
        console.log(this.listIdProblemes);
        console.log("listIdIncidents");
        console.log(this.listIdIncidents);
        if(this.listIdProblemes.length===1)
        {
        
          this.incident={
            'sujet':formValue['sujet'],
            'description':formValue['description'],
            'motCle':formValue['motCle'],
            'impact':formValue['impact'],
            'urgence':formValue['urgence'],
            'dateOuverture':this.date,
            'ticketStatut':'En attente',
            'cause':formValue['cause'],
            'idApprobateur':{
              'id':sessionStorage.getItem('id')
            },
            'solution':null,
            'typeDeSolution':null,
            'idUtilisateur':null,
            'priorite':this.priorite,
            'idProbleme':this.listIdProblemes[0]
          };
          this.incidentService.createIncident(this.incident).subscribe(
            response=>{
              console.log(response);
              this.router.navigate(['newTicketApprobateur']);
            }
          );
        }
        else{
          if(this.listIdIncidents!=[])
          {
          console.log("createProblem");
          this.probleme={
            'sujet':formValue['sujet'],
            'description':formValue['description'],
            'motCle':formValue['motCle'],
            'impact':formValue['impact'],
            'urgence':formValue['urgence'],
            'dateOuverture':this.date,
            'ticketStatut':'En attente',
            'cause':formValue['cause'],
            'idApprobateur':{
              'id':sessionStorage.getItem('id')
            },
            'solution':null,
            'typeDeSolution':null,
            'idUtilisateur':null,
            'priorite':this.priorite
          }
          this.problemService.createProbleme(this.probleme).subscribe(
            response=>{
              console.log("Hello Hello")
              this.problemeCree=response;
                  this.idProblemeCreated=this.problemeCree['id'];
                  console.log(this.problemeCree);
                  console.log(this.idProblemeCreated);
            }
          );
          for(let element in this.listIncidents)
          {
            this.incident1={
              'sujet':this.listIncidents[element]['sujet'],
              'description':this.listIncidents[element]['description'],
              'motCle':this.listIncidents[element]['motCle'],
              'impact':this.listIncidents[element]['impact'],
              'urgence':this.listIncidents[element]['urgence'],
              'dateOuverture':this.listIncidents[element]['dateOuverture'],
              'ticketStatut':'En attente',
              'cause':this.listIncidents[element]['cause'],
              'idApprobateur':{
                'id':sessionStorage.getItem('id')
              },
              'solution':null,
              'typeDeSolution':null,
              'idUtilisateur':null,
              'priorite':this.priorite,
              'idProbleme':this.problemeCree
            };
            this.incidentService.updateIncident(this.listIncidents[element]['id'],this.incident1).subscribe(
              Response => {
                console.log(Response);
                console.log("ticket mis à jour");
              }
            );
          };
          for(let element in this.listIncidents1)
          {
            if(!this.listIncidents.includes(this.listIncidents1[element]))
            {
            this.incident1={
              'sujet':this.listIncidents1[element]['sujet'],
              'description':this.listIncidents1[element]['description'],
              'motCle':this.listIncidents1[element]['motCle'],
              'impact':this.listIncidents1[element]['impact'],
              'urgence':this.listIncidents1[element]['urgence'],
              'dateOuverture':this.listIncidents1[element]['dateOuverture'],
              'ticketStatut':'En attente',
              'cause':this.listIncidents1[element]['cause'],
              'idApprobateur':{
                'id':sessionStorage.getItem('id')
              },
              'solution':null,
              'typeDeSolution':null,
              'idUtilisateur':null,
              'priorite':this.priorite,
              'idProbleme':this.problemeCree
            };
            this.incidentService.updateIncident(this.listIncidents1[element]['id'],this.incident1).subscribe(
              Response => {
                console.log(Response);
                console.log("ticket mis à jour");
              }
            );
          }
          };
          this.incident={
            'sujet':formValue['sujet'],
            'description':formValue['description'],
            'motCle':formValue['motCle'],
            'impact':formValue['impact'],
            'urgence':formValue['urgence'],
            'dateOuverture':this.date,
            'ticketStatut':'En attente',
            'cause':formValue['cause'],
            'idApprobateur':{
              'id':sessionStorage.getItem('id')
            },
            'solution':null,
            'typeDeSolution':null,
            'idUtilisateur':null,
            'priorite':this.priorite,
            'idProbleme':this.problemeCree
          }
          this.incidentService.createIncident(this.incident).subscribe(
             response=>{
               console.log(response);
               this.router.navigate(['newTicketApprobateur']);
             }
          )
        }
        else
        {
           
          
              console.log("erreuuur");
            
        }

      }
}
    }
  }
}
    
