import { listInfoDTO } from "../list-info";
import { LocationDTO } from "../location/location.dto";

export interface LocationListDTO {
    info: listInfoDTO;
    results: LocationDTO[];
}