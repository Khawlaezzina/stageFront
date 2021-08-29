import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Probleme } from 'src/app/models/probleme';

@Injectable({
  providedIn: 'root'
})
export class ProblemeServiceService {

  urlProbleme = 'http://127.0.0.1:8443/probleme';
  constructor(private Http: HttpClient) { }

  createProbleme(ticket: Probleme)
  {
    console.log(ticket);
    return this.Http.post(this.urlProbleme+'/add',ticket);
  }

  getAllProblemes()
  {
    return this.Http.get(this.urlProbleme+'/list');
  }

  getProblemeById(ticketId: string)
  {
    return this.Http.get(this.urlProbleme+ticketId);
  }

  updateProbleme(ticketId:string,ticket:any)
  {
    return this.Http.post(this.urlProbleme+ '/'+ticketId,ticket);
  }
  deleteProbleme(ticketId:string)
  {
    return this.Http.delete(this.urlProbleme+'/'+ticketId);
  }
  getProblemesByDepartementAndStatut(departement:string,statut:string)
  {
    return this.Http.get(this.urlProbleme + '/listProblemesByDepartement/' + departement + '/' + statut,{});
  }
  getProblemesByStatut(statut:string)
  {
    return this.Http.get(this.urlProbleme+'/listProblemesByStatut/'+statut);
  }
  getProblemesByDate(date:Date)
  {
    return this.Http.get(this.urlProbleme+'/listproblemesByDate/'+date);
  }
  getProblemesByUser(idUser:number)
  {
    return this.Http.get(this.urlProbleme+'/listProblemesByUser/'+idUser);
  }
  getProblemesByUserAndStatut(idUser:number,statut:string)
  {
    return this.Http.get(this.urlProbleme+'/listProblemesByUserAndStatut/'+idUser+'/'+statut);
  }
  getProblemesByImpact(impact:string)
  {
    return this.Http.get(this.urlProbleme+'/listProblemesByImpact/'+impact);
  }
  getProblemesByUrgence(urgence:string)
  {
    return this.Http.get(this.urlProbleme+'/listProblemesByUrgence/'+urgence);
  }
  getProblemesByApprobateurAndStatut(idApprobateur:number,statut:string)
  {
    return this.Http.get(this.urlProbleme+'/listProblemesByApprobateurAndStatut/'+idApprobateur+'/'+statut);
  }
  getProblemesByApprobateur(idApprobateur:number)
  {
    return this.Http.get(this.urlProbleme+'/listProblemesByApprobateur/'+idApprobateur);
  }
  updatePriority(idIncident:number,priorite:string)
  {
    return this.Http.put(this.urlProbleme+'/updatePriority/'+idIncident+'/'+priorite,{});
  }
  updateStatutEnAttente(idIncident:number)
  {
    return this.Http.put(this.urlProbleme+'/updateStatutEnAttente/'+idIncident,{});
  }
  updateStatutResolu(idIncident:number)
  {
    return this.Http.put(this.urlProbleme+'/updateStatutResolu/'+idIncident,{});
  }
 
  getProblemeByDepartementAndStatut(departement:string,statut:string)
  {
    return this.Http.get(this.urlProbleme+'/listProblemeByDepartementAndStatut/'+departement+'/'+statut);
  }
  getProblemeByMotCle(motCle:string)
  {
    return this.Http.get(this.urlProbleme+'/listProblemeByMotCle/'+motCle);
  }
  getProblemeByDescription(description:string)
  {
    return this.Http.get(this.urlProbleme+'/listProblemeByDescription/'+description);
  }
  getProblemeBySujet(sujet:string)
  {
    return this.Http.get(this.urlProbleme+'/listProblemeBySujet/'+sujet);
  }
  getProblemeByCause(cause:string)
  {
    return this.Http.get(this.urlProbleme+'/listProblemeByCause/'+cause);
  }
}
