import { Component, Input } from '@angular/core';

import { Hero } from '../shared/classes/hero';

@Component({
	selector: 'my-hero-detail',
	templateUrl: './app/my-hero-detail/my-hero-detail.component.html'
})
export class MyHeroDetailComponent {
	@Input() hero: Hero;

	constructor() {}
}