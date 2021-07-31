'use strict';

var _classes = require('./modules/classes.js');

var newChar = new _classes.Wizard('Tali', 8);
var newChar2 = new _classes.Archer('Kuroi', 9);
var newChar3 = new _classes.Warrior("Raja", 7);
var newChar4 = new _classes.Monk("Binx", 1);

document.body.innerHTML = newChar.view();

document.body.innerHTML += newChar2.view();
document.body.innerHTML += newChar3.view();
document.body.innerHTML += newChar4.view();