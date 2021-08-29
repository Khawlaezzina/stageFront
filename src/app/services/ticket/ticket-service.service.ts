import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {
  urlTickets = 'http://127.0.0.1:8443/ticket';
  constructor(private Http: HttpClient) { }

  createTicket(ticket: any)
  {
    return this.Http.post(this. urlTickets+'/add',ticket);
  }

  getAllTickets()
  {
    return this.Http.get(this.urlTickets+'/list');
  }

  getTicketById(ticketId: string)
  {
    return this.Http.get(this.urlTickets+ticketId);
  }

  updateTicket(ticketId:string,ticket:any)
  {
    return this.Http.put(this.urlTickets+ '/'+ticketId,ticket);
  }
  deleteTicket(ticketId:string)
  {
    return this.Http.delete(this.urlTickets+'/'+ticketId);
  }
  getTicketsByDepartementAndStatut(departement:string,statut:string)
  {
    return this.Http.put(this.urlTickets + '/listTicketsByDepartement/' + departement + '/' + statut,{});
  }
  getTicketsByStatut(statut:string)
  {
    return this.Http.get(this.urlTickets+'/listTicketsByStatut/'+statut);
  }
  getTicketsByDate(date:Date)
  {
    return this.Http.get(this.urlTickets+'/listTicketsByDate/'+date);
  }
  getTicketsByUser(idUser:number)
  {
    return this.Http.get(this.urlTickets+'/listTicketsByUser/'+idUser);
  }
  getTicketsByUserAndStatut(idUser:number,statut:string)
  {
    return this.Http.get(this.urlTickets+'/listTicketsByUserAndStatut/'+idUser+'/'+statut);
  }
  getTicketsByImpact(impact:string)
  {
    return this.Http.get(this.urlTickets+'/listTicketsByImpact/'+impact);
  }
  getTicketsByUrgence(urgence:string)
  {
    return this.Http.get(this.urlTickets+'/listTicketsByUrgence/'+urgence);
  }
  getTicketsByApprobateurAndStatut(idApprobateur:number,statut:string)
  {
    return this.Http.get(this.urlTickets+'/listTicketsByApprobateurAndStatut/'+idApprobateur+'/'+statut);
  }
  getTicketsByApprobateur(idApprobateur:number)
  {
    return this.Http.get(this.urlTickets+'/listTicketsByApprobateur/'+idApprobateur);
  }
}
