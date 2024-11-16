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




let lastScroll = 0;
const header = document.querySelectorAll('.builtin--header')[1];


header.style.transition = "transform 0.3s ease";
header.style.transform = "translateY(-100%)";

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        
        header.style.transform = "translateY(-100%)";
    } else if (currentScroll > lastScroll) {
        
        header.style.transform = "translateY(-100%)";
    } else {
        
        header.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;
});
 


const burgerr = document.querySelectorAll(".builtin--header")[1].querySelector(".header--menu--button");
const burgerButtonss = document.querySelectorAll(".builtin--header")[1].querySelectorAll(".burger-button");
const container = document.querySelectorAll(".builtin--header")[1].querySelector(".header--menu--button_container");
const logo = document.querySelectorAll(".builtin--header")[1].querySelector(".header--logo");
burgerr.addEventListener("click", () => {
    burgerr.classList.toggle("open");
    green.classList.toggle("open");
    scr.classList.toggle("open");
    logo.classList.toggle("open");
    container.classList.toggle("open");
    burgerButtonss[0].classList.toggle("open"); 
    burgerButtonss[1].classList.toggle("open"); 
});