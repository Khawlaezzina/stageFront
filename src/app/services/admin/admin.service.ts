import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  urlAdmins = 'http://127.0.0.1:8443/administrateur';
  admin:any;
  constructor(private Http:HttpClient) { }
  listUsers() {
    return this.Http.get<any[]>(this.urlAdmins + '/list');
   }
  createUser(admin:any) {
  
    return this.Http.post(this.urlAdmins + '/add', admin);}

    updateUser(myObj:any) {
      return this.Http.put(this.urlAdmins + '/' + myObj['id'], myObj);
    }

    deleteUser(myObj:any) {
      return this.Http.delete(this.urlAdmins + '/' + myObj['id'], myObj)
    }
    getUsers(id:any) {
      return this.Http.get<any[]>(this.urlAdmins + '/' + id)
    }
  
    getUserByEmail(email:any){
      return this.Http.get<any[]>(this.urlAdmins+'/getAdminByEmail/'+email)
    }
}
