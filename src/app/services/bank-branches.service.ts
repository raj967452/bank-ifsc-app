import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, share } from 'rxjs/operators';

import { Bankbranch } from '../_interface/bankbranch';
import { City } from '../_interface/city';
import { Observable } from 'rxjs';

const config = {
  API_ENDPOINT: 'https://vast-shore-74260.herokuapp.com/banks'
};

@Injectable({
  providedIn: 'root'
})
export class BankBranchesService {
  private data;
  public observable;
  private cache$: Observable<Array<Bankbranch>>;
  private observableCache: { [key: string]: Observable<City> } = {};
  private cityCache: { [key: string]: City } = {};

  constructor( private http: HttpClient) { }

  public getBanksInfo(selctedCity: string) {
    return this.http.get<Bankbranch[]>(config.API_ENDPOINT + '?city=' + selctedCity, {observe: 'response'}).pipe(
      map(response => {
        this.observable = null;
        if (response.status === 400) {
          return 'Request failed.';
        } else if (response.status === 200) {
          this.data = response.body;
          return this.data;
        }
      }),
      share()
    );
  }
}
