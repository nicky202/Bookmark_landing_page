var btn1 = document.querySelector("#btnTab1");
var btn2 = document.querySelector("#btnTab2");
var btn3 = document.querySelector("#btnTab3");
var buttons = document.querySelectorAll(".btn");
var tab = document.querySelector(".slide");
var border = document.querySelector(".border");
var questions = document.querySelectorAll(".question");
var answers = document.querySelectorAll(".answer");
var input = document.querySelector("#inputContact");
var btnContact = document.querySelector("#contact");
var error = document.querySelector(".error");
var iconError = document.querySelector("#iconError");
var close = document.querySelector("#close");
var menu = document.querySelector("#menu");
var menuActive = document.querySelector(".mobile-active");
var listMenu = document.querySelector(".listMenu");
var body = document.querySelector("body");
var socialMediaNav = document.querySelector(".socialMediaNav");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
  });
});

menu.addEventListener("click", function () {
  close.style.display = "block";
  menu.style.display = "none";
  menuActive.style.display = "block";
  listMenu.style.display = "block";
  body.style.overflow = "hidden";
  socialMediaNav.style.display = "flex";
});
close.addEventListener("click", function () {
  menu.style.display = "block";
  close.style.display = "none";
  menuActive.style.display = "none";
  listMenu.style.display = "none";
  body.style.overflow = "auto";
  socialMediaNav.style.display = "none";
});

btn1.addEventListener("click", () => {
  tab.style.left = "0vw";
  border.style.left = 0;
});
btn2.addEventListener("click", () => {
  tab.style.left = "-100vw";
  border.style.left = "11rem";
});
btn3.addEventListener("click", () => {
  tab.style.left = "-200vw";
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

// close.addEventListener('click',function(){

// })
