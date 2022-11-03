import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { MovieDetails } from '../model/movie-details';
type movieData = Partial<MovieDetails>;

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetails$!: Observable<movieData>;

  constructor(private appService: AppService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const movieId: string | null = this.route.snapshot.paramMap.get('movieId');
    console.log({ movieId });

    if (movieId) {
      this.movieDetails$ = this.appService.getMovieDetails(movieId);
    }
  }
}
