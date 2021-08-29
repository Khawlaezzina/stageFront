import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApprobateurService } from './approbateur.service';
@Injectable({
  providedIn: 'root'
})
export class ApprobateurAuthentificationService {
  user : any;
  firstName: any;
  lastName:any;
  id:any;
  password: any;
  test : boolean = false ;
  invalidLogin: boolean | undefined;
 
  constructor( public router : Router, public service:ApprobateurService) { }

  authenticate(username:any, password:any) : boolean {
    this.service.getUserByEmail(username).subscribe(
     response => {
           //this.password= response["password"];
           
       console.log(response);
      
       this.user=response;
       this.password= this.user["password"];
       console.log(this.user);
       console.log(this.user["prenom"]);
       console.log(this.user["nom"]);
       console.log(password);
       console.log(this.password);
       if (this.password==password) {
        
         sessionStorage.setItem('firstName', this.user["prenom"]) ;
         sessionStorage.setItem('lastName', this.user["nom"]);
         sessionStorage.setItem('departement',this.user["departement"]);
         sessionStorage.setItem('id',this.user["id"]);
         
         sessionStorage.setItem('role', "approbateur") ;
         this.test = true;
         this.invalidLogin = false;
         // @ts-ignore
         this.router.navigate(['dashboardApprobateur'])
       
       }
       else{
        console.log("Hello");
        this.test = false;
        this.invalidLogin = true;
        // @ts-ignore
        this.router.navigate(['signInApprobateur'])
       }
       }

   )
   // @ts-ignore
   //this.router.navigate(['newsfeed-freelancer'])
   return this.test

 }
 isUserLoggedIn() {
   let user = sessionStorage.getItem('role')

   return (user === "approbateur")
 }
 logOut() {
   sessionStorage.removeItem('username')
   sessionStorage.removeItem('role')
   sessionStorage.removeItem('firstName')
   sessionStorage.removeItem('lastName')
   sessionStorage.removeItem('telephone_number')
   sessionStorage.removeItem('departement')
   sessionStorage.removeItem('address')
   sessionStorage.removeItem('id')

 }
}
