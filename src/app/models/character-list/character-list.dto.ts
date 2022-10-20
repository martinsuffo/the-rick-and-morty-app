import { CharacterDTO } from "../character/character.dto";
import { listInfoDTO } from "../list-info";

export interface CharacterListDTO {
    info: listInfoDTO;
    results: CharacterDTO[];
}