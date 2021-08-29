import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin/admin.model';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-gerer-admins',
  templateUrl: './gerer-admins.component.html',
  styleUrls: ['./gerer-admins.component.scss']
})
export class GererAdminsComponent implements OnInit {

  admins:any;
  constructor(private service:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.service.listUsers().subscribe(
      response=>{
        this.admins=response;
      }
    );
  }
  deleteAdmin(myObj: any) {
    this.service.deleteUser(myObj).subscribe(response => {
      console.log(response);
      this.refreshListAdmins();
    })
  }
  refreshListAdmins() {
    this.service.listUsers().subscribe(
      response => {
        this.admins = response;
      }
    );
  }
  updateAdmin(myObj:Admin) {
    this.router.navigate(['updateAdmin' + '/' + myObj['id']]);
  }
  AddAdmin() {
    this.router.navigate(['newAdmin']);
  }

}
