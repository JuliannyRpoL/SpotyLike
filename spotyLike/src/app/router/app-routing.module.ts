import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from '../pages/favorites/favorites.component';
import { HomeComponent } from '../pages/home/home.component';
import { LogInComponent } from '../pages/log-in/log-in.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { SignInComponent } from '../pages/sign-in/sign-in.component';
import { AuthGuard } from '../services/authGuard.service';
import { HOME, FAVORITES, LOGIN, SIGNIN } from './routes';

const routes: Routes = [
  {
    path: HOME,
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { path: FAVORITES, component: FavoritesComponent, canActivate: [AuthGuard] },
  { path: LOGIN, component: LogInComponent },
  { path: SIGNIN, component: SignInComponent },
  { path: '**', canActivate: [AuthGuard], component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
