import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules').then(m => m.HomeModule) },
  { path: 'locations-home', loadChildren: () => import('./modules').then(m => m.LocationsHomeModule) },
  { path: 'characters-home', loadChildren: () => import('./modules').then(m => m.CharactersHomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
