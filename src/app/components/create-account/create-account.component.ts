import { Component } from '@angular/core';
import  {User}  from './../../models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  user:User=new User();
  successMessage:string="";
  selectedId!:number;
   usersList:User[]=[];
    constructor(private activatedRoute:ActivatedRoute){
        this.selectedId=Number(this.activatedRoute.snapshot.paramMap.get('id'));
        console.log(this.selectedId);
    }
    onSave(){
      if(this.user){
        console.log(this.user);
        this.usersList.push(this.user);
        localStorage.setItem('user',JSON.stringify(this.usersList));
        this.successMessage="Account Created Sucessfully";
      }
    
    }

}
