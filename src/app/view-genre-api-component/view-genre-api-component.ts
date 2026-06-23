import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { IGenre } from '../models/genre_interface';
import { ApiService } from '../services/api-service';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-view-genre-api-component',
  standalone: true,
  imports: [RouterLink, CommonModule, NgFor,AsyncPipe ],
  templateUrl: './view-genre-api-component.html',
  styleUrl: './view-genre-api-component.css',
})
export class ViewGenreApiComponent implements OnInit {
  //genres :IGenre[]= [];
  genres$ : Observable<IGenre[]> = of([]); //of- empty initialize
  constructor(private service : ApiService){
    console.log('constructor fired in view genre api.ts');
    
  }
  ngOnInit(): void {
    this.genres$ = this.service.getGenres();
  }

}


