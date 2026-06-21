import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie-service';
import { IMovie } from '../models/movie_interface';

@Component({
  selector: 'app-delete-movie-component',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './delete-movie-component.html',
  styleUrl: './delete-movie-component.css',
})
export class DeleteMovieComponent {
  movie:IMovie | undefined={movieId:0, movieName:'', movieEarnings:0,movieRating:0, genreId:0, releaseDate:new Date() };
  id:number=0;
  movieForm:FormGroup  =new FormGroup({
    movieId: new FormControl(),
    movieName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    movieEarnings: new FormControl(0,[Validators.required]),
    movieRating: new FormControl(0,[Validators.required,Validators.min(0),Validators.max(10)]),
    releaseDate: new FormControl('',[Validators.required]),
    genreId: new FormControl('',[Validators.required]),
  });

  constructor(private activatedRoute: ActivatedRoute, private movieSrc: MovieService, private router:Router){}
  ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.params['id'];
      this.movie = this.movieSrc.getMovies().find(m=>m.movieId==this.id);

      let index =  this.movieSrc.getMovies().findIndex(m=>m.movieId==this.id);
      //if movie exists initalize the form values with movie details
      if(this.movie!=null){
        this.movieForm.controls['movieId'].setValue(this.movie?.movieId);
        this.movieForm.controls['movieName'].setValue(this.movie?.movieName);
        this.movieForm.controls['movieEarnings'].setValue(this.movie?.movieEarnings);
        this.movieForm.controls['movieRating'].setValue(this.movie?.movieRating);
        this.movieForm.controls['releaseDate'].setValue(this.movie.releaseDate.toISOString().split('T')[0]); //to convert to the date format
        this.movieForm.controls['genreId'].setValue(this.movie?.genreId);
        //let index = this.service.getGenres().findIndex(g=>this.genre)
      }

  }


  deleteMovie(){
    this.movieSrc.deleteMovie(this.id);
    this.router.navigate(['/viewmovies'])
  }

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
}
