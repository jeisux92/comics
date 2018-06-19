import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../core/services/comics.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  comic;
  constructor(private comicsService: ComicsService) { }


  ngOnInit() {
    this.comicsService.getHero(1).subscribe((x: any) => this.comic = x);
  }

}
