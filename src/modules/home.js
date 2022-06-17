import pantryimg from "../images/pantry.jpg";

export const home = () => {
  const main = document.querySelector(".main");
  const mainContent = document.createElement("div");
  const headline = document.createElement("h1");
  const description = document.createElement("p");
  const descriptionCard = document.createElement('div');
  descriptionCard.classList.add('description-card')
  description.classList.add("home-description");
  mainContent.classList.add("main-content");
  headline.textContent = "Regular Ass Food For Regular Ass People!";
  description.textContent =
    "We have been serving food with pantry quality since before dumpsters carried trash. Want a soggy grilled cheese no problem! Want some plain ass bread, Who needs a pantry for that? We have the scraps for you!";
  const pantryImage = new Image();
  pantryImage.src = pantryimg;
  pantryImage.classList.add("pantry-img");

  mainContent.appendChild(headline);
  main.appendChild(mainContent);
  mainContent.appendChild(pantryImage);
  mainContent.appendChild(descriptionCard);
  descriptionCard.appendChild(description);

};
