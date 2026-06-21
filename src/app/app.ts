import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Home } from './home/home';
import { AddGenre } from './add-genre/add-genre';
import { ViewGenre } from './view-genre/view-genre';
import { EditGenre } from './edit-genre/edit-genre';
import { Errorpage } from './errorpage/errorpage';
import { DeleteGenreComponent } from './delete-genre-component/delete-genre-component';
import { AddMovieComponent } from './add-movie-component/add-movie-component';
import { EditMovieComponent } from './edit-movie-component/edit-movie-component';
import { ViewMoviesComponent } from './view-movies-component/view-movies-component';
import { DeleteMovieComponent } from './delete-movie-component/delete-movie-component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Home, AddGenre, EditGenre, ViewGenre,Errorpage, DeleteGenreComponent , AddMovieComponent, EditMovieComponent, ViewMoviesComponent, DeleteMovieComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MovieApp');
}
