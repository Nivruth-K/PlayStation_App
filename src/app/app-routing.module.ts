import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigatorComponent } from './navigator/navigator.component';
import { Ps5HomeComponent } from './ps5-home/ps5-home.component';
import { ConsoleComponent } from './console/console.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
  { path: '', redirectTo: 'ps5home', pathMatch: 'full' },
  {
    path: 'console',
    component: ConsoleComponent,
  },
  {
    path: 'games',
    component: GamesComponent,
  },
  {
    path: 'ps5home',
    component: Ps5HomeComponent,
  },
  {
    path: 'nav',
    component: NavigatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
