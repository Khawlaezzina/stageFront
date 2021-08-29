import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncidentServiceService {

  urlIncidents = 'http://127.0.0.1:8443/incident';
  constructor(private Http: HttpClient) { }

  createIncident(ticket: any)
  {
    return this.Http.post(this.urlIncidents+'/add',ticket);
  }

  getAllIncidents()
  {
    return this.Http.get<any []>(this.urlIncidents+'/list');
  }

  getIncidentById(ticketId: string)
  {
    return this.Http.get<any []>(this.urlIncidents+ticketId);
  }

  updateIncident(ticketId:string,ticket:any)
  {
    return this.Http.put(this.urlIncidents+ '/'+ticketId,ticket);
  }
  deleteIncident(ticketId:string)
  {
    return this.Http.delete(this.urlIncidents+'/'+ticketId);
  }
  getIncidentsByDepartementAndStatut(departement:string,statut:string)
  {
    return this.Http.get<any []>(this.urlIncidents + '/listIncidentsByDepartement/' + departement + '/' + statut,{});
  }
  getIncidentsByStatut(statut:string)
  {
    return this.Http.get<any []>(this.urlIncidents+'/listIncidentsByStatut/'+statut);
  }
  getIncidentsByDate(date:Date)
  {
    return this.Http.get<any []>(this.urlIncidents+'/listIncidentsByDate/'+date);
  }
  getIncidentsByUser(idUser:number)
  {
    return this.Http.get<any []>(this.urlIncidents+'/listIncidentsByUser/'+idUser);
  }
  getIncidentsByUserAndStatut(idUser:number,statut:string)
  {
    return this.Http.get<any []>(this.urlIncidents+'/listIncidentsByUserAndStatut/'+idUser+'/'+statut);
  }
  getIncidentsByImpact(impact:string)
  {
    return this.Http.get<any []>(this.urlIncidents+'/listIncidentsByImpact/'+impact);
  }
  getIncidentsByUrgence(urgence:string)
  {
    return this.Http.get<any []>(this.urlIncidents+'/listIncidentsByUrgence/'+urgence);
  }
  getIncidentsByApprobateurAndStatut(idApprobateur:number,statut:string)
  {
    return this.Http.get<any []>(this.urlIncidents+'/listIncidentsByApprobateurAndStatut/'+idApprobateur+'/'+statut);
  }
  getIncidentsByApprobateur(idApprobateur:number)
  {
    return this.Http.get<any []>(this.urlIncidents+'/listIncidentsByApprobateur/'+idApprobateur);
  }
  updatePriority(idIncident:number,priorite:string)
  {
    return this.Http.put(this.urlIncidents+'/updatePriority/'+idIncident+'/'+priorite,{});
  }
  updateStatutEnAttente(idIncident:number)
  {
    return this.Http.put(this.urlIncidents+'/updateStatutEnAttente/'+idIncident,{});
  }
  updateStatutResolu(idIncident:number)
  {
    return this.Http.put(this.urlIncidents+'/updateStatutResolu/'+idIncident,{});
  }
  updateStatutIncidentResolu(idProbleme:number,solution:string,typeDeSolution:string)
  {
    return this.Http.put(this.urlIncidents+'/updateStatutIncidentResolu/'+idProbleme+'/'+solution+'/'+typeDeSolution,{});
  }
  getIncidentByDepartementAndStatut(departement:string,statut:string)
  {
    return this.Http.get<any []>(this.urlIncidents+'/listIncidentByDepartementAndStatut/'+departement+'/'+statut);
  }
  getIncidentByMotCle(motCle:string,statut:string)
  {
    return this.Http.get<any []>(this.urlIncidents+'/listIncidentByMotCle/'+motCle+'/'+statut);
  }
  getIncidentByDescription(description:string)
  {
    return this.Http.get<any []>(this.urlIncidents+'/listIncidentByDescription/'+description);
  }
  getIncidentBySujet(sujet:string)
  {
    return this.Http.get<any []>(this.urlIncidents+'/listIncidentBySujet/'+sujet);
  }
  getIncidentByCause(cause:string,statut:string)
  {
    return this.Http.get<any []>(this.urlIncidents+'/listIncidentByCause/'+cause+'/'+statut);
  }
  updateIdProbleme(idIncident:number,idProbleme:number)
  {
    return this.Http.put(this.urlIncidents+'/updateIdProbleme/'+idIncident+'/'+idProbleme,{});
  }
}
