import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { IGenre } from '../models/genre_interface';
import { IUser } from '../models/user_interface';

@Injectable({
    providedIn:'root'
})
export class ApiService {
    //use the dependency injection for http client 
    constructor(private http: HttpClient){}

    //get all genres from the database 
    getGenres(): Observable<IGenre[]>{
        return this.http.get<IGenre[]>('https://localhost:7283/api/Genre');
    }


    deleteGerne(id:number):Observable<any>{
        return this.http.delete(`https://localhost:7283/api/Genre/${id}`);

    }

    getGenreById(id:number):Observable<IGenre>{
        return this.http.get<IGenre>(`https://localhost:7283/api/Genre/${id}`)
    }


    editGenre(id:number, genre:IGenre):Observable<IGenre>{

        return this.http.put<IGenre>(`https://localhost:7283/api/Genre/${id}`, genre);
    }

    addGenre(genre:IGenre):Observable<IGenre>{
        genre.genreId = 0;
        return this.http.post<IGenre>('https://localhost:7283/api/Genre',genre);
    }


    //user services 
    addUser(user:IUser):Observable<IUser>{
        user.userId = 0;
        return this.http.post<IUser>('https://localhost:7283/api/UserMovie',user);
    }

    getUsers(): Observable<IUser[]>{
        return this.http.get<IUser[]>('https://localhost:7283/api/UserMovie');
    }

    editUser(id:number, user:IUser):Observable<IUser>{
        return this.http.put<IUser>(`https://localhost:7283/api/UserMovie/${id}`, user)
    }

    deleteUser(id:number):Observable<IUser>{
        return this.http.delete<IUser>(`https://localhost:7283/api/UserMovie/${id}`);
    }

    getUserById(id:number):Observable<IUser>{
        return this.http.get<IUser>(`https://localhost:7283/api/UserMovie/${id}`)

    }
}
