import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MyHeroesComponent }      from './my-heroes/my-heroes.component';
import { MyHeroDetailComponent }  from './my-hero-detail/my-hero-detail.component';

const routes: Routes = [
 	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'heroes', component: MyHeroesComponent },
	{ path: 'detail/:id', component: MyHeroDetailComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
