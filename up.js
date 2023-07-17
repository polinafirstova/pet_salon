const up_button = document.getElementsByClassName("up")[0];

window.onscroll = () => {
    if (window.scrollY > 100) {
        up_button.style.opacity = "1";
    } else if (window.scrollY < 100) {
        up_button.style.opacity = "0";
    }
}

up_button.onclick = () => {
    window.scrollTo(0, 0);
}