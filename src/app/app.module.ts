import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignInAdminComponent } from './components/sign-in-admin/sign-in-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardTechnicienComponent } from './components/dashboard-technicien/dashboard-technicien.component';
import { DashboardApprobateurComponent } from './components/dashboard-approbateur/dashboard-approbateur.component';
import { NewServiceApprobateurComponent } from './components/new-service-approbateur/new-service-approbateur.component';
import { ListProblemesEnCoursComponent } from './components/list-problemes-en-cours/list-problemes-en-cours.component';
import { ListProblemesResolusComponent } from './components/list-problemes-resolus/list-problemes-resolus.component';

import { RechercheSolutionUserComponent } from './components/recherche-solution-user/recherche-solution-user.component';
import { DecouvrirCatalogueUserComponent } from './components/decouvrir-catalogue-user/decouvrir-catalogue-user.component';
import { NewTicketUserComponent } from './components/new-ticket-user/new-ticket-user.component';
import { NewServiceDemandUserComponent } from './components/new-service-demand-user/new-service-demand-user.component';
import { NewTicketApprobateurComponent } from './components/new-ticket-approbateur/new-ticket-approbateur.component';
import { ListIncidentEnCoursComponent } from './components/list-incident-en-cours/list-incident-en-cours.component';
import { ListIncidentResolusComponent } from './components/list-incident-resolus/list-incident-resolus.component';

import { ListServiceEnCoursComponent } from './components/list-service-en-cours/list-service-en-cours.component';
import { ListServiceResolusComponent } from './components/list-service-resolus/list-service-resolus.component';

import { GererTechniciensComponent } from './components/gerer-techniciens/gerer-techniciens.component';
import { GererUsersComponent } from './components/gerer-users/gerer-users.component';
import { GererApprobateursComponent } from './components/gerer-approbateurs/gerer-approbateurs.component';
import { GererAdminsComponent } from './components/gerer-admins/gerer-admins.component';

import { LogoutAdminComponent } from './components/logout-admin/logout-admin.component';
import { LogoutUserComponent } from './components/logout-user/logout-user.component';
import { LogoutApprobateurComponent } from './components/logout-approbateur/logout-approbateur.component';
import { LogoutTechnicienComponent } from './components/logout-technicien/logout-technicien.component';
import { SignInUserComponent } from './components/sign-in-user/sign-in-user.component';
import { SignInTechnicienComponent } from './components/sign-in-technicien/sign-in-technicien.component';
import { SignInApprobateurComponent } from './components/sign-in-approbateur/sign-in-approbateur.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';
import { NewAdminComponent } from './components/new-admin/new-admin.component';
import { UpdateApprobateurComponent } from './components/update-approbateur/update-approbateur.component';
import { NewApprobateurComponent } from './components/new-approbateur/new-approbateur.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

import { NewUserComponent } from './components/new-user/new-user.component';
import { NewTechnicienComponent } from './components/new-technicien/new-technicien.component';
import { UpdateTechnicienComponent } from './components/update-technicien/update-technicien.component';
import { DashboardUserComponent } from './components/dashboard-user/dashboard-user.component';
import { ListTicketsForApprouvementComponent } from './components/list-tickets-for-approuvement/list-tickets-for-approuvement.component';
import { UpdateProblemeBeforeApprouvementComponent } from './components/update-probleme-before-approuvement/update-probleme-before-approuvement.component';
import { UpdateIncidentBeforeApprouvementComponent } from './components/update-incident-before-approuvement/update-incident-before-approuvement.component';
import { UpdateServiceBeforeApprouvementComponent } from './components/update-service-before-approuvement/update-service-before-approuvement.component';
import { GererIncidentAdminComponent } from './components/gerer-incident-admin/gerer-incident-admin.component';
import { GererConfigurationAdminComponent } from './components/gerer-configuration-admin/gerer-configuration-admin.component';
import { GererProblemeAdminComponent } from './components/gerer-probleme-admin/gerer-probleme-admin.component';
import { GererChangementAdminComponent } from './components/gerer-changement-admin/gerer-changement-admin.component';
import { GererServiceAdminComponent } from './components/gerer-service-admin/gerer-service-admin.component';
import { GererProfilAdminComponent } from './components/gerer-profil-admin/gerer-profil-admin.component';
import { ListTechniciensByDepartementComponent } from './components/list-techniciens-by-departement/list-techniciens-by-departement.component';
import { AddSolutionAdminComponent } from './components/add-solution-admin/add-solution-admin.component';
import { UpdateSolutionAdminComponent } from './components/update-solution-admin/update-solution-admin.component';
import { ListTechniciensByTicketComponent } from './components/list-techniciens-by-ticket/list-techniciens-by-ticket.component';
import { ListTechniciensForServiceByDepartementComponent } from './components/list-techniciens-for-service-by-departement/list-techniciens-for-service-by-departement.component';
import { ListTechniciensForServiceComponent } from './components/list-techniciens-for-service/list-techniciens-for-service.component';
import { GererIncidentTechnicienComponent } from './components/gerer-incident-technicien/gerer-incident-technicien.component';
import { GererConfigurationTechnicienComponent } from './components/gerer-configuration-technicien/gerer-configuration-technicien.component';
import { GererProblemeTechnicienComponent } from './components/gerer-probleme-technicien/gerer-probleme-technicien.component';
import { GererChangementTechnicienComponent } from './components/gerer-changement-technicien/gerer-changement-technicien.component';
import { GererServiceTechnicienComponent } from './components/gerer-service-technicien/gerer-service-technicien.component';
import { NewCIComponent } from './components/new-ci/new-ci.component';
import { UpdateCIComponent } from './components/update-ci/update-ci.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';
import { AddSolutionProblemAdminComponent } from './components/add-solution-problem-admin/add-solution-problem-admin.component';
import { ListTechniciensByDepartementForProblemComponent } from './components/list-techniciens-by-departement-for-problem/list-techniciens-by-departement-for-problem.component';
import { UpdateSolutionForProblemAdminComponent } from './components/update-solution-for-problem-admin/update-solution-for-problem-admin.component';
import { ListTechniciensByProblemComponent } from './components/list-techniciens-by-problem/list-techniciens-by-problem.component';
import { ListIncidentsByProblemComponent } from './components/list-incidents-by-problem/list-incidents-by-problem.component';
import { AddSolutionTechnicienComponent } from './components/add-solution-technicien/add-solution-technicien.component';
import { UpdateSolutionTechnicienComponent } from './components/update-solution-technicien/update-solution-technicien.component';
import { UpdateCITechnicienComponent } from './components/update-citechnicien/update-citechnicien.component';
import { NewCITechnicienComponent } from './components/new-citechnicien/new-citechnicien.component';
import { UpdateContactTechnicienComponent } from './components/update-contact-technicien/update-contact-technicien.component';
import { NewContactTechnicienComponent } from './components/new-contact-technicien/new-contact-technicien.component';
import { AddSolutionProblemTechnicienComponent } from './components/add-solution-problem-technicien/add-solution-problem-technicien.component';
import { UpdateSolutionForProblemTechnicienComponent } from './components/update-solution-for-problem-technicien/update-solution-for-problem-technicien.component';
import { ListIncidentsByProblemTechnicienComponent } from './components/list-incidents-by-problem-technicien/list-incidents-by-problem-technicien.component';
import { NewChangementComponent } from './components/new-changement/new-changement.component';
import { NewTacheComponent } from './components/new-tache/new-tache.component';
import { ListTachesComponent } from './components/list-taches/list-taches.component';
import { ListTechniciensForChangementComponent } from './components/list-techniciens-for-changement/list-techniciens-for-changement.component';

@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignInAdminComponent,
    DashboardUserComponent,
    DashboardAdminComponent,
    DashboardTechnicienComponent,
    DashboardApprobateurComponent,
    NewServiceApprobateurComponent,
    ListProblemesEnCoursComponent,
    ListProblemesResolusComponent,
   
    RechercheSolutionUserComponent,
    DecouvrirCatalogueUserComponent,
    NewTicketUserComponent,
    NewServiceDemandUserComponent,
    NewTicketApprobateurComponent,
    ListIncidentEnCoursComponent,
    ListIncidentResolusComponent,
  
    ListServiceEnCoursComponent,
    ListServiceResolusComponent,
   
    GererTechniciensComponent,
    GererUsersComponent,
    GererApprobateursComponent,
    GererAdminsComponent,
    LogoutAdminComponent,
    LogoutUserComponent,
    LogoutApprobateurComponent,
    LogoutTechnicienComponent,
    SignInUserComponent,
    SignInTechnicienComponent,
    SignInApprobateurComponent,
    UpdateAdminComponent,
    NewAdminComponent,
    UpdateApprobateurComponent,
    NewApprobateurComponent,
    UpdateUserComponent,
    
    NewUserComponent,
    NewTechnicienComponent,
    UpdateTechnicienComponent,
    ListTicketsForApprouvementComponent,
    UpdateProblemeBeforeApprouvementComponent,
    UpdateIncidentBeforeApprouvementComponent,
    UpdateServiceBeforeApprouvementComponent,
    GererIncidentAdminComponent,
    GererConfigurationAdminComponent,
    GererProblemeAdminComponent,
    GererChangementAdminComponent,
    GererServiceAdminComponent,
    GererProfilAdminComponent,
    ListTechniciensByDepartementComponent,
    AddSolutionAdminComponent,
    UpdateSolutionAdminComponent,
   
    ListTechniciensByTicketComponent,
        ListTechniciensForServiceByDepartementComponent,
        ListTechniciensForServiceComponent,
        GererIncidentTechnicienComponent,
        GererConfigurationTechnicienComponent,
        GererProblemeTechnicienComponent,
        GererChangementTechnicienComponent,
        GererServiceTechnicienComponent,
        NewCIComponent,
        UpdateCIComponent,
        NewContactComponent,
        UpdateContactComponent,
        AddSolutionProblemAdminComponent,
        ListTechniciensByDepartementForProblemComponent,
        UpdateSolutionForProblemAdminComponent,
        ListTechniciensByProblemComponent,
        ListIncidentsByProblemComponent,
        AddSolutionTechnicienComponent,
        UpdateSolutionTechnicienComponent,
        UpdateCITechnicienComponent,
        NewCITechnicienComponent,
        UpdateContactTechnicienComponent,
        NewContactTechnicienComponent,
        AddSolutionProblemTechnicienComponent,
        UpdateSolutionForProblemTechnicienComponent,
        ListIncidentsByProblemTechnicienComponent,
        NewChangementComponent,
        NewTacheComponent,
        ListTachesComponent,
        ListTechniciensForChangementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
