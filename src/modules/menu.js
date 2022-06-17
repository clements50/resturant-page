export const menu = () => {
  const main = document.querySelector(".main");
  const mainContent = document.createElement("div");
  const menuheadline = document.createElement("h1");
  mainContent.classList.add("main-content");
  menuheadline.classList.add('menu-header');
  menuheadline.textContent = "Regular Ass Menu!";
  mainContent.appendChild(menuheadline);
  main.appendChild(mainContent);
};
