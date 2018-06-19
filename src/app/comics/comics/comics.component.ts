import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../core/services/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private comicsService: ComicsService) { }
  comics = [];
  ngOnInit() {
    this.comicsService.getHeroes().subscribe((x: any) => {
      this.comics = x;
    });
  }

}
