import { Component, Input } from '@angular/core';
import { InfoCardModel } from 'src/app/models/info-card/info-card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  @Input() list: InfoCardModel[] = [];

  constructor() { }
}
