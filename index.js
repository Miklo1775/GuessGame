const head1 = document.querySelector(".head1");

const input = document.querySelector(".input");
let inputField = document.querySelector(".input-field");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");
const listContainer = document.querySelector(".list-container");
const listNumber = document.querySelectorAll(".list-number");
const btnReset = document.querySelector(".btn-rst");
const btnHint = document.querySelector(".btn-hint");
const list1 = document.getElementById("list1");
const list2 = document.getElementById("list2");
const list3 = document.getElementById("list3");
const list4 = document.getElementById("list4");
const list5 = document.getElementById("list5");

let guess1 = Math.trunc(Math.random() * 100 + 1);
console.log(guess1);
let answer = document.querySelector(".answer");

function guessNum(guess) {
  if (guess > guess1) {
    head1.textContent = "Go lower";
  } else if (guess < guess1) {
    head1.textContent = "Go higher";
  } // else {
  //   head1.textContent = "Correct!";
  // }
}
let counter = 0;
btn.addEventListener("click", function () {
  let guess = Number(inputField.value);
  if (guess < 1) {
    head1.textContent = "Please input a valid number.";
  } else if (guess > 100) {
    head1.textContent = "Num should be < 100";
  } else if (guess >= 1 && guess <= 100) {
    if (guess === guess1) {
      listNumber[counter].innerHTML = `${guess}`;
      counter = listNumber.length;
      head1.innerHTML = "You won. Reset to try again.";
      inputField = null;
    } else if (counter === listNumber.length) {
      head1.textContent = "Out of tries.";
    } else {
      guessNum(guess);
      listNumber[counter].innerHTML = `${guess}`;
      counter++;
    }
  } else if (guess !== "number") {
    head1.textContent = "Cheater";
    alert("Not valid");
  }
  // counter++;
});

btnHint.addEventListener("click", function () {
  head1.textContent = `Error ${guess1}: Try Again Later`;
});

// const numGuess = inputField.value;

//create a function in else if
//pass parameters of guess
// console.log(listNumber.length);
// console.log();
