import { LocationDTO } from "./location.dto";

export class LocationModel implements LocationDTO {
    public id;
    public name;
    public type;
    public dimension;
    public residents;
    public url;
    public created;

    constructor (
        value: LocationDTO
    ) {
        this.id = value.id;
        this.name = value.name;
        this.type = value.type;
        this.dimension = value.dimension;
        this.residents = value.residents;
        this.url = value.url;
        this.created = value.created;
    }
}
