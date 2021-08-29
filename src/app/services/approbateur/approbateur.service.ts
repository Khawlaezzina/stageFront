import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApprobateurService {
  urlApprobateur = 'http://127.0.0.1:8443/approbateur';
  user:any;
  constructor(private Http:HttpClient) { }
  listUsers() {
    return this.Http.get(this.urlApprobateur + '/list');
   }
  createUser(user:any) {
  
    return this.Http.post(this.urlApprobateur + '/add', user);}

    updateUser(myObj:any) {
      return this.Http.put(this.urlApprobateur + '/' + myObj['id'], myObj);
    }

    deleteUser(myObj:any) {
      return this.Http.delete(this.urlApprobateur + '/' + myObj['id'], myObj)
    }
    getUsers(id:any) {
      return this.Http.get(this.urlApprobateur + '/' + id)
    }
  
    getUserByEmail(email:any){
      return this.Http.get(this.urlApprobateur+'/getApprobateurByEmail/'+email)
    }
    getUser(id:number)
    {
      return this.Http.get<any []>(this.urlApprobateur+'/'+id);
    }
}
