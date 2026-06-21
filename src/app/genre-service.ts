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
        let maxId = this.lstGenre.reduce((max, current) => current.genreId > max ? current.genreId : max,0);
        genre.genreId = ++maxId;

        this.lstGenre.push(genre);
    }

    editGenre(id:number, genre:IGenre){
        let existingGenre = this.lstGenre.find(g=>g.genreId==id);
        let index = this.lstGenre.findIndex(g=>g.genreId==id);
        console.log(`In service editGenre(): ${index} , ${existingGenre}`);
        if(existingGenre != null){
            this.lstGenre[index] = genre; //from the argument
            
        }
        else{
            console.log(`Genre with id ${id} not found`);
        }
        
    }

    deleteGenre(id:number){
        let existingGenre = this.lstGenre.find(g=>g.genreId == id);
        let indexToRemove = this.lstGenre.findIndex(g=>g.genreId == id);

        console.log(`in delete service ${indexToRemove}`);
        if(existingGenre != null){
            this.lstGenre.splice(indexToRemove,1); //to remove 
        }
        else{
            console.log(`Genre with Id : ${id} not found to delete`);
        }
    }

}
