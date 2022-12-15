const head1 = document.querySelector(".head1");

const input = document.querySelector(".input");
const inputField = document.querySelector(".input-field");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");
const listContainer = document.querySelector(".list-container");
const listNumber = document.querySelector(".list-number");
const btnReset = document.querySelector(".btn-rst");
const btnHint = document.querySelector(".btn-hint");

let guess = Math.trunc(Math.random() * 100 + 1);

let answer = document.querySelector(".answer");

btn.addEventListener("click", function () {
  console.log(inputField.value);
});
