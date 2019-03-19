// JavaScript File
let who = ['The dog', 'My granma', 'His turtle', 'My bird'];
let what = ['eat', 'pissed', 'crushed', 'broked'];
let when = ['before the class', 'right in time', 'when I finished', 'during my lunch', 'while I was praying'];

var a1 = who[Math.floor(Math.random() * who.length)];
var a2 = what[Math.floor(Math.random() * what.length)];
var a3 = when[Math.floor(Math.random() * when.length)];

let desculpas = a1 + ' ' +  a2 + ' ' + a3;

let excusePelement = document.getElementById("excuse");

excusePelement.innerHTML = desculpas;







