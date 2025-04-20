// Находим кнопку
const btn = document.querySelector("#btn-mobile-nav");
// Находим картинку и все остальное
const mobileBtnImg = document.querySelector("#mobile-nav-img");
const mobileNav = document.querySelector("#mobile-nav");
const header = document.querySelector("#header");

// Добавляем действие по клику
btn.addEventListener("click", (e) => {
    btn.classList.toggle("open");
    mobileNav.classList.toggle("open");
    header.classList.toggle("header-white-bg");
    document.body.classList.toggle("no-scroll");

    if (btn.classList.contains("open")) {
        mobileBtnImg.src = "./img/icons/nav-close-btn.svg";
    } else {
        mobileBtnImg.src = "./img/icons/nav.svg";
    }
});

// Действие по изменению ширины окна
window.addEventListener("resize", (e) => {
    if (window.innerWidth > 767 && mobileNav.classList.contains("open")) {
        btn.classList.toggle("open");
        mobileNav.classList.toggle("open");
        header.classList.toggle("header-white-bg");
        document.body.classList.toggle("no-scroll");
    }

    if (btn.classList.contains("open")) {
        mobileBtnImg.src = "./img/icons/nav-close-btn.svg";
    } else {
        mobileBtnImg.src = "./img/icons/nav.svg";
    }
});
