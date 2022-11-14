import { Dog } from './dog';
import { Person } from './person';

let borja = new Person('borja', 31);
let lassie = new Dog('lassie', 10, true);
let milu = new Dog('milu', 5, false);

borja.printAge();   // borja is 31 years old
lassie.printAge();  // lassie is 10 years old
milu.printAge();    // milu is 5 years old

borja.turnYear();
lassie.turnYear();
milu.turnYear();

borja.printAge();   // borja is 32 years old
lassie.printAge();  // lassie is 18 years old
milu.printAge();    // milu is 11 years old