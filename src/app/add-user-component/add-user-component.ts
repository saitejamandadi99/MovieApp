import { Component } from '@angular/core';
import { IUser } from '../models/user_interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user-service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-user-component',
   standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-user-component.html',
  styleUrl: './add-user-component.css',
})
export class AddUserComponent {
  user:IUser={userId:0, username:'', password:'',phoneNo:'', emailId:'', roleId:0 };
  userForm:FormGroup  =new FormGroup({
    userId: new FormControl(),
    username: new FormControl('',[Validators.required, Validators.minLength(3)]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    phoneNo: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
    emailId: new FormControl('',[Validators.required]),
    roleId: new FormControl('',[Validators.required]),
  });

  get userId():FormControl{
    return this.userForm.controls['userId'] as FormControl
  }
  get username():FormControl{
    return this.userForm.controls['username'] as FormControl
  }
  get password():FormControl{
    return this.userForm.controls['password'] as FormControl
  }
  get phoneNo():FormControl{
    return this.userForm.controls['phoneNo'] as FormControl
  }
  get emailId():FormControl{
    return this.userForm.controls['emailId'] as FormControl
  }
  get roleId():FormControl{
    return this.userForm.controls['roleId'] as FormControl
  }

  constructor(private userSrc:UserService, private router:Router){

  }

  addUser(){
    console.log(this.userForm.value);
    this.userSrc.addUser(this.userForm.value as IUser);

    //redirect to view Page
    this.router.navigate(['viewusers']);
  }
}
