import { Injectable, Service } from '@angular/core';
import { IGenre } from './models/genre_interface';

@Injectable({
    providedIn: 'root' //singleton
})
export class GenreService {
    lstGenre : IGenre[] = [];
    constructor(){
        this.lstGenre=[
      {genreId: 1, genreCode: "ROM", genreDesc: "Romance"},
      {genreId: 2, genreCode: "HIST", genreDesc: "Historical"},
      {genreId: 3, genreCode: "AUTO", genreDesc: "Autobiography"},
      {genreId: 4, genreCode: "ADV", genreDesc: "Adventure"}
    ]
    }
    //returns the list of the genres
    getGenres() :IGenre[]{
        return this.lstGenre;
    }
    //add the genres to the list of genres.
    addGenre(genre:IGenre){
        this.lstGenre.push(genre);
    }
}
