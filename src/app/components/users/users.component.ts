import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User| any;

       
  constructor(private router:Router){
    this.getUsers();
  }



  getUsers(){
    this.users=JSON.parse(localStorage.getItem('users') as any);
  }

  deleteUser(index:number){
    this.users.splice(index,1);
    localStorage.setItem('users',JSON.stringify(this.users));
    this.getUsers();
  }

  navigateTo(userId:number){
       this.router.navigate(['create-account',userId]);
  }

}
