import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IGenre } from '../models/genre_interface';
import { ApiService } from '../services/api-service';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-delete-genre-api-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgIf],
  templateUrl: './delete-genre-api-component.html',
  styleUrl: './delete-genre-api-component.css',
})
export class DeleteGenreApiComponent implements OnInit {

  genre: IGenre | undefined;
  id: number = 0;

  genreForm: FormGroup = new FormGroup({
    genreId: new FormControl(),
    genreCode: new FormControl('', [Validators.required]),
    genreDesc: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private activatedRoute: ActivatedRoute,private service: ApiService,private router: Router) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];

    this.service.getGenreById(this.id).subscribe((genre) => {

        this.genre = genre;

        if(this.genre!=null){
        this.genreForm.controls['genreId'].setValue(this.genre?.genreId);
        this.genreForm.controls['genreCode'].setValue(this.genre?.genreCode);
        this.genreForm.controls['genreDesc'].setValue(this.genre?.genreDesc);
        }
      },
    );
  }

  deleteGenre() {

    this.service.deleteGerne(this.id).subscribe(() => {
      alert('Genre deleted successfully');
      this.router.navigate(['/viewgenresapi']);},
    );

  }

  get genreId(): FormControl {
    return this.genreForm.controls['genreId'] as FormControl;
  }

  get genreCode(): FormControl {
    return this.genreForm.controls['genreCode'] as FormControl;
  }

  get genreDesc(): FormControl {
    return this.genreForm.controls['genreDesc'] as FormControl;
  }
}