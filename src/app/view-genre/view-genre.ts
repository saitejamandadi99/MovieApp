import { Component } from '@angular/core';
import { IGenre } from '../models/genre_interface';
import { RouterLink } from '@angular/router';
import { GenreService } from '../genre-service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-view-genre',
  imports: [RouterLink ],
  templateUrl: './view-genre.html',
  styleUrl: './view-genre.css',
})
export class ViewGenre {
  lstGenre:IGenre[]=[];
  constructor(private genreSrc:GenreService){ // for dependency injection 
  }

  ngOnInit() : void{
    //get a list from server and initialize
    this.lstGenre = this.genreSrc.getGenres();
  }
}
