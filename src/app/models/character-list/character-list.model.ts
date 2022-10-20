import { CharacterDTO } from "../character/character.dto";
import { listInfoDTO } from "../list-info";
import { CharacterListDTO } from "./character-list.dto";

export class CharacterListModel implements CharacterListDTO {
    public info: listInfoDTO;
    public results: CharacterDTO[];
    
    constructor(
        value?: CharacterListDTO,
    ) {
        if (value) {
            this.info = value.info;
            this.results = value.results;
        } else {
            this.info = {count: 0, pages: 0};
            this.results = [];
        }
    }
}
