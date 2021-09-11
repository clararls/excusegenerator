/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var who = ["the dog ", "my father ", "my girlfriend ", "my cat "];
  var it = "it ";
  var what = ["scratched ", "took away ", "stole ", "broked "];
  var when = [
    "before the class",
    "during the dinner",
    "when I was in the shower",
    "taking the bus"
  ];
  var ex1 = Math.floor(Math.random() * who.length);
  var ex2 = Math.floor(Math.random() * what.length);
  var ex3 = Math.floor(Math.random() * when.length);

  document.querySelector("#theexcuse").innerHTML =
    who[ex1] + what[ex2] + it + when[ex3];

  console.log("Hello Rigo from the console!");
};
