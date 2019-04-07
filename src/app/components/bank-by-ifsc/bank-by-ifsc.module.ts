import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../../material-design/material-design.module';

import { BankListComponent } from './bank-list/bank-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  declarations: [BankListComponent]
})
export class BankByIfscModule { }
