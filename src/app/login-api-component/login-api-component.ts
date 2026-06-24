import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { LoginResponseDto } from '../models/LoginResponseDto';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-api-component',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login-api-component.html',
  styleUrl: './login-api-component.css',
})
export class LoginApiComponent {
  loginResponseDto$ : Observable<LoginResponseDto> = of();
  loginResponseDtoValue :any;
  loginForm : FormGroup = new FormGroup({
    username : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required]),
  })

  constructor(private service : AuthService, private router : Router){}

  loginUser(){
     this.loginResponseDto$ = this.service.loginUser(this.loginForm.value);

     this.loginResponseDto$.subscribe(data=>console.log(data), err=>console.log(err));

     this.loginResponseDto$.subscribe(data=>{
      this.loginResponseDtoValue = data;
      this.service.saveToken(this.loginResponseDtoValue);
      this.router.navigate(['home']);
     }, err=>console.log(err));
     
     
  }

  get username():FormControl{
    return this.loginForm.controls['username'] as FormControl;
  }

  
  get password():FormControl{
    return this.loginForm.controls['password'] as FormControl;
  }
}
