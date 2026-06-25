import { Component } from '@angular/core';
import { IGenre } from '../models/genre_interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api-service';
import { NgIf } from '@angular/common';
import { ComponentCanDeactivate } from '../models/component_Deactivate';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-genre-api-component',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-genre-api-component.html',
  styleUrl: './add-genre-api-component.css',
})
export class AddGenreApiComponent implements ComponentCanDeactivate {
  genre:IGenre={genreId:0,genreCode:'', genreDesc:''};
  genreForm : FormGroup = new FormGroup({
    genreId : new FormControl(),
    genreCode : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z\d]{5}')]),
    genreDesc: new FormControl('',[Validators.required, Validators.minLength(5)])
  });

  constructor(private activatedRoute: ActivatedRoute,private service : ApiService ,private router:Router){}

  //can this component be deactivated? send an alert
  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
      if(confirm('Do you wish to go away from this page ? all contents will be lost.'))
        return true;
      return false;
  }
  addGenre(){
    this.service.addGenre(this.genreForm.value as IGenre).subscribe(data=>console.log("post genre", data), err=>console.log(err));
    
    alert("Added the genre");
    this.router.navigate(['/viewgenresapi']);
  }
 }
