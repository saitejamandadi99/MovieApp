import { Component } from '@angular/core';
import { IMovie } from '../models/movie_interface';
import { RouterLink } from '@angular/router';
import { MovieService } from '../movie-service';
import { OnInit } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/user_interface';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-view-users-api-component',
  imports: [RouterLink, DatePipe, CurrencyPipe, AsyncPipe],
  templateUrl: './view-users-api-component.html',
  styleUrl: './view-users-api-component.css',
})
export class ViewUsersApiComponent implements OnInit {
  lstUsers$ : Observable<IUser[]> = of([]);
  constructor(private service : ApiService){}
  ngOnInit(): void {
     this.lstUsers$ =  this.service.getUsers();
     this.lstUsers$.subscribe({
    next: (data) => {
      console.log('Users from API:', data);
    },
    error: (err) => {
      console.log('Error:', err);
    }
  });
  }

}
