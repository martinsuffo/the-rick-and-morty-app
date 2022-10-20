import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardListComponent } from 'src/app/components/card-list/card-list.component';
import { InfoCardComponent } from '../info-card/info-card.component';

@NgModule({
  declarations: [
    CardListComponent
  ],
  exports: [
    CardListComponent
  ],
  imports: [
    CommonModule,

    InfoCardComponent
  ]
})
export class CardListModule { }
