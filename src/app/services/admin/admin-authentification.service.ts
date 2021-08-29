import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin/admin.model';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthentificationService {
  admin : any;
 
  firstName: any;
  lastName:any;
  id:any;
  password: any;
  test : boolean = false ;
  invalidLogin: boolean | undefined;
  constructor(public service : AdminService, public router : Router) { }
  authenticate(username:any, password:any) : boolean {
    if(username==="khawlaEzzina" && password=="02101998")
    {
      sessionStorage.setItem('firstName', "admin")
      sessionStorage.setItem('lastName',"cni")
      sessionStorage.setItem('role', "admin")
      sessionStorage.setItem('password',"02101998")
      this.invalidLogin = false;
      this.router.navigate(['dashboardAdmin'])
      return true;
    }
    else
    {
       this.service.getUserByEmail(username).subscribe(
        response => {
              //this.password= response["password"];
              
          console.log(response);
         
          this.admin=response;
          this.password= this.admin["password"];
          console.log(this.admin);
          console.log(this.admin["prenom"]);
          console.log(this.admin["nom"]);
          console.log(password);
          console.log(this.password);
          if (this.password==password) {
           
            sessionStorage.setItem('firstName', this.admin["prenom"]) ;
            sessionStorage.setItem('lastName', this.admin["nom"]);
            sessionStorage.setItem('id',this.admin["id"]);
            sessionStorage.setItem('departement',this.admin["departement"]);
            sessionStorage.setItem('role', "admin") ;
            this.test = true;
            this.invalidLogin = false;
            // @ts-ignore
            this.router.navigate(['dashboardAdmin'])
          
          }
          else{
           console.log("Hello");
           this.test = false;
           this.invalidLogin = true;
           // @ts-ignore
           this.router.navigate([''])
          }
          }
   
      )
      // @ts-ignore
      //this.router.navigate(['newsfeed-freelancer'])
      return this.test
   
    }
   // @ts-ignore
   //this.router.navigate(['newsfeed-freelancer'])
   return this.test

 }
 isUserLoggedIn() {
   let user = sessionStorage.getItem('role')

   return (user === "admin")
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
