import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Incident } from 'src/app/models/incident';
import { IncidentServiceService } from 'src/app/services/incident/incident-service.service';
import { ProblemeServiceService } from 'src/app/services/probleme/probleme-service.service';
import { TicketServiceService } from 'src/app/services/ticket/ticket-service.service';
import { UserAuthentificationService } from 'src/app/services/user/user-authentification.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-new-ticket-user',
  templateUrl: './new-ticket-user.component.html',
  styleUrls: ['./new-ticket-user.component.scss']
})
export class NewTicketUserComponent implements OnInit {
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
  constructor(private router : Router, private route: ActivatedRoute,private userService:UserService,private ticketService: TicketServiceService,private incidentService:IncidentServiceService, private problemService:ProblemeServiceService,private formBuilder:FormBuilder) { }

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
  newTicket(form:any)
  {
    this.date=new Date();
    this.user={
      'id':parseInt(this.route.snapshot.params.idUser)
    }
    this.ticket={
      'id':null,
      'sujet':form.value.sujet,
      'dateOuverture':this.date,
      'ticketStatut':'Nouveau',
      'description':form.value.description,
      'impact':form.value.impact,
      'urgence':form.value.urgence,
      'idUser':this.user,
      'idApprobateur':null

    }
    if(form.value.cause==="")
    {
      this.probleme={
        'id':null,
        'sujet':form.value.sujet,
        'dateOuverture':this.date,
        'ticketStatut':'Nouveau',
        'description':form.value.description,
        'impact':form.value.impact,
        'urgence':form.value.urgence,
        'idUser':this.user,
        'idApprobateur':null,
        'solution':null,
        'typeDeSolution':null,
        'motCle':form.value.motCle,
        'cause':form.value.cause
  
      }
     
      this.problemService.createProbleme(this.probleme).subscribe(
        result=>{
          //this.idProblem=parseInt(result["id"]);
          this.incident={
            'id':null,
            'sujet':form.value.sujet,
            'dateOuverture':this.date,
            'ticketStatut':'Nouveau',
            'description':form.value.description,
            'impact':form.value.impact,
            'urgence':form.value.urgence,
            'idUser':this.user,
            'idApprobateur':null,
            'solution':null,
            'typeDeSolution':null,
            'motCle':form.value.motCle,
            'cause':form.value.cause,
            'idProbleme':this.idProblem
            
          }
          this.incidentService.createIncident(this.incident);
        
        }
      )
    }
    else
    {
      this.incident={
        'id':null,
        'sujet':form.value.sujet,
        'dateOuverture':this.date,
        'ticketStatut':'Nouveau',
        'description':form.value.description,
        'impact':form.value.impact,
        'urgence':form.value.urgence,
        'idUtilisateur':this.user,
        'idApprobateur':null,
        'solution':null,
        'typeDeSolution':null,
        'motCle':form.value.motCle,
        'cause':form.value.cause,
        'idProbleme':null
        
      }
      this.incidentService.createIncident(this.incident);
         
    }
  }
  onSubmitForm()
  {
    this.date=new Date();
      this.userService.getUser(sessionStorage['id']).subscribe(
        response=>{
          this.user=response;
          console.log(this.user);
        }
      );
    const formValue=this.newTicketForm.value;

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
        'ticketStatut':'Nouveau',
        'cause':formValue['cause'],
        'idApprobateur':null,
        'solution':null,
        'typeDeSolution':null,
        'idUtilisateur':{
          'id':sessionStorage.getItem('id')
        },
        'priorite':null
      }
       
        this.problemService.createProbleme(this.probleme).subscribe(
          response=>{
            console.log(response);
            this.router.navigate(['newTicketUser']);
          }
        );

    }
    else
    {
      this.incidentService.getIncidentByCause(formValue['cause'],"Nouveau").subscribe(
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
        this.incidentService.getIncidentByMotCle(this.motCles[element],"Nouveau").subscribe(
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
          'ticketStatut':'Nouveau',
          'cause':formValue['cause'],
          'idApprobateur':null,
          'solution':null,
          'typeDeSolution':null,
          'idUtilisateur':{
            'id':sessionStorage.getItem('id')
          },
          'priorite':null,
          'idProbleme':null
        }
        console.log(this.incident);
        this.incidentService.createIncident(this.incident).subscribe(
          response=>{
            console.log(response);
            this.router.navigate(['newTicketUser']);
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
            'ticketStatut':'Nouveau',
            'cause':formValue['cause'],
            'idApprobateur':null,
            'solution':null,
            'typeDeSolution':null,
            'idUtilisateur':{
              'id':sessionStorage.getItem('id')
            },
            'priorite':null,
            'idProbleme':this.listIdProblemes[0]
          };
          this.incidentService.createIncident(this.incident).subscribe(
            response=>{
              console.log(response);
              this.router.navigate(['newTicketUser']);
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
            'ticketStatut':'Nouveau',
            'cause':formValue['cause'],
            'idApprobateur':null,
            'solution':null,
            'typeDeSolution':null,
            'idUtilisateur':{
              'id':sessionStorage.getItem('id')
            },
            'priorite':null
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
              'ticketStatut':'Nouveau',
              'cause':this.listIncidents[element]['cause'],
              'idApprobateur':null,
              'solution':null,
              'typeDeSolution':null,
              'idUtilisateur':{
                'id':sessionStorage.getItem('id')
              },
              'priorite':null,
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
              'ticketStatut':'Nouveau',
              'cause':this.listIncidents1[element]['cause'],
              'idApprobateur':null,
              'solution':null,
              'typeDeSolution':null,
              'idUtilisateur':{
                'id':sessionStorage.getItem('id')
              },
              'priorite':null,
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
            'ticketStatut':'Nouveau',
            'cause':formValue['cause'],
            'idApprobateur':null,
            'solution':null,
            'typeDeSolution':null,
            'idUtilisateur':{
              'id':sessionStorage.getItem('id')
            },
            'priorite':null,
            'idProbleme':this.problemeCree
          }
          this.incidentService.createIncident(this.incident).subscribe(
             response=>{
               console.log(response);
               this.router.navigate(['newTicketUser']);
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


