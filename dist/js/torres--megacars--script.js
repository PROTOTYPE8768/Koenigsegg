const burger = document.querySelector(".header--menu--button");
const green = document.querySelector(".green-background");
const scr = document.querySelector("body")
const burgerButtons = document.querySelectorAll(".burger-button")
burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    green.classList.toggle("open");
    scr.classList.toggle("open");
    burgerButtons[0].classList.toggle("open"); 
    burgerButtons[1].classList.toggle("open"); 
});




    