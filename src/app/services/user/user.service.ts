import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlUsers = 'http://127.0.0.1:8443/UtilisateurSimple';
  user:any;
  
    constructor(private Http:HttpClient) {
   }
   listUsers() {
    return this.Http.get<any []>(this.urlUsers + '/list');
   }
  createUser(user:any) {
   
    return this.Http.post(this.urlUsers + '/add',user);}

    updateUser(myObj:any) {
      return this.Http.put(this.urlUsers + '/' + myObj['id'], myObj);
    }

    deleteUser(myObj:any) {
      return this.Http.delete(this.urlUsers + '/' + myObj['id'], myObj)
    }
    getUsers(id:any) {
      return this.Http.get<any []>(this.urlUsers + '/' + id)
    }
  
    getUserByEmail(email:any){
      return this.Http.get<any []>(this.urlUsers+'/getUserByEmail/'+email)
    }
    getUser(id:number)
    {
      return this.Http.get<any []>(this.urlUsers+'/'+id);
    }
}
