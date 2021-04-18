import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './Hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private _url : string = "http://localhost:8080/api/heroes";

  constructor(private messagesService: MessageService, private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    // const heroes = of(HEROES);
    this.messagesService.add(`HeroService: Fetch Hero`);
    // return heroes;
    return this.http.get<Hero[]>(this._url);
  }

  getHero(id: number): Observable<Hero>{
    this.messagesService.add(`HeroService: Fetched with id= ${id}`);
    //return of(HEROES.find(hero => hero.id === id) as Hero);
    return this.http.get<Hero>(`${this._url}/${id}`);
  }


}
