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




document.querySelectorAll('.tab--button').forEach((tab, index) => {
    tab.addEventListener('click', function() {
        
        document.querySelectorAll('.tab--button').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        
        const underline = document.querySelector('.underline');
        underline.style.transform = `translateX(${13 * index}rem)`; 
        
        
        const newTitle = tab.getAttribute('data-title');
        const titleElement = document.querySelector('.secondpage-tab-title .tab-title');
        titleElement.style.opacity = 0; 
        setTimeout(() => {
            titleElement.textContent = newTitle;
            titleElement.style.opacity = 1; 
        }, 300);
        const newTitlee = tab.getAttribute('datatitle');
        const titleElementt = document.querySelector('.secondpage-tab-title .tabtitle');
        titleElementt.style.opacity = 0; 
        setTimeout(() => {
            titleElementt.textContent = newTitlee;
            titleElementt.style.opacity = 1; 
        }, 300);
        
       
        const newBg = tab.getAttribute('data-bg');
        document.querySelector('.escala--secondpage').style.backgroundImage = `url(${newBg})`;
        newBg.style.opacity = 0; 
        setTimeout(() => {
            newBg.textContent = newBg;
            newBg.style.opacity = 1; 
        }, 300);
    });
});


