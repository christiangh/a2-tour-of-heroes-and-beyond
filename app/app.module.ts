import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

/* Imports for loading & configuring the in-memory web api */
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';

/** Modules **/
import { AppRoutingModule } from './app-routing.module';

/** Components **/
import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyHeroesComponent } from './my-heroes/my-heroes.component';
import { MyHeroDetailComponent } from './my-hero-detail/my-hero-detail.component';
import { HeroSearchComponent } from './my-hero-search/my-hero-search.component';

/** Services **/
import { HeroService } from './shared/services/hero.service';

/** Imports **/
import './shared/imports/rxjs-extensions';
	

@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
  	AppComponent,
    DashboardComponent,
    MyHeroesComponent,
  	MyHeroDetailComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }