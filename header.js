let lastScroll = 0;
const defaultOffset = 100;
const header = document.getElementsByClassName("header")[0];

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScroll && !header.classList.contains("hide") && window.scrollY > defaultOffset) {
        header.classList.add("hide");
        console.log('down');
    } else if (window.scrollY < lastScroll && header.classList.contains("hide")) {
        header.classList.remove("hide");
        console.log('up');
    }

    lastScroll = window.scrollY;
});

const button_menu = document.getElementsByClassName("menu")[0];
const button_close = document.getElementsByClassName("close")[0];
const link = document.getElementsByClassName("navigation_list_2")[0];
const home = document.querySelector("a.home");

const menu = document.getElementsByClassName("for_phone")[0];

button_menu.addEventListener("click", openMenu);
button_close.addEventListener("click", closeMenu);

function openMenu() {
    menu.style.opacity = "1";
    button_menu.style.display = "none";
    button_close.style.display = "block";
    link.style.display = "flex";
    home.style.display = "none";
}

function closeMenu() {
    menu.style.opacity = "0";
    button_close.style.display = "none";
    button_menu.style.display = "block";
    link.style.display = "none";
    home.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == menu) {
        menu.style.opacity = "0";
        button_close.style.display = "none";
        button_menu.style.display = "block";
        link.style.display = "none";
        home.style.display = "block";
    }
}



