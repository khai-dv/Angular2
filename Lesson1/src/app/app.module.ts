import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    BrowserModule, routing, FormsModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
