import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CommonButtonComponent } from './components/atoms/common-button/common-button.component';
import { IconButtonComponent } from './components/atoms/icon-button/icon-button.component';
import { CommonInputComponent } from './components/atoms/common-input/common-input.component';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from './components/molecules/logo/logo.component';
import { LogInFormComponent } from './components/molecules/log-in-form/log-in-form.component';
import { OtherFormAccessComponent } from './components/molecules/other-form-access/other-form-access.component';
import { NavigationBarComponent } from './components/organisms/navigation-bar/navigation-bar.component';
import { MenuComponent } from './components/organisms/menu/menu.component';
import { SongsListComponent } from './components/organisms/songs-list/songs-list.component';
import { IconInputComponent } from './components/atoms/icon-input/icon-input.component';
import { SignInButtonComponent } from './components/molecules/sign-in-button/sign-in-button.component';
import { LogInOrganismComponent } from './components/organisms/log-in-org/log-in-org.component';
import { SignInFormComponent } from './components/molecules/sign-in-form/sign-in-form.component';
import { LogInButtonComponent } from './components/molecules/log-in-button/log-in-button.component';
import { SignInOrganismComponent } from './components/organisms/sign-in-org/sign-in-org.component';
import { ProfileComponent } from './components/molecules/profile/profile.component';
import { AppContentComponent } from './templates/app-content/app-content.component';
import { NavItemsComponent } from './components/molecules/nav-items/nav-items.component';
import { SongsGroupComponent } from './components/molecules/songs-group/songs-group.component';
import { SongComponent } from './components/atoms/song/song.component';
import { FavoritesSongsComponent } from './components/organisms/favorites-songs/favorites-songs.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageNotFoundOrgComponent } from './components/organisms/page-not-found-org/page-not-found-org.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignInComponent,
    HomeComponent,
    AppContentComponent,
    FavoritesComponent,
    CommonButtonComponent,
    IconButtonComponent,
    CommonInputComponent,
    LogoComponent,
    LogInFormComponent,
    LogInOrganismComponent,
    OtherFormAccessComponent,
    NavigationBarComponent,
    MenuComponent,
    SongsListComponent,
    IconInputComponent,
    SignInButtonComponent,
    SignInFormComponent,
    SignInOrganismComponent,
    LogInButtonComponent,
    ProfileComponent,
    NavItemsComponent,
    SongsGroupComponent,
    SongComponent,
    FavoritesSongsComponent,
    PageNotFoundComponent,
    PageNotFoundOrgComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
