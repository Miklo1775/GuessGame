const head1 = document.querySelector(".head1");

const input = document.querySelector(".input");
const inputField = document.querySelector(".input-field");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");
const listContainer = document.querySelector(".list-container");
const listNumber = document.querySelector(".list-number");
const btnReset = document.querySelector(".btn-rst");
const btnHint = document.querySelector(".btn-hint");

let guess1 = Math.trunc(Math.random() * 100 + 1);
console.log(guess1);
let answer = document.querySelector(".answer");

function guessNum(guess) {
  if (guess > guess1) {
    head1.textContent = "Go lower";
  } else if (guess < guess1) {
    head1.textContent = "Go higher";
  } else {
    head1.textContent = "Correct!";
  }
}

btn.addEventListener("click", function () {
  const guess = Number(inputField.value);

  if (guess < 1) {
    head1.textContent = "Please input a valid number.";
  } else if (guess > 100) {
    head1.textContent = "Num should be < 100";
  } else if (guess >= 1 && guess <= 100) {
    guessNum(guess);
  } else if (guess !== "number") {
    head1.textContent = "Cheater";
    alert("Not valid");
  }
});

//create a function in else if
//pass parameters of guess
