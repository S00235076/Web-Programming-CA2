import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IOMDBResponse } from './omdbresponse';
import { OmdbApiService } from './services/omdb-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebProgrammingCA2';
  movieData:IOMDBResponse | undefined;
  errorMessage:any;

  constructor(private _omdbService:OmdbApiService){}
    getMovieDetails(movieName:string): boolean {
this._omdbService.getMovieData(movieName).subscribe(
  movieData => {
    this.movieData=movieData;
    console.log("Director name :" + this.movieData.Director);
  }
)
return false;
    }
  }

