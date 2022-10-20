import { Component, OnInit } from '@angular/core';
import { map, Observable, pipe, tap } from 'rxjs';
import { InfoCardModel } from 'src/app/models/info-card/info-card.model';
import { LocationService } from 'src/app/services';

@Component({
  selector: 'app-locations-home',
  templateUrl: './locations-home.component.html',
  styleUrls: ['./locations-home.component.scss']
})
export class LocationsHomeComponent {
  characters$: Observable<InfoCardModel[]>;

  constructor(
    LocationService: LocationService,
  ) {
    this.characters$ = LocationService.locationCardList.pipe(
      map(characterList => characterList),
    );
  }
}
