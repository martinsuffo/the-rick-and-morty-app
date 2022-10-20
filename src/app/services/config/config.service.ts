import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor() {
  }

  get baseUrl() {
    return environment.baseUrl;
  }
}
