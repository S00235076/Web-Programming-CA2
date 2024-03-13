import { Component } from '@angular/core';
import { OmdbApiService } from '../../services/omdb-api.service';
import { IOMDBResponse } from '../../omdbresponse';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-searchtitle',
  standalone: true,
  imports: [],
  templateUrl: './searchtitle.component.html',
  styleUrl: './searchtitle.component.css'
})
export class SearchtitleComponent {

  constructor(private _omdbService:OmdbApiService){
    
  }
  getMovieDetails(movieName:string): boolean {
    this._omdbService.getMovieData(movieName).subscribe(
      movieData => {
        //this.movieData=movieData;
        //console.log("Director name :" + this.movieData.Director);
      }
    )
    return false;
        }
      }

