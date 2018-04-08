import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpRecordComponent } from './exp-record/exp-record.component';
import { SectionComponent } from './section/section.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomecvComponent } from './homecv/homecv.component';
import { SectionItemComponent } from './section-item/section-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpRecordComponent,
    SectionComponent,
    NavbarComponent,
    HomecvComponent,
    SectionItemComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
