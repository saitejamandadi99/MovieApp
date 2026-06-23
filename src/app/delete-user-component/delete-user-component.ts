import { Component } from '@angular/core';
import { IUser } from '../models/user_interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user-service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-edit-user-component',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './delete-user-component.html',
  styleUrl: './delete-user-component.css',
})
export class DeleteUserComponent implements OnInit {
  user:IUser |  undefined ={userId:0, username:'', password:'',phoneNo:'', emailId:'', roleId:0 };
  id:number=0;
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

  constructor(private userSrc:UserService,private activatedRoute : ActivatedRoute , private router:Router){

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.user = this.userSrc.getUsers().find(u=>u.userId == this.id);
    if(this.user!=null){
        this.userForm.controls['userId'].setValue(this.user?.userId);
        this.userForm.controls['username'].setValue(this.user?.username);
        this.userForm.controls['password'].setValue(this.user?.password);
        this.userForm.controls['phoneNo'].setValue(this.user?.phoneNo);
        this.userForm.controls['emailId'].setValue(this.user.emailId);
        this.userForm.controls['roleId'].setValue(this.user?.roleId);
      }
  }

  deleteUser(){
    this.userSrc.deleteUser(this.id);

    //redirect to view Page
    this.router.navigate(['viewusers']);
  }
}
