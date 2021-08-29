import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-gerer-users',
  templateUrl: './gerer-users.component.html',
  styleUrls: ['./gerer-users.component.scss']
})
export class GererUsersComponent implements OnInit {

  users:any;
  constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {
    this.service.listUsers().subscribe(
      response=>{
        this.users=response;
      }
    );
  }
  deleteUser(myObj: any) {
    this.service.deleteUser(myObj).subscribe(response => {
      console.log(response);
      this.refreshListUsers();
    })
  }
  refreshListUsers() {
    this.service.listUsers().subscribe(
      response => {
        this.users = response;
      }
    );
  }
  updateUser(myObj:User) {
    this.router.navigate(['updateUser' + '/' + myObj['id']]);
  }
  AddUser() {
    this.router.navigate(['newUser']);
  }

}
