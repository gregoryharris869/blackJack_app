"use strict";

let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;

// console.log(sum);

if (sum <= 20) {
  console.log("Do you want another card?");
} else if (sum === 21) {
  console.log("You have black Jack!");
  hasBlackJack = true;
} else {
  console.log("Game over!");
}

// Cash Out
console.log(hasBlackJack);
