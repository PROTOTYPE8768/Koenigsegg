const burger = document.querySelector(".header--menu--button");
const green = document.querySelector(".green-background");
burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    green.classList.toggle("open");
});