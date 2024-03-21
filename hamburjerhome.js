const buttonHamburguer = document.getElementById('hamburguer-button');
const menuHamburguer = document.getElementById('hamburguer-menu');

function toggleMenu() {
    const isMenuVisible = menuHamburguer.style.display === "flex";

    menuHamburguer.style.display = isMenuVisible ? "none" : "flex";

    menuHamburguer.style.backgroundImage = isMenuVisible ?
        "white" :
        "linear-gradient(to bottom, rgba(6, 7, 9, 1), rgba(148, 181, 245, 1), rgba(102, 144, 224, 1))";
}

buttonHamburguer.addEventListener('click', toggleMenu());