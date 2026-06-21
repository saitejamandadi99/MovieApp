import { Injectable, Service } from '@angular/core';
import { IMovie } from './models/movie_interface';
import { reportUnhandledError } from 'rxjs/internal/util/reportUnhandledError';
import { ExpressionStatement } from '@angular/compiler';
@Injectable({
    providedIn:'root' //singleton
})
export class MovieService {
    lstMovies : IMovie[]=[];
    constructor(){
        this.lstMovies= [
            {movieId:1, movieName:'Troy', movieEarnings:2000, movieRating:7.5, genreId:2, releaseDate:new Date('2002-05-22')},
            {movieId:2, movieName:'Spiderman', movieEarnings:1500, movieRating:8.5, genreId:3, releaseDate:new Date('2006-10-02')},
            {movieId:3, movieName:'Spiderman2', movieEarnings:2000, movieRating:9.5, genreId:3, releaseDate:new Date('2008-05-21')},
            {movieId:4, movieName:'Avengers', movieEarnings:20000, movieRating:8, genreId:4, releaseDate:new Date('2010-8-22')},
            {movieId:5, movieName:'Bahubali', movieEarnings:2000, movieRating:9, genreId:3, releaseDate:new Date('2012-08-02')}
        ]
    }

    //returns the list of movies 

    getMovies() : IMovie[]{
        return this.lstMovies;
    }

    //add teh movies to the list
    addMovie(movie:IMovie){
        let maxMovieId = this.lstMovies.reduce((max,current)=>current.movieId>max?current.movieId:max,0);
        movie.movieId = ++maxMovieId;
        movie.releaseDate = new Date(movie.releaseDate);
        this.lstMovies.push(movie);
    }

    //edit the movie lst
    editMovie(id:number, movie:IMovie){
        let existingMovie = this.lstMovies.find(m=>m.movieId==id);
        let movieIndex = this.lstMovies.findIndex(m=>m.movieId==id);
        if(existingMovie != null){
            movie.movieId = id;
            this.lstMovies[movieIndex] = movie;
        }
        else{
            console.log(`Cannot find the movie with id: ${id}`);
        }
    }

    //delete the movie from the list

    deleteMovie(id:number){
        let existingMovie = this.lstMovies.find(m=>m.movieId == id);
        let indexToRemove = this.lstMovies.findIndex(m=>m.movieId == id);
        if(existingMovie != null){
            this.lstMovies.splice(indexToRemove,1);
        }
        else{
            console.log(`cannot find the movie with id : ${id}`);
        }
    }
}
