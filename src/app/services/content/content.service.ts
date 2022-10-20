import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import homeOptions from 'src/app/data/home-options/home-options.json'

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private locationsListBehavior: BehaviorSubject<any>;
  
  constructor() {
    this.locationsListBehavior = new BehaviorSubject(homeOptions.data);
  }

  get menuOptions() {
    return this.locationsListBehavior.asObservable();
  }

  set menuOptionsData(data: any) {
    this.locationsListBehavior.next(data);
  }

  get locationList() {
    return this.locationsListBehavior.asObservable();
  }
}
