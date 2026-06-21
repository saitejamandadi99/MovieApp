import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ViewMoviesComponent } from '../view-movies-component/view-movies-component';
import { IMovie } from '../models/movie_interface';
import { MovieService } from '../movie-service';
import { Router } from '@angular/router';
import { GenreService } from '../genre-service';

@Component({
  selector: 'app-add-movie-component',
  imports: [ReactiveFormsModule, NgIf,ViewMoviesComponent ],
  templateUrl: './add-movie-component.html',
  styleUrl: './add-movie-component.css',
})
export class AddMovieComponent {
  movie:IMovie={movieId:0, movieName:'', movieEarnings:0,movieRating:0, genreId:0, releaseDate:new Date() };
  movieForm:FormGroup  =new FormGroup({
    movieId: new FormControl(),
    movieName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    movieEarnings: new FormControl(0,[Validators.required]),
    movieRating: new FormControl(0,[Validators.required,Validators.min(0),Validators.max(10)]),
    releaseDate: new FormControl('',[Validators.required]),
    genreId: new FormControl('',[Validators.required]),
  });

  get movieId():FormControl{
    return this.movieForm.controls['movieId'] as FormControl
  }
  get movieName():FormControl{
    return this.movieForm.controls['movieName'] as FormControl
  }
  get movieEarnings():FormControl{
    return this.movieForm.controls['movieEarnings'] as FormControl
  }
  get movieRating():FormControl{
    return this.movieForm.controls['movieRating'] as FormControl
  }
  get releaseDate():FormControl{
    return this.movieForm.controls['releaseDate'] as FormControl
  }
  get genreId():FormControl{
    return this.movieForm.controls['genreId'] as FormControl
  }

  constructor(private movieSrc : MovieService, private router:Router){

  }

  addMovie(){
    console.log(this.movieForm.value);
    this.movieSrc.addMovie(this.movieForm.value as IMovie);

    //redirect to view Page
    this.router.navigate(['viewmovies']);
  }

}
