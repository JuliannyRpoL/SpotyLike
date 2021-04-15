import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignInComponent,
    HomeComponent,
    FavoritesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
