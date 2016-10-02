import { Component} from '@angular/core';

import { Hero } from "./shared/classes/hero";

import { HeroService } from './shared/services/hero.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent{
	title = 'Tour of Heroes';

  constructor() {}
}