import { Component } from '@angular/core';
import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  selector: 'people-list',
  template: `
    <!-- this is the new syntax for ng-repeat -->
    <ul>
        <li *ngFor="let person of people">
        <a href="#" (click)="selectPerson(person)">
            {{person.name}}
        </a>
        </li>
    </ul>

    <person-details [person]="selectedPerson"></person-details>
  `
})
export class PeopleListComponent {
  people: Person[] = [];
  selectedPerson: Person;

  constructor(private _peopleService : PeopleService){
    this.people = _peopleService.getAll();
  }

selectPerson(person: Person){
    this.selectedPerson = person;
  }
}