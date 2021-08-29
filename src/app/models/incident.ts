export class Incident {
    id ?:number;
    sujet ?: string;
    dateOuverture ?:Date;
    ticketStatut ?: string;
    description ?: string;
    impact ?: string;
    urgence ?: string;
    idApprobateur ?:number;
    idUser ?:number;
    cause ?:string;
    motCle ?:string;
    solution ?:string;
    typeDeSolution ?:string;
    priorite ?:number;
    idProbleme?:number;
}
