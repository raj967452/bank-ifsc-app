import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { Bankbranch } from '../_interface/bankbranch';
import { Observable } from 'rxjs';

const config = {
  databaseURL: 'https://vast-shore-74260.herokuapp.com/banks'
};

@Injectable({
  providedIn: 'root'
})
export class BankBranchesService {

  constructor( private http: HttpClient) { }

  public getBankData(selctedCity: string): Observable<any> {
    return this.http.get(config.databaseURL + '?city=' + selctedCity);
  }
}
