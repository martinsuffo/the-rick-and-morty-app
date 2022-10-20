import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { InfoCardModel } from 'src/app/models';
import { CharacterService } from 'src/app/services/character/character.service';

@Component({
  selector: 'app-characters-home',
  templateUrl: './characters-home.component.html',
  styleUrls: ['./characters-home.component.scss']
})
export class CharactersHomeComponent {
  characters$: Observable<InfoCardModel[]>;

  constructor(
    characterService: CharacterService,
  ) {
    this.characters$ = characterService.characterCardList.pipe(
      map(characterList => characterList),
    );
  }
}
