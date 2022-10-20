import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InfoCardModel } from 'src/app/models/info-card/info-card.model';

@Component({
  standalone: true,
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class InfoCardComponent {
  @Input() data?: InfoCardModel;
  @Input() size: String = 'sm'

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  public click(url: string) {
    this.router.navigate([`../${url}`], {relativeTo: this.route});
  }
}
