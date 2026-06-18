import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormGroupDirective, Validator, Validators } from '@angular/forms';
import { IGenre } from '../models/genre_interface';
import { GenreService } from '../genre-service';
import { Router } from '@angular/router';
import { ViewGenre } from '../view-genre/view-genre';

@Component({
  selector: 'app-add-genre',
  imports: [ReactiveFormsModule, NgIf, ViewGenre],
  templateUrl: './add-genre.html',
  styleUrl: './add-genre.css',
})
export class AddGenre {
  genre : IGenre={genreId:0,genreCode:'', genreDesc:''};
  genreForm : FormGroup = new FormGroup({
    genreId:new FormControl(),
    genreCode: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z\d]{5}')]),
    genreDesc: new FormControl('', [Validators.minLength(4)])
  });

  

  get genreCode():FormControl{
    return this.genreForm.controls['genreCode'] as FormControl
  }

  
  get genreDesc():FormControl{
    return this.genreForm.controls['genreDesc'] as FormControl
  }

  constructor(private genreSrc:GenreService, private router:Router){
  }

  addGenre(){
    console.log(this.genreForm.value);
    //adding to the list of genres in the genre service
    this.genreSrc.addGenre(this.genreForm.value);
    //redirect to the view page

    this.router.navigate(['viewgenre']);
    
  }

}
