import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './Hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messagesService.add(`HeroService: Fetch Hero`);
    return heroes;
  }

  getHero(id: number): Observable<Hero>{
    this.messagesService.add(`HeroService: Fetched with id= ${id}`);
    return of(HEROES.find(hero => hero.id === id) as Hero);
  }


}
