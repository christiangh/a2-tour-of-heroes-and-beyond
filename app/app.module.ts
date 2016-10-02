import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'

import { AppComponent }	from './app.component';

import { MyHerosComponent } from './my-heroes/my-heroes.component';
import { MyHeroDetailComponent } from './my-hero-detail/my-hero-detail.component';

import { HeroService } from './shared/services/hero.service';
	

@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule
  ],
  declarations: [
  	AppComponent,
    MyHerosComponent,
  	MyHeroDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }