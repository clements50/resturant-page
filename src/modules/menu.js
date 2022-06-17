export const menu = () => {
  const main = document.querySelector(".main");
  const mainContent = document.createElement("div");
  const headline = document.createElement("h1");
  mainContent.classList.add("main-content");
  headline.textContent = "Regular Ass Menu!";
  mainContent.appendChild(headline);
  main.appendChild(mainContent);
};
