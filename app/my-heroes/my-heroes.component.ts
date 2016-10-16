import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from "../shared/classes/hero";

import { HeroService } from '../shared/services/hero.service';

@Component({
	moduleId: module.id,
 	selector: 'my-heroes',
  	templateUrl: './my-heroes.component.html',
  	styleUrls: ['./my-heroes.component.css']
})
export class MyHeroesComponent implements OnInit{
	heroes: Hero[];
	selectedHero: Hero;

  	constructor(
  		private router: Router,
  		private heroService: HeroService
  	) {}

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

  	gotoDetail(): void {
    	this.router.navigate(['/detail', this.selectedHero.id]);
  	}
}