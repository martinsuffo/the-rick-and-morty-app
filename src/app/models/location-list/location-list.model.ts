import { listInfoDTO } from "../list-info";
import { LocationDTO } from "../location/location.dto";
import { LocationListDTO } from "./location-list.dto";

export class LocationListModel implements LocationListDTO {
    public info: listInfoDTO;
    public results: LocationDTO[];
    
    constructor(
        value?: LocationListDTO,
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
