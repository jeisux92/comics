import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private http: HttpClient) { }

  getHero(id) {
    return this.http.get(`assets/JSON/${id}.json`);
  }
  getHeroes() {
    return this.http.get('assets/JSON/comics.json');
  }
}
