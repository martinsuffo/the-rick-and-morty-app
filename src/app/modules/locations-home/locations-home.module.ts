import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CardListModule } from 'src/app/components';
import { CharacterService } from 'src/app/services/character/character.service';
import { LocationsHomeComponent } from './locations-home.component';

const routes: Routes = [{ path: '', component: LocationsHomeComponent, pathMatch: 'full' }]

@NgModule({
  declarations: [
    LocationsHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    CardListModule
  ],
  providers: [CharacterService]
})
export class LocationsHomeModule { }
