import { Component } from '@angular/core';
import { IUser } from '../models/user_interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user-service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { Observable, of } from 'rxjs';
import { ApiService } from '../services/api-service';


@Component({
  selector: 'app-add-users-api-component',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-users-api-component.html',
  styleUrl: './add-users-api-component.css',
})
export class AddUsersApiComponent {
  user$: Observable<IUser> = of();
  uservalue : any; 
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

  constructor(private userSrc:ApiService, private router:Router){

  }

  addUser(){
    this.user$ = this.userSrc.addUser(this.userForm.value as IUser);
    this.uservalue = this.user$.subscribe(data=>console.log(data), err=>console.log(err));

    //redirect to view Page
    this.router.navigate(['viewusersapi']);
  }
}
