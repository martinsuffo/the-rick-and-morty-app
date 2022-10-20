import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  options$: Observable<any>;

  constructor(
    contentService: ContentService
  ) {
    this.options$ = contentService.menuOptions;
  }
}
