import { CharacterDTO } from "./character.dto";

export class CharacterModel implements CharacterDTO {
    public id;
    public name;
    public status;
    public species;
    public type;
    public gender;
    public origin;
    public location;
    public image;
    public episode;
    public url;
    public created;

    constructor (
        value: CharacterDTO
    ) {
        this.id = value.id;
        this.name = value.name;
        this.status = value.status;
        this.species = value.species;
        this.type = value.type;
        this.gender = value.gender;
        this.origin = value.origin;
        this.location = value.location;
        this.image = value.image;
        this.episode = value.episode;
        this.url = value.url;
        this.created = value.created;
    }
}
