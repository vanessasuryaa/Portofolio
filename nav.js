
const menu = document.querySelector(".menu");
const toggleMenu = () => menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);

document.querySelectorAll(".menu a");
document.forEach((link) => link.addEventListener("click", toggleMenu));