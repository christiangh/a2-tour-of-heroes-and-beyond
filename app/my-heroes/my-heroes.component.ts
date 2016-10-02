import { Component, OnInit } from '@angular/core';

import { Hero } from "../shared/classes/hero";

import { HeroService } from '../shared/services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './app/my-heroes/my-heroes.component.html',
  styleUrls: ['./app/my-heroes/my-heroes.component.css'],
  providers: [HeroService]
})
export class MyHerosComponent implements OnInit{
	heroes: Hero[];
	selectedHero: Hero;

  	constructor(private heroService: HeroService) {}

	ngOnInit(): void {
		this.getHeroes();
	}

	onSelect(hero: Hero): void {
		console.log("On select hero", hero);
		this.selectedHero = hero;
	}

	getHeroes(): void {
	  	//this.heroService.getHeroes().then((heroes) => this.heroes = heroes);
		this.heroService.getHeroesSlowly().then((heroes) => this.heroes = heroes);
  	}
}