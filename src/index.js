import "./css/style.css";
import { home } from "./modules/home.js";
import { menu } from "./modules/menu";

import { pageload } from "./modules/pageload";

pageload();
home();

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const mainContent = document.querySelector(".main");

homeBtn.addEventListener("click", () => {
  const clearMain = () => {
    mainContent.firstChild.remove();
  };
  clearMain();
  home();
});

menuBtn.addEventListener("click", () => {
  const clearMain = () => {
    mainContent.firstChild.remove();
  };
  clearMain();
  menu();
});
