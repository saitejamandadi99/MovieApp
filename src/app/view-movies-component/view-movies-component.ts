import { Component } from '@angular/core';
import { IMovie } from '../models/movie_interface';
import { RouterLink } from '@angular/router';
import { MovieService } from '../movie-service';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-view-movies-component',
  imports: [RouterLink, DatePipe, CurrencyPipe],
  templateUrl: './view-movies-component.html',
  styleUrl: './view-movies-component.css',
})
export class ViewMoviesComponent implements OnInit {
  lstMovie : IMovie[]= [];
  constructor(private movieSrc : MovieService){} //dependency injection
  ngOnInit():void{
    this.lstMovie = this.movieSrc.getMovies();
  }
}
