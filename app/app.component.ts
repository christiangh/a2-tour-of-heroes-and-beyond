import { Component, OnInit } from '@angular/core';

import { Hero } from "./shared/classes/hero";

import { HeroService } from './shared/services/hero.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit{
	title = 'Tour of Heroes';
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