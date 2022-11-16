"use strict";
exports.__esModule = true;
var dog_1 = require("./dog");
var person_1 = require("./person");
var borja = new person_1.Person('borja', 31);
var lassie = new dog_1.Dog('lassie', 10, true);
var milu = new dog_1.Dog('milu', 5, false);
borja.printAge(); // borja is 31 years old
lassie.printAge(); // lassie is 10 years old
milu.printAge(); // milu is 5 years old
borja.turnYear();
lassie.turnYear();
milu.turnYear();
borja.printAge(); // borja is 32 years old
lassie.printAge(); // lassie is 18 years old
milu.printAge(); // milu is 11 years old
