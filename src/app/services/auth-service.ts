import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { LoginRequestDto } from '../models/loginRequestDto';
import { Observable } from 'rxjs';
import { LoginResponseDto } from '../models/LoginResponseDto';

@Injectable({
    providedIn:'root'
})
export class AuthService {
    apiUrl:string = 'https://localhost:7283/api/Auth';
    constructor(private http:HttpClient){}


    //all the method for user 
    loginUser(loginRequestDto : LoginRequestDto) : Observable<LoginResponseDto>{
        return this.http.post<LoginResponseDto>(this.apiUrl+'/Login', loginRequestDto);
    }

    saveToken(loginResponseDto:LoginResponseDto){
        //get the payload from the token - save token 
        localStorage.setItem('token', loginResponseDto.token);
        //decode the token 
        const payloadBase64 = loginResponseDto.token.split('.')[1];
        const decodePayload = JSON.parse(atob(payloadBase64));



        console.log('token saved');
        console.log(decodePayload);
        console.log(decodePayload["role"]);

        //save the role in localstorage 
        localStorage.setItem('role', decodePayload["role"]);
        console.log(decodePayload['email']);
        console.log(decodePayload['name']);
        console.log(decodePayload['MyClaim']);

    } 
    getRole(){
        let role = localStorage.getItem('role');
        return role      
    }

    getToken():string | null{
        let token = localStorage.getItem('token');
        return token;
    }


}
