import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatTableModule } from '@angular/material';

import { MaterialDesignModule } from './material-design/material-design.module';

import { BankBranchesService } from './services/bank-branches.service';
import { RequestCacheService } from './services/request-cache.service';
import { CachingInterceptorService } from './services/caching-interceptor.service';

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
    BankBranchesService,
    RequestCacheService,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
