const menu = document.querySelector("#menu");
const menuClose = document.querySelector("#burger-menu-close");
const menuOpen = document.querySelector("#burger-menu-open");

if (menuOpen) {
    menuOpen.addEventListener("click", function() {
        if (menu) {
            menu.setAttribute("data-open", true);
        }
    });
}

if (menuClose) {
    menuClose.addEventListener("click", function() {
        if (menu) {
            menu.removeAttribute("data-open", false);
        }
    });
}