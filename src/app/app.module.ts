import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material';

import { MaterialDesignModule } from './material-design/material-design.module';
// import { BankByIfscModule } from './components/bank-by-ifsc/bank-by-ifsc.module';
import { BankBranchesService } from './services/bank-branches.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BankListComponent } from './components/bank-by-ifsc/bank-list/bank-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BankListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MaterialDesignModule
  ],
  providers: [
    BankBranchesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
