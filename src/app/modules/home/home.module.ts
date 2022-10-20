import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingRoutingModule } from './home-routing.module';
import { CardListModule } from 'src/app/components';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingRoutingModule,
    CardListModule
  ]
})
export class HomeModule { }
