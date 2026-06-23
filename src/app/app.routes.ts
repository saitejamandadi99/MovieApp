import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AddGenre } from './add-genre/add-genre';
import { EditGenre } from './edit-genre/edit-genre';
import { ViewGenre } from './view-genre/view-genre';
import { Errorpage } from './errorpage/errorpage';
import { DeleteGenreComponent } from './delete-genre-component/delete-genre-component';
import { ViewMoviesComponent } from './view-movies-component/view-movies-component';
import { AddMovieComponent } from './add-movie-component/add-movie-component';
import { EditMovieComponent } from './edit-movie-component/edit-movie-component';
import { DeleteMovieComponent } from './delete-movie-component/delete-movie-component';
import { ViewUsersComponent } from './view-users-component/view-users-component';
import { AddUserComponent } from './add-user-component/add-user-component';
import { EditUserComponent } from './edit-user-component/edit-user-component';
import { DeleteUserComponent } from './delete-user-component/delete-user-component';
import { ViewGenreApiComponent } from './view-genre-api-component/view-genre-api-component';
import { EditGenreApiComponent } from './edit-genre-api-component/edit-genre-api-component';
import { DeleteGenreApiComponent } from './delete-genre-api-component/delete-genre-api-component';
import { AddGenreApiComponent } from './add-genre-api-component/add-genre-api-component';
export const routes: Routes = [
    {path:'',component:Home},
    {path:'home',component:Home},
    {path:'viewgenre',component:ViewGenre},
    {path:'addgenre',component:AddGenre},
    {path:'editgenre/:id',component:EditGenre},
    {path:'deletegenre/:id', component:DeleteGenreComponent},
    {path:'viewmovies',component:ViewMoviesComponent},
    {path:'addmovie',component:AddMovieComponent},
    {path:'editmovie/:id',component:EditMovieComponent},
    {path:'deletemovie/:id', component:DeleteMovieComponent},
    //users
    {path:'viewusers',component:ViewUsersComponent},
    {path:'adduser',component:AddUserComponent},
    {path:'edituser/:id',component:EditUserComponent},
    {path:'deleteuser/:id',component:DeleteUserComponent},

    {path:'viewgenresapi', component: ViewGenreApiComponent},
    {path:'addgenresapi', component: AddGenreApiComponent},
    {path:'editgenreapi/:id', component: EditGenreApiComponent},
    {path:'deletegenreapi/:id', component: DeleteGenreApiComponent},

    {path:'**',component:Errorpage}
];
