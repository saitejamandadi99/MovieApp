import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Home } from './home/home';
import { AddGenre } from './add-genre/add-genre';
import { ViewGenre } from './view-genre/view-genre';
import { EditGenre } from './edit-genre/edit-genre';
import { Errorpage } from './errorpage/errorpage';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Home, AddGenre, EditGenre, ViewGenre,Errorpage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MovieApp');
}
