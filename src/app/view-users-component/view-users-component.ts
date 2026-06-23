import { NgIf } from '@angular/common';
import { ImplicitReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService } from '../user-service';
import { IUser } from '../models/user_interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-users-component',
  imports: [NgIf, RouterLink],
  templateUrl: './view-users-component.html',
  styleUrl: './view-users-component.css',
})
export class ViewUsersComponent implements OnInit {
  lstUsers : IUser[] = [];
  constructor(private userSrc : UserService){} //dependecy injection
  ngOnInit(): void {
      this.lstUsers = this.userSrc.getUsers();
  }
}
