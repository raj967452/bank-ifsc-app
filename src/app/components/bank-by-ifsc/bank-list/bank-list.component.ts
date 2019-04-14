import {Component, OnInit, ViewChild, EventEmitter, Output, ElementRef} from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator, MatSelectChange} from '@angular/material';
import { BankBranchesService } from '../../../services/bank-branches.service';

import {Bankbranch} from '../../../_interface/bankbranch';

@Component({selector: 'app-bank-list', templateUrl: './bank-list.component.html', styleUrls: ['./bank-list.component.css']})
export class BankListComponent implements OnInit {
  public displayedColumns: string[] = [
    'ifscCode',
    'branch',
    'address',
    'city',
    'district',
    'state',
    'bankName'
  ];
  public selectedCity = 'Jaipur';
  public dataSource: MatTableDataSource < Bankbranch > ;
  public showProgress = false;
  public CITIES = [
    {id: 'Mumbai', name: 'Mumbai'},
    {id: 'Delhi', name: 'Delhi'},
    {id: 'Kolkata', name: 'Kolkata'},
    {id: 'Bangalore', name: 'Bangalore'},
    {id: 'Hyderabad', name: 'Hyderabad'},
    {id: 'Chennai', name: 'Chennai'},
    {id: 'Ahmedabad', name: 'Ahmedabad'},
    {id: 'Jaipur', name: 'Jaipur'},
    {id: 'Pune', name: 'Pune'}];
  @ViewChild(MatPaginator)paginator: MatPaginator;
  @ViewChild(MatSort)sort: MatSort;
  @ViewChild('filterfield') filterdata: ElementRef;
  @Output()selectionChange: EventEmitter<MatSelectChange>;
  constructor(private bankBranchesService: BankBranchesService) {}
  ngOnInit() {
    this.getBankData(this.selectedCity.toUpperCase());
  }
  onFilterData(filtervalue: string) {
    this.dataSource.filter = filtervalue.trim().toLocaleLowerCase();
  }
  onSelectCity(selectionChange) {
    this.getBankData(selectionChange.toUpperCase());
  }
  getBankData(selectCity) {
    this.showProgress = true;
    this.filterdata.nativeElement.value = '';
    this.bankBranchesService.getBanksInfo(selectCity)
      .subscribe((branches) => {
        this.showProgress = false;
        this.dataSource = new MatTableDataSource(branches);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }, (error) => {
      console.log('Error: ' + error);
    });
  }
}
