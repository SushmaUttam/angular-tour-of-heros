import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = { id: 1, name: 'SushmaU' };
  heroes : Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    //this.getHeroes();
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  // getHeroes(){
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => (this.heroes = heroes));
  // }

}
