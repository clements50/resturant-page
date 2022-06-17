import "./css/style.css";
import { home } from "./modules/home.js";
import { menu } from "./modules/menu";
import { pageload } from "./modules/pageload";

// pageload;
// home();

pageload();

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const mainContent = document.querySelector(".main");

const clearMain = () => {
  mainContent.firstChild.remove();
};

homeBtn.addEventListener("click", () => {
  clearMain();
  home();
});

menuBtn.addEventListener("click", () => {
  clearMain();
  menu();
});
