import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { IGenre } from '../models/genre_interface';

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


    editGenre(id:number, genre:IGenre):Observable<any>{

        return this.http.put(`https://localhost:7283/api/Genre/${id}`, genre);
    }

    addGenre(genre:IGenre):Observable<any>{
        genre.genreId = 0;
        return this.http.post('https://localhost:7283/api/Genre',genre);
    }
}
