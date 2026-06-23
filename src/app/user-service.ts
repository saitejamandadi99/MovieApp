import { Injectable, Service } from '@angular/core';
import { IUser } from './models/user_interface';


@Injectable({
    providedIn:'root'
})
export class UserService {
    lstUsers : IUser[] = [];
    constructor(){
        this.lstUsers = [
            {userId:1,username:'saiteja', password:'1122',phoneNo:'9999999999', emailId:'saiteja@gmail.com', roleId:1},
            {userId:2,username:'arjun', password:'1122',phoneNo:'949994999', emailId:'arjun@gmail.com', roleId:2},
            {userId:3,username:'vivek', password:'123456',phoneNo:'9993998889', emailId:'vivek@gmail.com', roleId:2},
        ]
    }

    //list of users
    getUsers():IUser[]{
        return this.lstUsers;
    }

    addUser(user:IUser){
        let maxIndex = this.lstUsers.reduce((max,current)=>current.userId > max ? current.userId:max,0) + 1 
        user.userId = maxIndex;
        this.lstUsers.push(user);
    }

    editUser(id:number, user:IUser){
        let existingUser = this.lstUsers.find(u=>u.userId == id);
        let index = this.lstUsers.findIndex(u=>u.userId == id);
        if(existingUser != null){
            user.userId = id;
            this.lstUsers[index] = user; //updating the user details
        }
        else{
            console.log(`User not found with the Id : ${id}`);
            
        }
    }

    deleteUser(id:number){
        let existingUser = this.lstUsers.find(u=>u.userId == id);
        let index = this.lstUsers.findIndex(u=>u.userId == id);
        if(existingUser != null){
            this.lstUsers.splice(index,1);
        }
        else{
            console.log(`User not found with the Id: ${id}`);
        }
        
    }
}
