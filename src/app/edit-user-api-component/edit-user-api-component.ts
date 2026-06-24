import { Component } from '@angular/core';
import { IUser } from '../models/user_interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user-service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../services/api-service';


@Component({
  selector: 'app-edit-user-api-component',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './edit-user-api-component.html',
  styleUrl: './edit-user-api-component.css',
})
export class EditUserApiComponent implements OnInit {
  user$:Observable<IUser> = of();
  user :IUser = {userId:0,username:'', password:'', phoneNo:'', emailId:'', roleId:0};
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

  constructor(private userSrc:ApiService,private activatedRoute : ActivatedRoute , private router:Router){

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.user$ = this.userSrc.getUserById(this.id);
    this.user$.subscribe((user)=>{
      this.user = user;
      if(this.user!=null){
        this.userForm.controls['userId'].setValue(this.user?.userId);
        this.userForm.controls['username'].setValue(this.user?.username);
        this.userForm.controls['password'].setValue(this.user?.password);
        this.userForm.controls['phoneNo'].setValue(this.user?.phoneNo);
        this.userForm.controls['emailId'].setValue(this.user.emailId);
        this.userForm.controls['roleId'].setValue(this.user?.roleId);
      }
    }

    );

    
  }

  editUser(){
    this.userSrc.editUser(this.id, this.userForm.value as IUser).subscribe(data=>console.log("post user", data), err=>console.log(err));

    //redirect to view Page
    this.router.navigate(['viewusersapi']);
  }
}
