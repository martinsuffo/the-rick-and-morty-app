import { Injectable } from "@angular/core";
import { BehaviorSubject, map, take, tap } from "rxjs";
import { CharacterListDTO, DataFieldModel, InfoCardDTO, InfoCardModel } from "src/app/models";
import { CharacterListModel } from "src/app/models/character-list/character-list.model";
import { ApiService } from "../api";

@Injectable({
    providedIn: 'root'
})
export class CharacterService {
    private charactersListBehavior: BehaviorSubject<CharacterListDTO> = new BehaviorSubject(new CharacterListModel());

    constructor(
        private apiService: ApiService
    ) {
        this.fetchCharacters();
    }

    get characterList() {
        return this.charactersListBehavior.asObservable().pipe(
            map(res => res!.results)
        );
    }

    get characterCardList() {
        return this.characterList.pipe(
            map(res => res.map(
                character => {
                    let dataFields: DataFieldModel[] = [
                        {id: 'species', text: character.species},
                        {id: 'gender', text: character.gender},
                        {id: 'status', text: character.status},
                    ];
                    
                    let characterCard: InfoCardDTO = {
                        title: character.name,
                        imageUrl: character.image,
                        // TODO redirectUrl: character.url,
                        dataFields
                    };

                    return new InfoCardModel(characterCard);
                }
            ))
        );
    }

    private fetchCharacters(): void {
        this.apiService.getRequest('character').pipe(
            tap({
                next: (res: CharacterListDTO) => this.charactersListBehavior.next(res),
                error: (error) => console.log(error)
            }),
            take(1)
        ).subscribe();
    }
}