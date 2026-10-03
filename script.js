const darkModeButton = document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});
const menuButton = document.getElementById("menuButton");

const navigationMenu = document.querySelector("nav ul");

menuButton.addEventListener("click", function () {

    navigationMenu.classList.toggle("show");

});