import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersHomeComponent } from './characters-home.component';
import { RouterModule, Routes } from '@angular/router';
import { CardListModule } from 'src/app/components';
import { CharacterService } from 'src/app/services/character/character.service';

const routes: Routes = [{ path: '', component: CharactersHomeComponent, pathMatch: 'full' }]

@NgModule({
  declarations: [
    CharactersHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    CardListModule
  ],
  providers: [CharacterService]
})
export class CharactersHomeModule { }
