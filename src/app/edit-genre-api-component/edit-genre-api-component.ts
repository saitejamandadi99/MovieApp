import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api-service';
import { IGenre } from '../models/genre_interface';

@Component({
  selector: 'app-edit-genre-api-component',
  standalone:true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './edit-genre-api-component.html',
  styleUrl: './edit-genre-api-component.css',
})
export class EditGenreApiComponent {
  
  genre :IGenre | undefined = {genreId:0,genreCode:'', genreDesc:''}
  id:number =0;

  //reactive form 
  genreForm : FormGroup = new FormGroup({
    genreId : new FormControl(),
    genreCode : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z\d]{5}')]),
    genreDesc: new FormControl('',[Validators.required, Validators.minLength(5)])
  });

  constructor(private activatedRoute: ActivatedRoute, private service : ApiService, private router: Router ){}

  ngOnInit(): void {
      //get the id from the route
      this.id = this.activatedRoute.snapshot.params['id'];
      this.service.getGenreById(this.id).subscribe({next: (genre) => {

        this.genre = genre;

        if(this.genre!=null){
        this.genreForm.controls['genreId'].setValue(this.genre?.genreId);
        this.genreForm.controls['genreCode'].setValue(this.genre?.genreCode);
        this.genreForm.controls['genreDesc'].setValue(this.genre?.genreDesc);
      }
      },
      error: (err) => {console.log(err);}
    });
  }

  editGenre(){
    //onsubmit if the form - call the service method edit genre()
    this.service.editGenre(this.id, this.genreForm.value as IGenre).subscribe({
      next:()=>{
        alert("genre updated successfully")
      this.router.navigate(['/viewgenresapi']);
      }
    })
    console.log(`Updated values : ${this.genreForm.value}`);
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
