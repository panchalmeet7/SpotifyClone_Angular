import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public isSearchVissible: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  constructor() {}
}
