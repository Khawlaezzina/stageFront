export class Ticket {
    id ?:number;
    sujet ?: string;
    dateOuverture ?:Date;
    ticketStatut ?: string;
    description ?: string;
    impact ?: string;
    urgence ?: string;
    idApprobateur ?:number;
    idUtilisateur ?:number;
}
