import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { PeopleService } from './people.service';
import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent, 
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
