var btn1 = document.querySelector("#btnTab1");
var btn2 = document.querySelector("#btnTab2");
var btn3 = document.querySelector("#btnTab3");
var tab = document.querySelector(".slide");
var border = document.querySelector(".border");
var questions = document.querySelectorAll(".question");
var answers = document.querySelectorAll(".answer");
var input = document.querySelector("#inputContact");
var btnContact = document.querySelector("#contact");
var error = document.querySelector(".error");
var iconError = document.querySelector("#iconError");

btn1.addEventListener("click", () => {
  tab.style.left = "-50vw";
  border.style.left = 0;
});
btn2.addEventListener("click", () => {
  tab.style.left = "-150vw";
  border.style.left = "11rem";
});
btn3.addEventListener("click", () => {
  tab.style.left = "-250vw";
  border.style.left = "22rem";
});

questions[0].addEventListener("click", () => {
  questions[0].classList.toggle("active");
  answers[0].classList.toggle("active");
});
questions[1].addEventListener("click", () => {
  questions[1].classList.toggle("active");
  answers[1].classList.toggle("active");
});
questions[2].addEventListener("click", () => {
  questions[2].classList.toggle("active");
  answers[2].classList.toggle("active");
});
questions[3].addEventListener("click", () => {
  questions[3].classList.toggle("active");
  answers[3].classList.toggle("active");
});

btnContact.addEventListener("click", () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = input.value;
  if (!emailRegex.test(email)) {
    error.style.display = "block";
    iconError.style.display = "block";
    input.style.border = "1px solid hsl(0, 94%, 66%)";
  } else {
    error.style.display = "none";
    iconError.style.display = "none";
    input.style.border = "1px solid hsl(229, 31%, 21%)";
  }
});
