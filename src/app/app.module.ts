import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { NavigatorMenuComponent } from './navigator-menu/navigator-menu.component';
import { Ps5HomeComponent } from './ps5-home/ps5-home.component';
import { FooterComponent } from './footer/footer.component';
import { ConsoleComponent } from './console/console.component';

import { GamesComponent } from './games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    NavigatorMenuComponent,
    Ps5HomeComponent,
    FooterComponent,
    ConsoleComponent,
    
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
