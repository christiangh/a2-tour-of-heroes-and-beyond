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
		this.selectedHero = hero;
	}

	getHeroes(): void {
	  	this.heroService.getHeroes().then((heroes) => this.heroes = heroes);
		//this.heroService.getHeroesSlowly().then((heroes) => this.heroes = heroes);
  	}

  	gotoDetail(): void {
    	this.router.navigate(['/detail', this.selectedHero.id]);
  	}

  	add(name: string): void {
		name = name.trim();

	 	if (!name) { return; }

 		this.heroService.create(name)
			.then(hero => {
				this.heroes.push(hero);
    			this.selectedHero = null;
    		});
	}

	delete(hero: Hero): void {
		this.heroService
	    	.delete(hero.id)
	      	.then(() => {
				this.heroes = this.heroes.filter(h => h !== hero);
	        	if (this.selectedHero === hero) { this.selectedHero = null; }
	      	});
	}
}