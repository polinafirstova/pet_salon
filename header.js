const button_menu = document.getElementsByClassName("menu")[0];
const button_close = document.getElementsByClassName("close")[0];
const link = document.getElementsByClassName("navigation_list_2")[0];
const home = document.querySelector("a.home");

const menu = document.getElementsByClassName("for_phone")[0];

let lastScroll = 0;
const defaultOffset = 100;
const header = document.getElementsByClassName("header")[0];

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScroll && !header.classList.contains("hide") && window.scrollY > defaultOffset) {
        header.classList.add("hide");
    } else if (window.scrollY < lastScroll && header.classList.contains("hide")) {
        header.classList.remove("hide");
    }

    lastScroll = window.scrollY;
});


button_menu.addEventListener("click", openMenu);
button_close.addEventListener("click", closeMenu);

function openMenu() {
    menu.classList.remove("hide");
    menu.style.opacity = "1";
    menu.style.height = "100%";
    menu.style.background = "rgba(72, 72, 72, 0.8)";
    button_menu.style.display = "none";
    button_close.style.display = "block";
    link.style.display = "flex";
}

function closeMenu() {
    menu.classList.add("hide");
    menu.style.height = "0";
    menu.style.opacity = "0";
    button_close.style.display = "none";
    button_menu.style.display = "block";
    link.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === menu) {
        menu.classList.add("hide");
        menu.style.height = "0";
        menu.style.opacity = "0";
        button_close.style.display = "none";
        button_menu.style.display = "block";
        link.style.display = "none";
    }
}
