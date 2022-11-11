import ChangeNavImage from "./change-img-nav.js"; 


const botonMenu = document.querySelector("#button-menu");
const navbar = document.querySelector("#nav-bar");
botonMenu.addEventListener("click", () => {
	navbar.classList.toggle("open");  
})

window.addEventListener("resize", ChangeNavImage)
window.onload = ChangeNavImage