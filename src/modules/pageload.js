const pageload = () => {
  const content = document.querySelector("#content");

  const newBtn = (buttonId, textContent) => {
    const btn = document.createElement("button");
    btn.classList.add(buttonId, "nav-btn");
    btn.textContent = textContent;
    return btn;
  };

  const navbar = () => {
    const homeBtn = newBtn("home-btn", "Home");
    const menuBtn = newBtn("menu-btn", "Menu");
    const contactBtn = newBtn("contact-btn", "Contact");
    const navBar = document.createElement("nav");
    const navContainer = document.createElement("div");
    homeBtn.classList.add("active");
    navContainer.appendChild(homeBtn);
    navContainer.appendChild(menuBtn);
    navContainer.appendChild(contactBtn);
    navBar.appendChild(navContainer);
    content.appendChild(navBar);
    tabChangeUnderLine();
  };

  const tabChangeUnderLine = () => {
    const btn = document.getElementsByClassName("nav-btn");

    const removeActive = () => {
      for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
      }
    };

    const onClick = (e) => {
      for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", (e) => {
          removeActive();
          e.target.classList.add("active");
        });
      }
    };

    onClick();
  };

  const createmain = () => {
    const content = document.querySelector("#content");
    const mainContent = document.createElement("div");
    mainContent.classList.add("main");
    content.appendChild(mainContent);
  };

  const createFooter = () => {
    const footer = document.createElement("div");
    footer.textContent = "Cody ";
    footer.classList.add("footer");
    content.appendChild(footer);
  };

  navbar();
  createmain();
  createFooter();
};

export { pageload };
