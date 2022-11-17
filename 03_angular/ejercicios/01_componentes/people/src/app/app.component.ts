import { Component } from '@angular/core';
import { Person } from 'src/models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'people';

  public get enabledCount(): number {
    return this.people.filter((p) => p.enabled).length;
  }

  public get disabledCount(): number {
    return this.people.filter((p) => !p.enabled).length;
  }

  public selectedPerson: Person | null = null;

  public onPersonSelected(person: Person): void {
    this.selectedPerson = person;
  }

  public onClose(): void {
    this.selectedPerson = null;
  }

  public onEnabledChanged(): void {
    // this.selectedPerson = {
    //   ...this.selectedPerson!,
    //   enabled: !this.selectedPerson!.enabled,
    // };

    this.selectedPerson!.enabled = !this.selectedPerson!.enabled;
    let selectedPersonIndex = this.people.findIndex(
      (p) => p.id == this.selectedPerson?.id
    );
    this.people.splice(selectedPersonIndex, 1, this.selectedPerson!);
    this.people = [...this.people];
  }

  public people = [
    new Person(
      1,
      'Violet',
      'Joseph',
      32,
      'vJoseph@example.com',
      'vJoseph',
      false
    ),
    new Person(
      2,
      'Allen',
      'Joseph',
      42,
      'aJoseph@example.com',
      'aJoseph',
      true
    ),
    new Person(
      3,
      'Russell',
      'Guerrero',
      28,
      'rGuerrero@example.com',
      'rGuerrero',
      false
    ),
    new Person(
      4,
      'Lizzie',
      'Sanchez',
      18,
      'lSanchez@example.com',
      'lSanchez',
      true
    ),
    new Person(5, 'Jane', 'Ortiz', 54, 'jOrtiz@example.com', 'jOrtiz', true),
    new Person(
      6,
      'Sadie',
      'Erickson',
      35,
      'sErickson@example.com',
      'sErickson',
      true
    ),
    new Person(
      7,
      'Sally',
      'Bailey',
      42,
      'sBailey@example.com',
      'sBailey',
      true
    ),
    new Person(
      8,
      'Douglas',
      'Norton',
      60,
      'dNorton@example.com',
      'dNorton',
      false
    ),
    new Person(
      9,
      'Glenn',
      'Manning',
      47,
      'gManning@example.com',
      'gManning',
      true
    ),
  ];
}
