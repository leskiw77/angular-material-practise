import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { SongComponent } from './components/main-content/song/song.component';
import { NoContentComponent } from './components/main-content/no-content/no-content.component';

const routes: Routes = [
  {path: '', component: NoContentComponent},
  {path: 'song/:id', component: SongComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor( private router: Router ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}
