import { Injectable } from "@angular/core";
import { BehaviorSubject, map, take, tap } from "rxjs";
import { DataFieldModel, InfoCardDTO, InfoCardModel } from "src/app/models";
import { LocationListModel, LocationListDTO } from "src/app/models/location-list";
import { ApiService } from "../api";

@Injectable({
    providedIn: 'root'
})
export class LocationService {
    private locationsListBehavior: BehaviorSubject<LocationListDTO> = new BehaviorSubject(new LocationListModel());

    constructor(
        private apiService: ApiService
    ) {
        this.fetchCharacters();
    }

    get locationsList() {
        return this.locationsListBehavior.asObservable().pipe(
            map(res => res!.results)
        );
    }

    get locationCardList() {
        return this.locationsList.pipe(
            map(res => res.map(
                location => {
                    let dataFields: DataFieldModel[] = [
                        {id: 'type', text: location.type},
                        {id: 'dimesion', text: location.dimension},
                        {id: 'residents', subtitle:"Cantidad de residentes", text: `${location.residents.length}`},
                    ];
                    
                    let characterCard: InfoCardDTO = {
                        title: location.name,
                        imageUrl: "https://t4.ftcdn.net/jpg/04/70/29/97/240_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg",
                        // TODO redirectUrl: character.url,
                        dataFields
                    };

                    return new InfoCardModel(characterCard);
                }
            ))
        );
    }

    private fetchCharacters(): void {
        this.apiService.getRequest('location').pipe(
            tap({
                next: (res: LocationListDTO) => this.locationsListBehavior.next(res),
                error: (error) => console.log(error)
            }),
            take(1)
        ).subscribe();
    }
}