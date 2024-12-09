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






document.querySelectorAll('.tab--button').forEach((tab, index) => {
    tab.addEventListener('click', function () {
        
        document.querySelectorAll('.tab--button').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        
        const underline = document.querySelector('.underline');
        const screenWidth = window.innerWidth;

        if (screenWidth <= 390) {
            underline.style.transform = `translateX(${8 * index}rem)`; 
        }
        
        else {
            underline.style.transform = `translateX(${13 * index}rem)`; 
        }

        
        const newTitle = tab.getAttribute('data-title');
        const titleElement = document.querySelector('.secondpage-tab-title .tab-title');
        titleElement.style.opacity = 0;
        setTimeout(() => {
            titleElement.textContent = newTitle;
            titleElement.style.opacity = 1;
        }, 300);

        
        const newBg = tab.getAttribute('data-bg');
        document.querySelector('.escala--secondpage').style.backgroundImage = `url(${newBg})`;
    });
});



