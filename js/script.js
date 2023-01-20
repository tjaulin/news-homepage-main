// Declarations
const menu = document.querySelector(".navbar-list");
const btnMenu = document.querySelector(".navbar-hamburger");
const imgBtnMenu = document.querySelector("#logo-hamburger");
const sectionMainNews = document.querySelector(".section-main-news-content")
const sectionExtra = document.querySelector(".section-extra-content")
const footer = document.querySelector(".attribution");

// Function
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active-menu');

    if (menu.classList.contains("active-menu")) {
        imgBtnMenu.src = "../assets/images/icon-menu-close.svg";
        sectionMainNews.style.opacity = 0.5;
        sectionExtra.style.opacity = 0.5;
        footer.style.opacity = 0.5;
        imgBtnMenu.style.position = "fixed"
        imgBtnMenu.style.right = "15px"
    } else {
        imgBtnMenu.src = "../assets/images/icon-menu.svg";
        sectionMainNews.style.opacity = 1;
        sectionExtra.style.opacity = 1;
        footer.style.opacity = 1;
        imgBtnMenu.style.position = "absolute"
        imgBtnMenu.style.right = "0"
    }
})