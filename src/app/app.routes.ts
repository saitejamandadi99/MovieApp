import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AddGenre } from './add-genre/add-genre';
import { EditGenre } from './edit-genre/edit-genre';
import { ViewGenre } from './view-genre/view-genre';
import { Errorpage } from './errorpage/errorpage';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'home',component:Home},
    {path:'viewgenre',component:ViewGenre},
    {path:'addgenre',component:AddGenre},
    {path:'editgenre',component:EditGenre},
    {path:'**',component:Errorpage}
];
