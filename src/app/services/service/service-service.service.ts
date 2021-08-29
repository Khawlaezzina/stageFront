import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceServiceService {
  urlTickets = 'http://127.0.0.1:8443/service';
  ListSujet:any[]=[];
  id:number=0;
  item:any;
  exist:boolean=false;
  constructor(private Http: HttpClient) { }

  createService(ticket: any)
  {
    return this.Http.post(this. urlTickets+'/add',ticket);
  }

  getAllServices()
  {
    return this.Http.get(this.urlTickets+'/list');
  }

  getServiceById(ticketId: string)
  {
    return this.Http.get(this.urlTickets+ticketId);
  }

  updateService(ticketId:string,ticket:any)
  {
    return this.Http.put(this.urlTickets+ '/'+ticketId,ticket);
  }
  deleteService(ticketId:string)
  {
    return this.Http.delete(this.urlTickets+'/'+ticketId);
  }
  getServicesByDepartementAndStatut(departement:string,statut:string)
  {
    return this.Http.put(this.urlTickets + '/listServicesByDepartement/' + departement + '/' + statut,{});
  }
  getServicesByStatut(statut:string)
  {
    return this.Http.get(this.urlTickets+'/listServicesByStatut/'+statut);
  }
  getServicesByDate(date:Date)
  {
    return this.Http.get(this.urlTickets+'/listServicesByDate/'+date);
  }
  getServicesByUser(idUser:number)
  {
    return this.Http.get(this.urlTickets+'/listServicesByUser/'+idUser);
  }
  getServicesByUserAndStatut(idUser:number,statut:string)
  {
    return this.Http.get(this.urlTickets+'/listServiceByUserAndStatut/'+idUser+'/'+statut);
  }
  getServicesByImpact(impact:string)
  {
    return this.Http.get(this.urlTickets+'/listServicesByImpact/'+impact);
  }
  getServicesByUrgence(urgence:string)
  {
    return this.Http.get(this.urlTickets+'/listServicesByUrgence/'+urgence);
  }
  getServicesByApprobateurAndStatut(idApprobateur:number,statut:string)
  {
    return this.Http.get(this.urlTickets+'/listServicesByApprobateurAndStatut/'+idApprobateur+'/'+statut);
  }
  getServicesByApprobateur(idApprobateur:number)
  {
    return this.Http.get(this.urlTickets+'/listServicesByApprobateur/'+idApprobateur);
  }
  updatePriority(idIncident:number,priorite:string)
  {
    return this.Http.put(this.urlTickets+'/updatePriority/'+idIncident+'/'+priorite,{});
  }
  getServicesSubject()
  {
    return this.Http.get(this.urlTickets+'/listServicesSubject');
  }
  addSujet(Sujet:string)
  {
    this.exist=false;
    for(let element in this.ListSujet)
    {
      if(this.ListSujet[element].sujet==Sujet)
      {
          this.exist=true;
      }
    }
    if(this.exist==false)
    {
      this.item={
        'id':this.id,
        'sujet':this.addSujet
      };
      this.ListSujet.push(this.item);
      this.id++;
      console.log(this.id);
      console.log("element added successfully");
    }

}
  getSujets()
  {
    return this.ListSujet;
  }
  
}
