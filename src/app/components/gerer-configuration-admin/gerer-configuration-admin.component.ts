import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerer-configuration-admin',
  templateUrl: './gerer-configuration-admin.component.html',
  styleUrls: ['./gerer-configuration-admin.component.scss']
})
export class GererConfigurationAdminComponent implements OnInit {

  constructor(private router:Router,private httpClient:HttpClient) { }

  cis:any[]=[];
  contacts:any[]=[];
  ngOnInit(): void {
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/CI/list")
    .subscribe(
      response=>{
        this.cis=response;
        console.log(this.cis);
      }
    )
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/contact/list")
    .subscribe(
      response=>{
        this.contacts=response;
        console.log(this.contacts);
      }
    )
  };
  deleteCI(CI:any)
  {
    this.httpClient
    .delete("http://127.0.0.1:8443/CI/"+CI["id"])
    .subscribe(
      response=>{
        console.log("CI deleted successfully");
        this.refreshListCI();
      }
    )
  };
  refreshListCI()
  {
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/CI/list")
    .subscribe(
      response=>{
        this.cis=response;
        console.log(this.cis);
      }
    )
  };
  updateCI(CI:any)
  {
    this.router.navigate(['gererConfigurationAdmin/updateCI' + '/' + CI['id']]);
  }
  AddCI() {
    this.router.navigate(['gererConfigurationAdmin/newCI']);
  }
  updateContact(CI:any)
  {
    this.router.navigate(['gererConfigurationAdmin/updateContact' + '/' + CI['id']]);
  }
  AddContact() {
    this.router.navigate(['gererConfigurationAdmin/newContact']);
  }
  deleteContact(CI:any)
  {
    this.httpClient
    .delete("http://127.0.0.1:8443/contact/"+CI["id"])
    .subscribe(
      response=>{
        console.log("Contact delated successfully");
        this.refreshListContact();
      }
    )
  };
  refreshListContact()
  {
    this.httpClient
    .get<any[]>("http://127.0.0.1:8443/contact/list")
    .subscribe(
      response=>{
        this.contacts=response;
        console.log(this.contacts);
      }
    )
  };
}
