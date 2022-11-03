import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Movie } from './model/movie';
import { MovieDetails } from './model/movie-details';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private top250Url: string =
    'https://imdb-api.com/en/API/Top250Movies/k_xp32cx97';

  private movieDetailsUrl: string =
    'https://imdb-api.com/en/API/Title/k_xp32cx97/';

  constructor(private http: HttpClient) {}

  getTop250Movies(): Observable<Movie[]> {
    return this.http.get<{ items: Movie[] }>(this.top250Url).pipe(
      map((data) => data.items),
      tap((data) => console.log(data)) // continue here
    );
  }

  getMovieDetails(movieId: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(this.movieDetailsUrl + movieId).pipe(
      map((data) => data),
      tap((data) => console.log(data))
    );
  }
}
