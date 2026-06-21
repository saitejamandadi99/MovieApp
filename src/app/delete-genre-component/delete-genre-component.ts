import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { IGenre } from '../models/genre_interface';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreService } from '../genre-service';

@Component({
  selector: 'app-delete-genre-component',
  imports: [ReactiveFormsModule, NgIf, ],
  templateUrl: './delete-genre-component.html',
  styleUrl: './delete-genre-component.css',
})
export class DeleteGenreComponent implements OnInit {
  genre:IGenre | undefined={genreId:0,genreCode:'', genreDesc:''}
  id:number=0;

  //reactive forms
  genreForm : FormGroup = new FormGroup({
    genreId : new FormControl(),
    genreCode : new FormControl('',[Validators.required]),
    genreDesc: new FormControl('',[Validators.required, Validators.minLength(5)])
  });

  constructor(private activatedRoute: ActivatedRoute, private service : GenreService, private router: Router ){

  }

  ngOnInit(): void {
       this.id = this.activatedRoute.snapshot.params['id'];
      //check if any genre exists with the id
      this.genre = this.service.getGenres().find(g=>g.genreId == this.id);
      console.log(`id : ${this.id}`);
      console.log(this.genre);


      let index = this.service.getGenres().findIndex(g=>this.genre?.genreId == g.genreId);
      console.log(`index : ${index}`);

      if(this.genre!=null){
        this.genreForm.controls['genreId'].setValue(this.genre?.genreId);
        this.genreForm.controls['genreCode'].setValue(this.genre?.genreCode);
        this.genreForm.controls['genreDesc'].setValue(this.genre?.genreDesc);
      }
  }


  deleteGenre(){
   this.service.deleteGenre(this.id)
    this.router.navigate(['/viewgenre']);
  }

  get genreId() : FormControl{
    return this.genreForm.controls['genreId'] as FormControl
  }

  get genreCode() : FormControl{
    return this.genreForm.controls['genreCode'] as FormControl
  }

  get genreDesc() : FormControl{
    return this.genreForm.controls['genreDesc'] as FormControl
  }
}
