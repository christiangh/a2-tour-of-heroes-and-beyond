import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

/** Modules **/
import { AppRoutingModule } from './app-routing.module';

/** Components **/
import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyHeroesComponent } from './my-heroes/my-heroes.component';
import { MyHeroDetailComponent } from './my-hero-detail/my-hero-detail.component';

/** Services **/
import { HeroService } from './shared/services/hero.service';
	

@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule,
    AppRoutingModule
  ],
  declarations: [
  	AppComponent,
    DashboardComponent
    MyHeroesComponent,
  	MyHeroDetailComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }