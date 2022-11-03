import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies$!: Observable<Movie[]>;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.movies$ = this.appService.getTop250Movies();
  }
}
