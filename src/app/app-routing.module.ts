import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddSolutionAdminComponent } from './components/add-solution-admin/add-solution-admin.component';
import { AddSolutionProblemAdminComponent } from './components/add-solution-problem-admin/add-solution-problem-admin.component';
import { AddSolutionProblemTechnicienComponent } from './components/add-solution-problem-technicien/add-solution-problem-technicien.component';
import { AddSolutionTechnicienComponent } from './components/add-solution-technicien/add-solution-technicien.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardApprobateurComponent } from './components/dashboard-approbateur/dashboard-approbateur.component';
import { DashboardTechnicienComponent } from './components/dashboard-technicien/dashboard-technicien.component';
import { DashboardUserComponent } from './components/dashboard-user/dashboard-user.component';
import { DecouvrirCatalogueUserComponent } from './components/decouvrir-catalogue-user/decouvrir-catalogue-user.component';
import { GererAdminsComponent } from './components/gerer-admins/gerer-admins.component';
import { GererApprobateursComponent } from './components/gerer-approbateurs/gerer-approbateurs.component';
import { GererChangementAdminComponent } from './components/gerer-changement-admin/gerer-changement-admin.component';
import { GererChangementTechnicienComponent } from './components/gerer-changement-technicien/gerer-changement-technicien.component';
import { GererConfigurationAdminComponent } from './components/gerer-configuration-admin/gerer-configuration-admin.component';
import { GererConfigurationTechnicienComponent } from './components/gerer-configuration-technicien/gerer-configuration-technicien.component';
import { GererIncidentAdminComponent } from './components/gerer-incident-admin/gerer-incident-admin.component';
import { GererIncidentTechnicienComponent } from './components/gerer-incident-technicien/gerer-incident-technicien.component';
import { GererProblemeAdminComponent } from './components/gerer-probleme-admin/gerer-probleme-admin.component';
import { GererProblemeTechnicienComponent } from './components/gerer-probleme-technicien/gerer-probleme-technicien.component';
import { GererProfilAdminComponent } from './components/gerer-profil-admin/gerer-profil-admin.component';
import { GererServiceAdminComponent } from './components/gerer-service-admin/gerer-service-admin.component';
import { GererServiceTechnicienComponent } from './components/gerer-service-technicien/gerer-service-technicien.component';
import { GererTechniciensComponent } from './components/gerer-techniciens/gerer-techniciens.component';
import { GererUsersComponent } from './components/gerer-users/gerer-users.component';
import { ListIncidentsByProblemTechnicienComponent } from './components/list-incidents-by-problem-technicien/list-incidents-by-problem-technicien.component';
import { ListIncidentsByProblemComponent } from './components/list-incidents-by-problem/list-incidents-by-problem.component';
import { ListTachesComponent } from './components/list-taches/list-taches.component';
import { ListTechniciensByDepartementForProblemComponent } from './components/list-techniciens-by-departement-for-problem/list-techniciens-by-departement-for-problem.component';
import { ListTechniciensByDepartementComponent } from './components/list-techniciens-by-departement/list-techniciens-by-departement.component';
import { ListTechniciensByProblemComponent } from './components/list-techniciens-by-problem/list-techniciens-by-problem.component';
import { ListTechniciensByTicketComponent } from './components/list-techniciens-by-ticket/list-techniciens-by-ticket.component';
import { ListTechniciensForChangementComponent } from './components/list-techniciens-for-changement/list-techniciens-for-changement.component';
import { ListTechniciensForServiceByDepartementComponent } from './components/list-techniciens-for-service-by-departement/list-techniciens-for-service-by-departement.component';
import { ListTechniciensForServiceComponent } from './components/list-techniciens-for-service/list-techniciens-for-service.component';
import { ListTicketsForApprouvementComponent } from './components/list-tickets-for-approuvement/list-tickets-for-approuvement.component';
import { LogoutAdminComponent } from './components/logout-admin/logout-admin.component';
import { LogoutApprobateurComponent } from './components/logout-approbateur/logout-approbateur.component';
import { LogoutTechnicienComponent } from './components/logout-technicien/logout-technicien.component';
import { LogoutUserComponent } from './components/logout-user/logout-user.component';
import { NewAdminComponent } from './components/new-admin/new-admin.component';
import { NewApprobateurComponent } from './components/new-approbateur/new-approbateur.component';
import { NewChangementComponent } from './components/new-changement/new-changement.component';
import { NewCIComponent } from './components/new-ci/new-ci.component';
import { NewCITechnicienComponent } from './components/new-citechnicien/new-citechnicien.component';
import { NewContactTechnicienComponent } from './components/new-contact-technicien/new-contact-technicien.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { NewServiceApprobateurComponent } from './components/new-service-approbateur/new-service-approbateur.component';
import { NewServiceDemandUserComponent } from './components/new-service-demand-user/new-service-demand-user.component';
import { NewTacheComponent } from './components/new-tache/new-tache.component';
import { NewTechnicienComponent } from './components/new-technicien/new-technicien.component';
import { NewTicketApprobateurComponent } from './components/new-ticket-approbateur/new-ticket-approbateur.component';
import { NewTicketUserComponent } from './components/new-ticket-user/new-ticket-user.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { SignInAdminComponent } from './components/sign-in-admin/sign-in-admin.component';
import { SignInApprobateurComponent } from './components/sign-in-approbateur/sign-in-approbateur.component';
import { SignInTechnicienComponent } from './components/sign-in-technicien/sign-in-technicien.component';
import { SignInUserComponent } from './components/sign-in-user/sign-in-user.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';
import { UpdateApprobateurComponent } from './components/update-approbateur/update-approbateur.component';
import { UpdateCIComponent } from './components/update-ci/update-ci.component';
import { UpdateCITechnicienComponent } from './components/update-citechnicien/update-citechnicien.component';
import { UpdateContactTechnicienComponent } from './components/update-contact-technicien/update-contact-technicien.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';
import { UpdateIncidentBeforeApprouvementComponent } from './components/update-incident-before-approuvement/update-incident-before-approuvement.component';
import { UpdateProblemeBeforeApprouvementComponent } from './components/update-probleme-before-approuvement/update-probleme-before-approuvement.component';
import { UpdateServiceBeforeApprouvementComponent } from './components/update-service-before-approuvement/update-service-before-approuvement.component';
import { UpdateSolutionAdminComponent } from './components/update-solution-admin/update-solution-admin.component';
import { UpdateSolutionForProblemAdminComponent } from './components/update-solution-for-problem-admin/update-solution-for-problem-admin.component';
import { UpdateSolutionForProblemTechnicienComponent } from './components/update-solution-for-problem-technicien/update-solution-for-problem-technicien.component';
import { UpdateSolutionTechnicienComponent } from './components/update-solution-technicien/update-solution-technicien.component';
import { UpdateTechnicienComponent } from './components/update-technicien/update-technicien.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  {path: '', component:SignInAdminComponent },
  {path:'newTicketUser',component:NewTicketUserComponent},
  {path:'newTicketApprobateur',component:NewTicketApprobateurComponent},
  {path:'updateAdmin/:id',component:UpdateAdminComponent},
  {path:'newAdmin',component:NewAdminComponent},
  {path:'signInUser',component:SignInUserComponent},
  {path:'signInTech',component:SignInTechnicienComponent},
  {path:'signInApprobateur',component:SignInApprobateurComponent},
  {path:'gererAdmins',component:GererAdminsComponent},
  {path:'gererApprobateurs',component:GererApprobateursComponent},
  {path:'gererUsers',component:GererUsersComponent},
  {path:'gererTechniciens',component:GererTechniciensComponent},
  {path:'dashboardAdmin',component:DashboardAdminComponent},
  {path:'dashboardUser',component:DashboardUserComponent},
  {path:'dashboardTechnicien',component:DashboardTechnicienComponent},
  {path:'dashboardApprobateur',component:DashboardApprobateurComponent},
  {path:'logoutUser',component:LogoutUserComponent},
  {path:'logoutAdmin',component:LogoutAdminComponent},
  {path:'logoutTechnicien',component:LogoutTechnicienComponent},
  {path:'logoutApprobateur',component:LogoutApprobateurComponent},
  {path:'newApprobateur',component:NewApprobateurComponent},
  {path:'updateApprobateur/:id',component:UpdateApprobateurComponent},
  {path:'newUser',component:NewUserComponent},
  {path:'updateUser/:id',component:UpdateUserComponent},
  {path:'updateTechnicien/:id',component:UpdateTechnicienComponent},
  {path:'newTechnicien',component:NewTechnicienComponent},
  {path:'newServiceUser',component:NewServiceDemandUserComponent},
  {path:'newServiceApprobateur',component:NewServiceApprobateurComponent},
  {path:'listTicketsForApprouvement',component:ListTicketsForApprouvementComponent},
  {path:'listTicketsForApprouvement/updateProblemeBeforeApprouvement/:id',component:UpdateProblemeBeforeApprouvementComponent},
  {path:'listTicketsForApprouvement/updateIncidentBeforeApprouvement/:id',component:UpdateIncidentBeforeApprouvementComponent},
  {path:'listTicketsForApprouvement/updateServiceBeforeApprouvement/:id',component:UpdateServiceBeforeApprouvementComponent},
  {path:'gererIncidentAdmin',component:GererIncidentAdminComponent},
  {path:'gererIncidentAdmin/listTechniciensByDepartement',component:ListTechniciensByDepartementComponent},
  {path:'gererIncidentAdmin/addSolutionAdmin',component:AddSolutionAdminComponent},
  {path:'gererIncidentAdmin/updateSolutionAdmin',component:UpdateSolutionAdminComponent},
  {path:'gererProfilAdmin',component:GererProfilAdminComponent},
  {path:'gererIncidentAdmin/listTechniciensByTicket',component:ListTechniciensByTicketComponent},
  {path:'gererServiceAdmin/listTechniciensForServiceByDepartement',component:ListTechniciensForServiceByDepartementComponent},
  {path:'gererServiceAdmin/listTechniciensForService',component:ListTechniciensForServiceComponent},
  {path:'gererServiceAdmin',component:GererServiceAdminComponent},
  {path:'gererIncidentTechnicien',component:GererIncidentTechnicienComponent},
  {path:'gererConfigurationTechnicien',component:GererConfigurationTechnicienComponent},
  {path:'gererProblemeTechnicien',component:GererProblemeTechnicienComponent},
  {path:'gererChangementTechnicien',component:GererChangementTechnicienComponent},
  {path:'gererServiceTechnicien',component:GererServiceTechnicienComponent},
  {path:'gererConfigurationAdmin',component:GererConfigurationAdminComponent},
  {path:'gererProblemeAdmin',component:GererProblemeAdminComponent},
  {path:'gererChangementAdmin',component:GererChangementAdminComponent},
  {path:'gererConfigurationAdmin/updateCI/:id',component:UpdateCIComponent},
  {path:'gererConfigurationAdmin/newCI',component:NewCIComponent},
  {path:'gererConfigurationAdmin/updateContact/:id',component:UpdateContactComponent},
  {path:'gererConfigurationAdmin/newContact',component:NewContactComponent},
  {path:'gererProblemeAdmin/addSolutionProblemAdmin',component:AddSolutionProblemAdminComponent},
  {path:'gererProblemeAdmin/listTechniciensByDepartementForProblem',component:ListTechniciensByDepartementForProblemComponent},
  {path:'gererProblemeAdmin/updateSolutionForProblemAdmin',component:UpdateSolutionForProblemAdminComponent},
  {path:'gererProblemeAdmin/listTechniciensByProblem',component:ListTechniciensByProblemComponent},
  {path:'gererProblemeAdmin/listIncidentsByProblem',component:ListIncidentsByProblemComponent},
  {path:'gererIncidentTechnicien/addSolutionTechnicien',component:AddSolutionTechnicienComponent},
  {path:'gererIncidentTechnicien/updateSolutionTechnicien',component:UpdateSolutionTechnicienComponent},
  {path:'gererConfigurationTechnicien/updateCITechnicien/:id',component:UpdateCITechnicienComponent},
  {path:'gererConfigurationTechnicien/newCITechnicien',component:NewCITechnicienComponent},
  {path:'gererConfigurationTechnicien/updateContactTechnicien/:id',component:UpdateContactTechnicienComponent},
  {path:'gererConfigurationTechnicien/newContactTechnicien',component:NewContactTechnicienComponent},
  {path:'gererProblemeTechnicien/addSolutionProblemTechnicien',component:AddSolutionProblemTechnicienComponent},
  {path:'gererProblemeTechnicien/updateSolutionForProblemTechnicien',component:UpdateSolutionForProblemTechnicienComponent},
  {path:'gererProblemeTechnicien/listIncidentsByProblemTechnicien',component:ListIncidentsByProblemTechnicienComponent},
  {path:'catalogueService',component:DecouvrirCatalogueUserComponent},
  {path:'listTaches/:id',component:ListTachesComponent},
  {path:'gererChangementAdmin/listTechniciensForChangement/:id',component:ListTechniciensForChangementComponent},
  {path:'newChangement',component:NewChangementComponent},
  {path:'newChangement/newTache',component:NewTacheComponent}
  






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
