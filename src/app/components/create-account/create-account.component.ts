import { Component } from '@angular/core';
import { User } from './../../models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent {
  user: User = new User();
  successMessage: string = '';
  selectedId!: number;
  usersList: User[] = [];
  savedUsers: User[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.selectedId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getSavedUsers();
  }

  getSavedUsers() {
    const savedUsersStr = localStorage.getItem('users');
    if (savedUsersStr) {
      this.savedUsers = JSON.parse(savedUsersStr);
      this.usersList=[...this.savedUsers]
      if(this.selectedId!=0){
        const filteredUser=this.savedUsers.filter((user:User)=> user.id===this.selectedId);
        const {firstName,lastName,email,password,mobileNumber}=filteredUser[0];
        this.user.firstName=firstName;
        this.user.lastName=lastName;
        this.user.email=email;
        this.user.password=password;
        this.user.mobileNumber=mobileNumber;
      }
     
    }
  }

  onSave() {
    this.user.id = this.generateId();
    this.usersList.push(this.user);
    localStorage.setItem('users', JSON.stringify(this.usersList));
    this.user = new User();
    this.successMessage = 'Account Created Successfully';
  }

  generateId() {
    return Math.round(Math.random() * 10000);
  }
}
