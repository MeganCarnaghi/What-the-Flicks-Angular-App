import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';
import { DescriptionComponent } from './description/description.component';
import { PeopleDescriptionComponent } from './people-description/people-description.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'watchlist', component: WatchlistPageComponent },
  { path: 'description/:id', component: DescriptionComponent },
  { path: 'people-description/:id', component: PeopleDescriptionComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
