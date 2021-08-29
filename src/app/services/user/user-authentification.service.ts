import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserAuthentificationService {
  user : any;
  firstName: any;
  lastName:any;
  id:any;
  password: any;
  invalidLogin: boolean | undefined;
  test : boolean = false ;
  constructor(public service : UserService, public router : Router) { }
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
         sessionStorage.setItem('id',this.user["id"]);
         
         sessionStorage.setItem('role', "user") ;
         this.test = true;
         this.invalidLogin = false;
         // @ts-ignore
         this.router.navigate(['dashboardUser'])
       
       }
       else{
        console.log("Hello");
        this.test = false;
        this.invalidLogin = true;
        // @ts-ignore
        this.router.navigate(['signInUser'])
       }
       }

   )
   // @ts-ignore
   //this.router.navigate(['newsfeed-freelancer'])
   return this.test

 }
 isUserLoggedIn() {
   let user = sessionStorage.getItem('role')

   return (user === "user")
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
